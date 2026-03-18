'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

type VisaProfile = {
  visa_type: string
  program_start_date: string
  program_end_date: string
  university_name: string | null
  country_of_citizenship: string
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
    body: 'When your situation needs a real lawyer, VisaMind connects you immediately to vetted immigration attorneys.',
  },
]

function formatDate(iso: string) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Dashboard() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [profile, setProfile] = useState<VisaProfile | null>(null)
  const [profileLoaded, setProfileLoaded] = useState(false)

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
        .select('visa_type, program_start_date, program_end_date, university_name, country_of_citizenship')
        .eq('user_id', user.id)
        .limit(1)

      console.log('[dashboard] visa_profiles result:', { data, error })
      if (error) console.log('[dashboard] full error object:', JSON.stringify(error, null, 2))

      setProfile(data?.[0] ?? null)
      setProfileLoaded(true)
    }
    load()
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/signin')
  }

  if (!email || !profileLoaded) return null

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1B2E4B] tracking-tight">
          Visa<span className="text-[#0E7C7B]">Mind</span>
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
            Welcome to VisaMind
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
            <div className="mt-5 pt-5 border-t border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#5BBFBE] mb-3">View your timeline</p>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Your personalized deadline calendar is being built. Check back soon — critical dates for your {profile.visa_type} status will appear here.
              </p>
            </div>
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

        {/* Disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3">
          <span className="text-base mt-0.5">ℹ️</span>
          <p className="text-xs text-[#2D6A6A] leading-relaxed">
            VisaMind provides general immigration information derived from publicly available USCIS guidance — not legal advice. All timelines are system-calculated based on your inputs. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>

      </main>
    </div>
  )
}
