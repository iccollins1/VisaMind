import Anthropic from '@anthropic-ai/sdk'
import { NextRequest } from 'next/server'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const ESCALATION_KEYWORDS = [
  'rfe', 'request for evidence',
  'denial', 'denied', 'visa denial',
  'unauthorized employment', 'unauthorized work',
  'worked before my ead', 'worked without ead', 'worked before ead',
  'status gap', 'gap in my status', 'gap in status', 'out of status', 'unlawful presence',
  'deportation', 'removal', 'deported',
  'revoked', 'visa revoked', 'h-1b revoked', 'petition revoked',
]

function containsEscalationKeyword(text: string): boolean {
  const lower = text.toLowerCase()
  return ESCALATION_KEYWORDS.some(kw => lower.includes(kw))
}

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

ESCALATION: If the user's message contains any of the following situations — RFE (Request for Evidence), visa denial, unauthorized employment, status gaps, unlawful presence, or deportation/removal proceedings — do not attempt to answer. Instead, immediately flag that this situation requires a licensed immigration attorney.`
}

export async function POST(req: NextRequest) {
  const { messages, profile } = await req.json()

  const lastUserMessage: string = messages[messages.length - 1]?.content ?? ''

  // Check for escalation keywords in latest user message
  if (containsEscalationKeyword(lastUserMessage)) {
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        const escalationMsg = 'ESCALATION: Your message mentions a situation that goes beyond general immigration information — this requires a licensed immigration attorney. StatusAnchor cannot provide guidance on RFEs, visa denials, unauthorized employment, status gaps, or removal proceedings. Please consult a qualified immigration attorney immediately.'
        controller.enqueue(encoder.encode(escalationMsg))
        controller.close()
      },
    })
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Escalation': 'true',
      },
    })
  }

  const systemPrompt = buildSystemPrompt(profile)

  const anthropicMessages: Anthropic.MessageParam[] = messages.map((m: { role: string; content: string }) => ({
    role: m.role as 'user' | 'assistant',
    content: m.content,
  }))

  try {
    const stream = await client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 1024,
      system: systemPrompt,
      messages: anthropicMessages,
    })

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
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
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Escalation': 'false',
      },
    })
  } catch (err) {
    console.error('[chat] Anthropic API error:', err)
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
