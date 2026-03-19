'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const coreFeatures = [
  'AI Q&A in plain English (information, not legal advice)',
  'System-calculated deadline tracking',
  'Personalized document checklist',
  'Critical date alerts',
  'USCIS processing time tracker',
  'Weekly Visa Health Check emails',
  'When to involve an attorney — clearly flagged',
]

const proFeatures = [
  'Everything in Core',
  'Attorney referral access (pre-qualified, context-aware)',
  'Priority support',
  'Multiple visa types',
  'Policy change alerts',
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}

export default function Upgrade() {
  const [loading, setLoading] = useState<'core' | 'pro' | null>(null)

  async function startCheckout(plan: 'core' | 'pro') {
    setLoading(plan)
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      window.location.href = '/signin'
      return
    }
    const res = await fetch(`/api/stripe/checkout?plan=${plan}`, {
      headers: { Authorization: `Bearer ${session.access_token}` },
    })
    if (!res.ok) {
      if (res.status === 401) { window.location.href = '/signin'; return }
      setLoading(null)
      return
    }
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1B2E4B] tracking-tight">
          Status<span className="text-[#0E7C7B]">Anchor</span>
        </Link>
        <Link href="/dashboard" className="text-sm font-semibold text-gray-500 hover:text-[#1B2E4B] transition-colors">
          ← Back to dashboard
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-3">Upgrade</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-4">
            Stop guessing. Know exactly where you stand.
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Less than one minute of an attorney&apos;s time. Cancel anytime.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">

          {/* Core */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Core</p>

            {/* Pricing */}
            <div className="mb-1">
              <span className="text-4xl font-extrabold text-gray-300 line-through tracking-tight">$14</span>
              <span className="text-base font-medium text-gray-300">/mo</span>
            </div>
            <div className="flex items-end gap-1.5 mb-1">
              <span className="text-4xl font-extrabold text-[#0E7C7B] tracking-tight">$9</span>
              <span className="text-base font-medium text-gray-400 mb-1">/mo</span>
              <span className="text-xs font-bold text-[#0E7C7B] mb-1.5">Student price</span>
            </div>

            <p className="text-sm text-gray-500 mt-3 mb-6 leading-relaxed">
              For students and visa holders who want clarity without paying for an attorney.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {coreFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => startCheckout('core')}
              disabled={loading !== null}
              className="block w-full text-center py-3 rounded-xl bg-[#1B2E4B] text-white font-bold text-sm hover:bg-[#0E7C7B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === 'core' ? 'Redirecting…' : 'Start Core — from $9/mo'}
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white border-2 border-[#0E7C7B] rounded-2xl p-8 relative shadow-sm flex flex-col">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E7C7B] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
              Most Popular
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Pro</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight">$29</span>
              <span className="text-base font-medium text-gray-400 mb-1">/mo</span>
            </div>

            <p className="text-sm text-gray-500 mt-3 mb-6 leading-relaxed">
              For complex situations, transitions, and higher-stakes timelines.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              {proFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]">
                  <CheckIcon />
                  {f}
                </li>
              ))}
            </ul>

            <button
              onClick={() => startCheckout('pro')}
              disabled={loading !== null}
              className="block w-full text-center py-3 rounded-xl bg-[#0E7C7B] text-white font-bold text-sm hover:bg-[#1B2E4B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading === 'pro' ? 'Redirecting…' : 'Upgrade to Pro — $29/mo'}
            </button>
          </div>

        </div>

        {/* Student pricing banner */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-base">🎓</span>
          <p className="text-sm text-[#0E7C7B] font-semibold">
            Student pricing applied automatically with a .edu email.
          </p>
        </div>

        {/* Trust line */}
        <p className="text-center text-xs text-gray-400 mb-10">
          No contracts. Cancel anytime. Your data stays yours.
        </p>

        {/* Footer disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3">
          <span className="text-base mt-0.5">ℹ️</span>
          <p className="text-xs text-[#2D6A6A] leading-relaxed">
            Attorney referrals are provided as a directory service — not a recommendation or legal advice. StatusAnchor is not a law firm. No attorney-client relationship is formed through use of this platform.
          </p>
        </div>

      </main>
    </div>
  )
}
