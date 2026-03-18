import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const ESCALATION_SENTINEL = '{"escalate":true}'

function buildSystemPrompt(profile: {
  visa_type?: string
  program_start_date?: string
  program_end_date?: string
  country_of_citizenship?: string
} | null): string {
  const profileContext = profile
    ? `
The user's current immigration profile:
- Visa type: ${profile.visa_type}
- Program start date: ${profile.program_start_date}
- Program end date: ${profile.program_end_date}
- Country of citizenship: ${profile.country_of_citizenship}

Use this context to give specific, relevant answers about their situation.`
    : ''

  return `You are StatusAnchor's immigration information assistant. You provide general immigration information based exclusively on official USCIS guidance and publicly available federal immigration rules.

CRITICAL RULES:
1. You provide INFORMATION ONLY — never legal advice. Always frame outputs as system-calculated information, not recommendations or opinions.
2. Every answer must be grounded in official USCIS guidance. State when something is based on USCIS rules.
3. Always include a brief reminder that the user's specific situation may have factors that affect these general guidelines.
4. Never tell a user what they "should" or "must" do — say what USCIS rules state.
5. Keep answers clear, plain-English, and structured. Use bullet points for deadlines or steps.
6. If asked about something outside USCIS/immigration, politely redirect to immigration topics only.
7. BREVITY: Keep responses concise — 3 to 5 sentences for simple questions. Do not dump everything at once. End with "Want more details?" if there is more relevant information you could share. Only expand if the user asks for more.
${profileContext}

ESCALATION RULE — read carefully:
Before answering, evaluate whether the user is describing a personal, active legal emergency — meaning they are personally experiencing RIGHT NOW one of: receiving an RFE, having their visa denied, having a status gap or period of unlawful presence, or being in removal/deportation proceedings.

- If YES (personal emergency): respond ONLY with the exact text: {"escalate":true} — nothing else, no explanation.
- If NO (general question, hypothetical, asking how something works, asking what an RFE is, asking about someone else's situation, or asking what to do in a scenario they haven't confirmed is their own): answer normally with helpful USCIS-based information.

Examples that should NOT escalate: "What is an RFE?", "How does the appeals process work?", "What happens if someone misses an OPT deadline?", "Can an H-1B be revoked?"
Examples that SHOULD escalate: "I received an RFE", "My visa was denied", "I think I have a gap in my status", "I got a notice to appear", "I've been working without authorization"`
}

export async function POST(req: NextRequest) {
  const { messages, profile } = await req.json()

  const systemPrompt = buildSystemPrompt(profile)

  const anthropicMessages: Anthropic.MessageParam[] = messages.map(
    (m: { role: string; content: string }) => ({
      role: m.role as 'user' | 'assistant',
      // Strip escalation placeholder text from history so Claude sees clean context
      content: m.content === '' ? '[escalation]' : m.content,
    })
  )

  try {
    const stream = await client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: anthropicMessages,
    })

    const encoder = new TextEncoder()

    // Buffer the start of the stream to detect the escalation sentinel
    // before committing to streaming the response to the client.
    const readable = new ReadableStream({
      async start(controller) {
        let buffer = ''
        let sentinelChecked = false

        try {
          for await (const event of stream) {
            if (
              event.type !== 'content_block_delta' ||
              event.delta.type !== 'text_delta'
            ) continue

            const chunk = event.delta.text

            if (!sentinelChecked) {
              buffer += chunk
              // Wait until we have enough chars to know if it's the sentinel
              if (buffer.length < ESCALATION_SENTINEL.length) continue

              sentinelChecked = true

              if (buffer.trimStart().startsWith('{"escalate":true}')) {
                // Signal escalation via a custom header isn't possible mid-stream,
                // so we write a special marker the client knows to intercept.
                controller.enqueue(encoder.encode('\x00ESCALATE\x00'))
                controller.close()
                return
              }

              // Not an escalation — flush buffer and continue streaming
              controller.enqueue(encoder.encode(buffer))
              buffer = ''
            } else {
              controller.enqueue(encoder.encode(chunk))
            }
          }

          // Stream ended before we hit sentinel length — flush any remaining buffer
          if (!sentinelChecked && buffer) {
            controller.enqueue(encoder.encode(buffer))
          }
        } catch (streamErr) {
          console.error('[chat] stream error:', streamErr)
          controller.enqueue(encoder.encode('[Error reading stream]'))
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  } catch (err) {
    console.error('[chat] Anthropic API error:', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
