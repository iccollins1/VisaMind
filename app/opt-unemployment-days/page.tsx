import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'OPT Unemployment Days: The 90-Day Rule Explained | StatusAnchor',
  description: 'USCIS regulations document a 90-day cumulative unemployment limit for OPT holders and a 60-day limit for STEM OPT. Learn what counts as unemployment and how SEVIS tracks it.',
  alternates: { canonical: 'https://www.statusanchor.app/opt-unemployment-days' },
}

export default function OptUnemploymentDays() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">
      <SeoNav />

      <article className="max-w-3xl mx-auto px-6 py-16">

        {/* Disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3 mb-10">
          <span className="text-base mt-0.5 flex-shrink-0">ℹ️</span>
          <p className="text-sm text-[#2D6A6A] leading-relaxed">
            This page provides general immigration information based on publicly available USCIS guidance — not legal advice. Your situation may have factors that change these answers. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#E6F4F4] text-[#0E7C7B] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
          F-1 OPT
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          OPT Unemployment Days: The 90-Day Rule Explained
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS regulations at 8 CFR 214.2(f)(10)(ii)(E) document a cumulative unemployment limit for F-1 students on post-completion OPT. Exceeding this limit is documented by USCIS as a failure to maintain status. The rules establish separate unemployment day limits for standard OPT and the STEM OPT extension.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 90-Day Limit for Standard OPT</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that an F-1 student on post-completion OPT is limited to 90 cumulative days of unemployment during the 12-month OPT authorization period. This limit is cumulative — gaps between jobs, time before finding first employment, and any other period without qualifying employment all count toward the same 90-day total.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules state that the 90-day unemployment period begins running from the OPT start date printed on the EAD card, regardless of when the student graduates or when they begin looking for work. The clock does not pause for weekends, holidays, or travel outside the United States during the OPT period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Additional 60-Day Limit for STEM OPT</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document a separate, additional unemployment allowance for the 24-month STEM OPT extension period: 60 cumulative days. The 60-day STEM OPT unemployment limit is in addition to the 90-day standard OPT limit — it does not reset or carry over from the standard OPT period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This means the total maximum unemployment days across a full OPT plus STEM OPT authorization period is 150 cumulative days, with 90 during the standard OPT period and up to 60 during the STEM OPT extension period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Documents as Qualifying Employment</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS guidance documents that employment during OPT must be directly related to the student&apos;s degree program, for at least 20 hours per week. Multiple part-time positions may collectively satisfy the 20-hour-per-week requirement. Self-employment is allowed under specific conditions documented by USCIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Unpaid internships and volunteer positions may qualify as OPT employment under USCIS guidance if the work is directly related to the field of study and meets Fair Labor Standards Act (FLSA) standards for unpaid work. The applicable USCIS guidance document is published on uscis.gov.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">How SEVIS Tracks Unemployment Days</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              SEVIS automatically begins counting unemployment days from the OPT EAD start date. When a student reports a new employer to their DSO, the DSO enters the employer information and start date in SEVIS, which stops the unemployment day counter. When employment ends, the DSO records the end date and the counter resumes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations require OPT students to report employment changes to their DSO within 10 days of the change. Failure to report employer changes does not pause the unemployment day counter — SEVIS continues counting from the last recorded employer end date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Consequences Documented by USCIS</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that exceeding the unemployment day limits constitutes a failure to maintain F-1 status. The DSO is required to terminate the student&apos;s SEVIS record upon determining the student has exceeded the unemployment limit. Students whose SEVIS records are terminated for unemployment day violations face status implications that require immediate review by a licensed immigration attorney.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know exactly how many unemployment days remain</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your cumulative OPT unemployment days in real time so nothing sneaks up on you.
          </p>
          <Link href="/signup" className="inline-flex bg-[#0E7C7B] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors">
            Track your specific deadlines in StatusAnchor — free →
          </Link>
        </div>

      </article>

      <SeoFooter />
    </main>
  )
}
