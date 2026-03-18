'use client'

import Link from 'next/link'

const coreFeatures = [
  'Full AI Q&A in plain English',
  'Deadline tracking for your visa type',
  'Document checklist',
  'Critical date alerts',
  'USCIS processing time tracker',
  'Weekly Visa Health Check emails',
]

const proFeatures = [
  'Everything in Core',
  'Attorney referral directory',
  'Find an immigration attorney near you',
  'Priority support',
  'Multiple visa types',
  'Policy change alerts',
]

export default function Upgrade() {
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
            Know exactly where you stand.
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Less than one minute of an attorney&apos;s time. Cancel anytime.
          </p>

          {/* Student discount note */}
          <div className="inline-flex items-center gap-2 bg-[#E6F4F4] text-[#0E7C7B] text-xs font-bold px-4 py-2 rounded-full mt-5">
            🎓 .edu emails get Core for $9/mo — student pricing applied automatically
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Core */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Core</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight">$9</span>
              <span className="text-base font-medium text-gray-400 mb-1">/mo</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">For students and visa holders who need clarity.</p>

            <ul className="space-y-3 mb-8">
              {coreFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]">
                  <svg className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/api/stripe/checkout?plan=core"
              className="block text-center py-3 rounded-xl border-2 border-gray-200 font-bold text-sm text-[#1B2E4B] hover:border-[#0E7C7B] transition-colors"
            >
              Get Core — $9/mo
            </a>
          </div>

          {/* Pro */}
          <div className="bg-white border-2 border-[#0E7C7B] rounded-2xl p-8 relative shadow-sm">
            {/* Most Popular badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0E7C7B] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
              Most Popular
            </div>

            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Pro</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight">$29</span>
              <span className="text-base font-medium text-gray-400 mb-1">/mo</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">For complex situations and transitions.</p>

            <ul className="space-y-3 mb-8">
              {proFeatures.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#1a1a2e]">
                  <svg className="w-4 h-4 text-[#0E7C7B] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/api/stripe/checkout?plan=pro"
              className="block text-center py-3 rounded-xl bg-[#0E7C7B] text-white font-bold text-sm hover:bg-[#1B2E4B] transition-colors"
            >
              Get Pro — $29/mo
            </a>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3">
          <span className="text-base mt-0.5">ℹ️</span>
          <p className="text-xs text-[#2D6A6A] leading-relaxed">
            StatusAnchor provides general immigration information derived from publicly available USCIS guidance — not legal advice. Attorney referrals are provided as a directory service only. No attorney-client relationship is formed through use of this platform. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>

      </main>
    </div>
  )
}
