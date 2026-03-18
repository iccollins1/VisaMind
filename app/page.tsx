import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
        <div className="text-xl font-bold text-[#1B2E4B] tracking-tight">
          Visa<span className="text-[#0E7C7B]">Mind</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">How it works</a>
          <a href="#pricing" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">Pricing</a>
          <Link href="/signin" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">Sign in</Link>
          <Link href="/signup" className="bg-[#0E7C7B] text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#1B2E4B] transition-colors">
            Get started free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#E6F4F4] text-[#0E7C7B] text-xs font-bold px-4 py-1.5 rounded-full mb-7 uppercase tracking-wide">
          <span className="w-1.5 h-1.5 bg-[#0E7C7B] rounded-full" />
          For F-1, OPT, H-1B & more
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          Never miss a visa deadline <span className="text-[#0E7C7B]">again.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
          VisaMind tracks your immigration timeline, explains every deadline in plain English, and tells you exactly when you need a real attorney — before it&apos;s too late.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-5">
          <Link href="/signup" className="bg-[#0E7C7B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#1B2E4B] transition-colors text-base">
            Get your free timeline →
          </Link>
          <a href="#how" className="bg-white text-[#1B2E4B] font-semibold px-8 py-3.5 rounded-xl border-2 border-gray-200 hover:border-[#0E7C7B] transition-colors text-base">
            See how it works
          </a>
        </div>
        <p className="text-xs text-gray-400">Free to start · No credit card required · Setup in 5 minutes</p>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white border-y border-gray-200 py-5 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            'Based on official USCIS guidance',
            'Information only — not legal advice',
            'Attorney escalation built in',
            'Documents encrypted & secure',
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <svg className="w-4 h-4 text-[#0E7C7B]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* PAIN */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-3">The problem</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-4">
          The US immigration system gives you no margin for error.
        </h2>
        <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
          One missed deadline. One misread notice. One form filed a day late. That&apos;s all it takes to lose your ability to work, study, or stay in the United States.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { icon: '📋', title: 'Deadlines buried in jargon', body: 'USCIS notices are written for attorneys, not students. Most people don\'t know what they\'re looking at until it\'s too late.' },
            { icon: '💸', title: 'Attorneys cost $300/hr', body: 'For questions that take 5 minutes to answer. Most international students can\'t afford to ask every time they\'re unsure.' },
            { icon: '😰', title: 'No one tells you what\'s next', body: 'Your I-20 doesn\'t come with a roadmap. Your DSO is overloaded. Google gives you forums from 2019.' },
            { icon: '⏰', title: 'Deadlines don\'t wait', body: 'Miss your OPT application window by one day and you lose 12 months of work authorization. There is no grace period.' },
          ].map(c => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-2xl mb-3">{c.icon}</div>
              <h3 className="font-bold text-[#1B2E4B] mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-4">Your timeline in 5 minutes.</h2>
          <p className="text-gray-500 max-w-xl mb-10 leading-relaxed">
            Input your details once. VisaMind maps every critical date, tracks every deadline, and tells you exactly when you need a real attorney.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { n: '1', title: 'Input your details', body: 'Visa type, program dates, current status. Structured onboarding under 5 minutes.' },
              { n: '2', title: 'Get your timeline', body: 'VisaMind maps every critical deadline based on publicly available USCIS guidance.' },
              { n: '3', title: 'Stay ahead automatically', body: 'Weekly Visa Health Checks land in your inbox. Policy changes explained in plain English.' },
              { n: '4', title: 'Get an attorney when you need one', body: 'When your situation needs more than information, VisaMind connects you immediately.' },
            ].map(s => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 bg-[#E6F4F4] text-[#0E7C7B] rounded-xl flex items-center justify-center font-extrabold text-lg mx-auto mb-4">{s.n}</div>
                <h3 className="font-bold text-[#1B2E4B] mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-3">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-4">Start free. Upgrade when you&apos;re ready.</h2>
        <p className="text-gray-500 mb-10">Less than one minute of attorney time. Cancel anytime.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Free</p>
            <p className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-1">$0</p>
            <p className="text-sm text-gray-400 mb-6">Get your deadline calendar.</p>
            <ul className="space-y-2 mb-8">
              {['Deadline calendar for one visa type', 'Critical date alerts', 'USCIS processing time tracker'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                  <span className="text-[#0E7C7B] font-bold mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center py-2.5 rounded-lg border-2 border-gray-200 font-bold text-sm text-[#1B2E4B] hover:border-[#0E7C7B] transition-colors">
              Get started free
            </Link>
          </div>
          {/* Student */}
          <div className="bg-white border-2 border-[#0E7C7B] rounded-2xl p-7 relative shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0E7C7B] text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap uppercase tracking-wide">
              Most popular · Student
            </div>
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Student</p>
            <p className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-1">$9<span className="text-base font-medium text-gray-400">/mo</span></p>
            <p className="text-sm text-gray-400 mb-6">Verified with your .edu email.</p>
            <ul className="space-y-2 mb-8">
              {['Everything in Free', 'AI Q&A in plain English', 'Document vault', 'Weekly Visa Health Check', 'Policy change alerts', 'Attorney escalation access'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                  <span className="text-[#0E7C7B] font-bold mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center py-2.5 rounded-lg bg-[#0E7C7B] text-white font-bold text-sm hover:bg-[#1B2E4B] transition-colors">
              Start for $9/mo
            </Link>
          </div>
          {/* Pro */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-2">Pro</p>
            <p className="text-4xl font-extrabold text-[#1B2E4B] tracking-tight mb-1">$29<span className="text-base font-medium text-gray-400">/mo</span></p>
            <p className="text-sm text-gray-400 mb-6">For complex situations and transitions.</p>
            <ul className="space-y-2 mb-8">
              {['Everything in Student', 'Multiple visa types', 'AI interview prep', 'Priority attorney directory', 'F-1 → H-1B transition support'].map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-[#1a1a2e]">
                  <span className="text-[#0E7C7B] font-bold mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="block text-center py-2.5 rounded-lg border-2 border-gray-200 font-bold text-sm text-[#1B2E4B] hover:border-[#0E7C7B] transition-colors">
              Get Pro
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3">
          <span className="text-base mt-0.5">ℹ️</span>
          <p className="text-xs text-[#2D6A6A] leading-relaxed">
            VisaMind provides general immigration information derived from publicly available USCIS guidance — not legal advice. All timelines are system-calculated based on your inputs. Your situation may have factors that affect these outputs. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1B2E4B] py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Know exactly where you stand.</h2>
        <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">Join international students and workers who stopped guessing and started tracking.</p>
        <Link href="/signup" className="inline-flex bg-[#0E7C7B] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors">
          Get your free timeline →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8 px-6 text-center">
        <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
          VisaMind provides general immigration information derived from publicly available USCIS guidance and documentation. VisaMind is not a law firm and does not provide legal advice. No attorney-client relationship is formed through use of this platform. All outputs are system-calculated information based on user-provided data.
        </p>
        <p className="text-xs text-gray-400 mt-3">
          © 2026 VisaMind · visamind.app ·{' '}
          <Link href="/privacy" className="text-[#0E7C7B] hover:underline">Privacy Policy</Link> ·{' '}
          <Link href="/terms" className="text-[#0E7C7B] hover:underline">Terms of Service</Link>
        </p>
      </footer>

    </main>
  )
}