'use client'

import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { calculateDeadlines, deadlineColors, formatDeadlineDate, type Deadline } from '@/lib/deadlines'

type VisaProfile = {
  visa_type: string
  program_start_date: string
  program_end_date: string
  university_name: string | null
  country_of_citizenship: string
  plan_tier: 'free' | 'core' | 'pro'
  opt_start_date?: string | null
  ai_questions_used: number
  ai_questions_reset_date: string
}

const features = [
  {
    icon: '📅',
    title: 'Deadline tracker',
    body: 'Every critical date on your visa timeline — OPT windows, I-94 expiry, H-1B cap — mapped and explained in plain English.',
  },
  {
    icon: '🤖',
    title: 'AI Q&A',
    body: 'Ask anything about your visa status. Get plain-English answers based on official USCIS guidance, available 24/7.',
  },
  {
    icon: '⚖️',
    title: 'Attorney escalation',
    body: 'When your situation needs a real lawyer, StatusAnchor connects you immediately to vetted immigration attorneys.',
  },
]

function formatDate(iso: string) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

type ChatMessage = { role: 'user' | 'assistant'; content: string; escalation?: boolean }

const ESCALATION_MARKER = '\x00ESCALATE\x00'
const FREE_QUESTION_LIMIT = 5

function isResetDue(resetDateStr: string): boolean {
  const reset = new Date(resetDateStr)
  const due = new Date(reset)
  due.setDate(reset.getDate() + 30)
  return new Date() >= due
}

function DeadlineCard({ dl }: { dl: Deadline }) {
  const c = deadlineColors(dl.days_until)
  const absDays = Math.abs(dl.days_until)
  const pillLabel =
    dl.days_until === 0 ? 'Today' :
    dl.days_until > 0 ? `${absDays}d away` :
    `${absDays}d overdue`
  const badgeLabel =
    dl.status === 'overdue' ? 'Overdue' :
    dl.status === 'urgent' ? 'Urgent' :
    dl.days_until <= 90 ? 'Soon' : 'Upcoming'

  return (
    <div className={`bg-white border border-gray-200 border-l-4 ${c.border} rounded-xl px-5 py-4 flex items-start justify-between gap-4`}>
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <p className="text-sm font-bold text-[#1B2E4B]">{dl.title}</p>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.badge} ${c.badgeText}`}>
            {badgeLabel}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-1">{formatDeadlineDate(dl.date)}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{dl.description}</p>
      </div>
      <div className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap ${c.pill} ${c.pillText}`}>
        {pillLabel}
      </div>
    </div>
  )
}

