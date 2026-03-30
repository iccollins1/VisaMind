import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'F-1 Grace Period: The Complete Guide to Your 60 Days | StatusAnchor',
  description: 'What is and is not permitted during the F-1 grace period, when it starts, how it interacts with OPT filing, and what USCIS regulations document about unlawful presence.',
}

export default function F1GracePeriodCompleteGuide() {
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

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">F-1 grace period</span>
          <span className="text-xs text-gray-400">March 2026</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          F-1 Grace Period: The Complete Guide to Your 60 Days
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          For F-1 students, the 60-day grace period is a critical and often misunderstood component of immigration status. Established under 8 CFR 214.2(f)(5)(iv), it is a period of documented authorized status — not an informal extension or a period of legal limbo.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the F-1 Grace Period Is</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The F-1 grace period is a 60-day period of continued authorized status that follows completion of an academic program, as established under 8 CFR 214.2(f)(5)(iv). During this period, the student&apos;s F-1 status remains valid even though the academic program has ended.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Students in the grace period are in valid F-1 status — not &quot;out of status.&quot; USCIS regulations document that no unlawful presence accrues during this authorized grace period. This distinction matters because unlawful presence of 180 days or more triggers immigration bars documented in federal statute.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The grace period is a distinct regulatory status, not simply the remaining days before an I-20 expires. It begins at program completion, runs for exactly 60 days, and ends regardless of any action taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">When the Grace Period Starts</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The grace period begins on the program completion date. USCIS regulations use the program end date on the I-20 as the controlling date — not the I-20 expiration date, the graduation ceremony date, or the date a student submits their final work or takes their final exam.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For students whose I-20 was extended multiple times, the grace period begins after the most recent program end date. Students who complete their program before the I-20 end date begin the grace period at actual completion, as documented in SEVIS by the DSO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Is Permitted During the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document the grace period as a time for taking authorized steps following program completion:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
              {[
                { label: 'Departure preparation', desc: 'The student may remain in the U.S. to arrange departure within 60 days of program completion.' },
                { label: 'OPT application', desc: 'The student may file Form I-765 for post-completion OPT within the 60-day post-completion window, which runs concurrently with the grace period.' },
                { label: 'Change of status', desc: 'The student may file for a change to another authorized nonimmigrant status, provided the application is filed before the grace period expires.' },
                { label: 'School transfer', desc: 'The student may initiate a transfer to another SEVP-certified institution through the SEVIS transfer process.' },
              ].map(item => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-[#0E7C7B] font-bold mt-0.5 flex-shrink-0">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1B2E4B]">{item.label}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Is Not Permitted During the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations do not authorize new employment during the grace period unless work authorization was previously granted through an existing valid EAD. The grace period alone does not confer work authorization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Remaining in the United States beyond the 60-day grace period without taking an authorized action — filing OPT, changing status, or departing — results in status expiration. USCIS regulations do not provide an additional grace period within the grace period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The OPT Filing Deadline and the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The OPT application filing window and the grace period run concurrently. Both are 60 days from the program end date. An OPT application that is timely filed during the grace period extends the student&apos;s authorized status while the application is pending with USCIS. If USCIS approves the application, the student&apos;s authorized status transitions from F-1 grace period to active OPT employment authorization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              An OPT application filed after day 60 is rejected by USCIS. Filing attempts after the window closes do not preserve status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 60-Day vs. 15-Day Grace Period</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document two different grace period lengths. The 60-day grace period applies after normal program completion. A shorter 15-day grace period applies when a student is authorized to withdraw early from a program or when a program is terminated before the student completes it. The 15-day grace period does not include the OPT filing window; OPT eligibility requires completion of an academic program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Grace Period After OPT</h2>
            <p className="text-gray-600 leading-relaxed">
              When OPT expires, a separate 60-day grace period begins — also established under 8 CFR 214.2(f)(5)(iv). The post-OPT grace period carries the same characteristics: authorized status, no new employment authorization, and a 60-day window to depart or take authorized action. The post-OPT grace period does not authorize STEM OPT filing — STEM OPT applications must be filed before the OPT EAD expires, not during the post-OPT grace period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap and the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed">
              For F-1 students whose H-1B petition has been selected in the lottery and timely filed, cap-gap provisions under 8 CFR 214.2(f)(5)(vi) may extend authorized status and work authorization beyond the normal grace period. Cap-gap runs from the OPT expiration or grace period expiration date through September 30 of the H-1B start year. Departure from the United States during the cap-gap period terminates cap-gap status under USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the Grace Period Does Not Do</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Several common misconceptions about the grace period are not supported by USCIS regulations:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  'The grace period does not reset unlawful presence that may have already accrued before the grace period began.',
                  'The grace period does not equal or depend on the visa stamp expiration date. The visa stamp and the grace period are governed by entirely separate rules.',
                  'The grace period does not extend the F-1 visa stamp or enable the student to apply for a new visa stamp from within the United States.',
                  'The grace period does not provide a second 60-day period if the student re-enrolls at the same or a different institution.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-gray-400 font-bold mt-0.5 flex-shrink-0">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">See exactly when your grace period ends</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your 60-day grace period, OPT window, and every other critical F-1 date from your program end date.
          </p>
          <Link href="/signup" className="inline-flex bg-[#0E7C7B] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors">
            Track your deadlines in StatusAnchor — free →
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-sm text-[#0E7C7B] hover:underline">← Back to all guides</Link>
        </div>

      </article>

      <SeoFooter />
    </main>
  )
}