export default function Dashboard() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState<VisaProfile | null>(null)
  const [profileLoaded, setProfileLoaded] = useState(false)
  const [questionsUsed, setQuestionsUsed] = useState(0)
  const [deadlines, setDeadlines] = useState<Deadline[]>([])
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState('')
  const [chatLoading, setChatLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/signin')
        return
      }
      const user = session.user
      setEmail(user.email ?? '')

      console.log('[dashboard] querying visa_profiles for user_id:', user.id)
      console.log('[dashboard] session access_token present:', !!session.access_token)

      const { data, error } = await supabase
        .from('visa_profiles')
        .select('visa_type, program_start_date, program_end_date, university_name, country_of_citizenship, plan_tier, opt_start_date, ai_questions_used, ai_questions_reset_date')
        .eq('user_id', user.id)
        .limit(1)

      console.log('[dashboard] visa_profiles result:', { data, error })
      if (error) console.log('[dashboard] full error object:', JSON.stringify(error, null, 2))

      if (!data?.[0]) {
        setProfile(null)
        setProfileLoaded(true)
        return
      }

      let raw = { ...data[0], plan_tier: data[0].plan_tier ?? 'free' }

      // Client-side reset: if 30+ days have passed since last reset, zero out the counter
      if (raw.ai_questions_reset_date && raw.plan_tier === 'free' && isResetDue(raw.ai_questions_reset_date)) {
        const todayStr = new Date().toISOString().split('T')[0]
        await supabase
          .from('visa_profiles')
          .update({ ai_questions_used: 0, ai_questions_reset_date: todayStr })
          .eq('user_id', user.id)
        raw = { ...raw, ai_questions_used: 0, ai_questions_reset_date: todayStr }
      }

      const resolved = raw as VisaProfile
      setProfile(resolved)
      setQuestionsUsed(resolved.ai_questions_used ?? 0)
      setDeadlines(calculateDeadlines(resolved))

      // Load last 20 chat interactions
      const { data: interactions } = await supabase
        .from('ai_interactions')
        .select('user_message, ai_response, is_escalation, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(20)

      if (interactions && interactions.length > 0) {
        const restored: ChatMessage[] = []
        for (const row of interactions) {
          restored.push({ role: 'user', content: row.user_message })
          restored.push({ role: 'assistant', content: row.ai_response, escalation: row.is_escalation })
        }
        setChatMessages(restored)
      }

      setProfileLoaded(true)
    }
    load()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const sendMessage = async () => {
    const text = chatInput.trim()
    if (!text || chatLoading) return
    // Safety guard — UI should prevent this but belt-and-suspenders
    if (profile?.plan_tier === 'free' && questionsUsed >= FREE_QUESTION_LIMIT) return

    const userMessage: ChatMessage = { role: 'user', content: text }
    const updatedMessages = [...chatMessages, userMessage]
    setChatMessages(updatedMessages)
    setChatInput('')
    setChatLoading(true)

    const assistantMessage: ChatMessage = { role: 'assistant', content: '' }
    setChatMessages([...updatedMessages, assistantMessage])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages,
          profile: profile ? {
            visa_type: profile.visa_type,
            program_start_date: profile.program_start_date,
            program_end_date: profile.program_end_date,
            country_of_citizenship: profile.country_of_citizenship,
          } : null,
        }),
      })

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      if (!reader) return

      // Read first chunk to check for escalation marker before streaming to UI
      const first = await reader.read()
      const firstChunk = first.done ? '' : decoder.decode(first.value, { stream: true })

      const { data: { session: s } } = await supabase.auth.getSession()

      // Increment question count for free users after any completed interaction
      const maybeIncrementCount = async () => {
        if (profile?.plan_tier === 'free' && s) {
          const newCount = questionsUsed + 1
          setQuestionsUsed(newCount)
          await supabase
            .from('visa_profiles')
            .update({ ai_questions_used: newCount })
            .eq('user_id', s.user.id)
        }
      }

      if (firstChunk === ESCALATION_MARKER) {
        setChatMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: '', escalation: true },
        ])
        if (s) {
          await supabase.from('ai_interactions').insert({
            user_id: s.user.id,
            user_message: text,
            ai_response: 'ESCALATION: This situation requires a licensed immigration attorney.',
            is_escalation: true,
          })
        }
        await maybeIncrementCount()
        return
      }

      // Not an escalation — stream the rest progressively
      let accumulated = firstChunk
      setChatMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: accumulated },
      ])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        accumulated += decoder.decode(value, { stream: true })
        setChatMessages(prev => [
          ...prev.slice(0, -1),
          { role: 'assistant', content: accumulated },
        ])
      }

      if (s && accumulated) {
        await supabase.from('ai_interactions').insert({
          user_id: s.user.id,
          user_message: text,
          ai_response: accumulated,
          is_escalation: false,
        })
      }
      await maybeIncrementCount()
    } catch {
      setChatMessages(prev => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'Something went wrong. Please try again.' },
      ])
    } finally {
      setChatLoading(false)
    }
  }

  if (!email || !profileLoaded) return null

  const isFree = profile?.plan_tier === 'free'
  const atLimit = isFree && questionsUsed >= FREE_QUESTION_LIMIT
  const nearLimit = isFree && questionsUsed === FREE_QUESTION_LIMIT - 1
  const remaining = FREE_QUESTION_LIMIT - questionsUsed

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1B2E4B] tracking-tight">
          Status<span className="text-[#0E7C7B]">Anchor</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400 hidden sm:block">{email}</span>
          <button
            onClick={handleSignOut}
            className="text-sm font-semibold text-gray-500 hover:text-[#1B2E4B] transition-colors"
          >
            Sign out
          </button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">

        {/* Welcome */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-2">Dashboard</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2E4B] tracking-tight">
            Welcome to StatusAnchor
          </h1>
          <p className="text-gray-500 mt-2 text-sm">You&apos;re signed in as <strong>{email}</strong></p>
        </div>

        {/* CTA or profile summary */}
        {!profile ? (
          <div className="bg-[#1B2E4B] rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#5BBFBE] mb-2">Get started</p>
              <h2 className="text-xl font-extrabold text-white mb-2">Build your immigration timeline</h2>
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-md">
                Tell us your visa type and program dates. We&apos;ll map every deadline you need to hit — so you never miss one.
              </p>
            </div>
            <Link
              href="/onboarding"
              className="shrink-0 bg-[#0E7C7B] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors text-sm whitespace-nowrap"
            >
              Start your timeline →
            </Link>
          </div>
        ) : (
          <div className="bg-[#1B2E4B] rounded-2xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Your timeline is active
                </div>
                <h2 className="text-xl font-extrabold text-white">
                  {profile.visa_type} Status
                </h2>
              </div>
              <Link
                href="/onboarding"
                className="shrink-0 text-xs font-semibold text-[#5BBFBE] hover:text-white transition-colors"
              >
                Edit details →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-[#94A3B8] mb-1 uppercase tracking-wide font-medium">Visa type</p>
                <p className="text-white font-bold text-sm">{profile.visa_type}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-[#94A3B8] mb-1 uppercase tracking-wide font-medium">Program end</p>
                <p className="text-white font-bold text-sm">{formatDate(profile.program_end_date)}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-xs text-[#94A3B8] mb-1 uppercase tracking-wide font-medium">Citizenship</p>
                <p className="text-white font-bold text-sm">{profile.country_of_citizenship}</p>
              </div>
            </div>
          </div>
        )}

        {/* Deadline timeline */}
        {profile && (
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Your deadline timeline</p>

            {deadlines.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <p className="text-sm text-gray-400">
                  Deadline tracking for {profile.visa_type} is coming soon.
                </p>
              </div>
            ) : isFree && deadlines.length > 2 ? (
              /* Free users: show first 2, gate the rest */
              <div>
                <div className="space-y-3 mb-3">
                  {deadlines.slice(0, 2).map((dl, i) => (
                    <DeadlineCard key={i} dl={dl} />
                  ))}
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  {/* Blurred remaining cards */}
                  <div className="space-y-3 blur-sm pointer-events-none select-none">
                    {deadlines.slice(2).map((dl, i) => (
                      <DeadlineCard key={i} dl={dl} />
                    ))}
                  </div>
                  {/* Upgrade overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/85 backdrop-blur-[2px] px-6 py-8 text-center rounded-xl">
                    <div className="text-2xl mb-3">🔒</div>
                    <p className="text-sm font-bold text-[#1B2E4B] mb-3">
                      Unlock your full immigration timeline — upgrade to Core
                    </p>
                    <Link
                      href="/upgrade"
                      className="bg-[#0E7C7B] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-[#1B2E4B] transition-colors mb-3"
                    >
                      Upgrade to Core
                    </Link>
                    <p className="text-xs text-gray-400 max-w-xs">
                      Most users upgrade when they realize how close their next deadline is.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Paid users: show all */
              <div className="space-y-3">
                {deadlines.map((dl, i) => (
                  <DeadlineCard key={i} dl={dl} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Feature cards */}
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
          {profile ? 'Your tools' : 'Coming after onboarding'}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {features.map(f => (
            <div
              key={f.title}
              className={`bg-white border border-gray-200 rounded-2xl p-6 relative transition-opacity ${!profile ? 'opacity-75' : ''}`}
            >
              {!profile && (
                <div className="absolute top-4 right-4 bg-gray-100 text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Locked
                </div>
              )}
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-[#1B2E4B] mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* AI Q&A Chat */}
        {profile && (
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">AI Q&amp;A</p>

            {atLimit ? (
              /* Hard wall — free user has used all 5 questions */
              <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
                <div className="text-3xl mb-4">🔒</div>
                <p className="text-sm font-bold text-[#1B2E4B] mb-2">
                  You&apos;ve reached your 5 free questions this month
                </p>
                <p className="text-xs text-gray-500 mb-5 max-w-xs mx-auto leading-relaxed">
                  Upgrade to Core for unlimited AI Q&amp;A — answers based on official USCIS guidance, available 24/7.
                </p>
                <Link
                  href="/upgrade"
                  className="inline-flex bg-[#0E7C7B] text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#1B2E4B] transition-colors"
                >
                  Upgrade to Core for unlimited AI Q&amp;A
                </Link>
              </div>
            ) : (
              /* Active chat — free (with counter) or paid */
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

                {/* Disclaimer bar */}
                <div className="bg-[#E6F4F4] border-b border-[#B2DFDF] px-5 py-2.5 flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#0E7C7B] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-[#2D6A6A] font-medium">
                    Information only — not legal advice. Based on official USCIS guidance.
                  </p>
                </div>

                {/* Messages */}
                <div className="h-80 overflow-y-auto px-5 py-4 space-y-4">
                  {chatMessages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                      <div className="text-3xl">🤖</div>
                      <p className="text-sm font-medium text-[#1B2E4B]">Ask anything about your {profile.visa_type} status</p>
                      <p className="text-xs text-gray-400 max-w-xs">
                        Deadlines, requirements, next steps — answered in plain English based on USCIS guidance.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center mt-1">
                        {[
                          `When does my ${profile.visa_type} expire?`,
                          'What happens after my program ends?',
                          'What are my work authorization options?',
                        ].map(suggestion => (
                          <button
                            key={suggestion}
                            onClick={() => setChatInput(suggestion)}
                            className="text-xs bg-[#E6F4F4] text-[#0E7C7B] font-medium px-3 py-1.5 rounded-full hover:bg-[#0E7C7B] hover:text-white transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {msg.escalation ? (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-[90%]">
                          <div className="flex items-start gap-3">
                            <span className="text-lg">⚖️</span>
                            <div>
                              <p className="text-sm font-bold text-amber-800 mb-1">Attorney consultation required</p>
                              <p className="text-xs text-amber-700 leading-relaxed">
                                Your question involves a situation — such as an RFE, visa denial, unauthorized employment, status gap, or removal proceedings — that requires a licensed immigration attorney. StatusAnchor cannot provide guidance on these matters.
                              </p>
                              {profile.plan_tier === 'pro' ? (
                                <Link
                                  href="/upgrade"
                                  className="inline-flex items-center gap-1.5 mt-3 bg-amber-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-amber-800 transition-colors"
                                >
                                  Find an attorney near you →
                                </Link>
                              ) : (
                                <Link
                                  href="/upgrade"
                                  className="inline-flex items-center gap-1.5 mt-3 bg-[#0E7C7B] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#1B2E4B] transition-colors"
                                >
                                  Upgrade to Pro — $29/mo
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[#1B2E4B] text-white rounded-br-sm'
                            : 'bg-gray-100 text-[#1a1a2e] rounded-bl-sm prose prose-sm max-w-none'
                        }`}>
                          {msg.content
                            ? msg.role === 'assistant'
                              ? <ReactMarkdown
                                  components={{
                                    p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                    ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1">{children}</ul>,
                                    ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1">{children}</ol>,
                                    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                                    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
                                    code: ({ children }) => <code className="bg-black/10 rounded px-1 py-0.5 text-xs font-mono">{children}</code>,
                                  }}
                                >{msg.content}</ReactMarkdown>
                              : msg.content
                            : (chatLoading && i === chatMessages.length - 1
                              ? <span className="inline-flex gap-1 items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}} /><span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}} /><span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}} /></span>
                              : null)}
                        </div>
                      )}
                    </div>
                  ))}

                  <div ref={messagesEndRef} />
                </div>

                {/* Counter + warning + input — only for free users with questions remaining */}
                <div className="border-t border-gray-100 px-4 pt-3 pb-3">

                  {isFree && (
                    <div className="mb-2.5">
                      <p className="text-xs text-gray-400 font-medium">
                        {questionsUsed} of {FREE_QUESTION_LIMIT} questions used this month
                      </p>
                      {nearLimit && (
                        <div className="mt-1.5 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-start gap-2">
                          <span className="text-amber-500 text-xs mt-0.5">⚠</span>
                          <p className="text-xs text-amber-700 leading-relaxed">
                            {remaining} free question{remaining !== 1 ? 's' : ''} remaining this month —{' '}
                            <Link href="/upgrade" className="font-bold underline hover:no-underline">
                              upgrade to Core for unlimited access
                            </Link>
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={e => setChatInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                      placeholder="Ask about your visa status, deadlines, next steps…"
                      className="flex-1 text-sm border border-gray-200 rounded-xl px-4 py-2.5 text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                      disabled={chatLoading}
                    />
                    <button
                      onClick={sendMessage}
                      disabled={chatLoading || !chatInput.trim()}
                      className="bg-[#0E7C7B] text-white px-4 py-2.5 rounded-xl hover:bg-[#1B2E4B] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>

                </div>

              </div>
            )}
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3">
          <span className="text-base mt-0.5">ℹ️</span>
          <p className="text-xs text-[#2D6A6A] leading-relaxed">
            StatusAnchor provides general immigration information derived from publicly available USCIS guidance — not legal advice. All timelines are system-calculated based on your inputs. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>

      </main>
    </div>
  )
}
