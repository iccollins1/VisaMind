import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'F-1 Visa Grace Period Rules: Your 60 Days Explained | StatusAnchor',
  description: 'USCIS regulations under 8 CFR 214.2(f)(5)(iv) establish the 60-day F-1 grace period. Learn what is and is not permitted during this period of authorized status.',
}

export default function F1GracePeriod() {
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
          F-1 Status
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          F-1 Visa Grace Period Rules: Your 60 Days Explained
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The 60-day F-1 grace period is established under 8 CFR 214.2(f)(5)(iv) as a period of continued authorized status following program completion. It is a documented component of F-1 status — not an informal extension.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the Grace Period Is</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The F-1 grace period is a 60-day period of continued authorized status that follows completion of an academic program, as established under 8 CFR 214.2(f)(5)(iv). During this period, the student&apos;s F-1 status remains valid even though the academic program has ended.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Students in the grace period are in valid F-1 status, not &quot;out of status.&quot; USCIS regulations document that no unlawful presence accrues during this authorized grace period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">When the Grace Period Starts</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The grace period begins on the program completion date. USCIS regulations use the program end date on the I-20 as the controlling date — not the I-20 expiration date, the graduation ceremony date, or the date a student submits final work.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For students whose I-20 was extended multiple times, the grace period begins after the most recent program end date. Students who complete their program before the I-20 end date begin the grace period at actual completion, as documented in SEVIS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Authorized Activities During the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that the grace period is for taking authorized steps following program completion. The following actions are documented as permissible:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'Preparing for departure from the United States',
                'Filing for OPT (if within the 60-day post-completion OPT window)',
                'Applying for a change of status to another nonimmigrant category',
                'Arranging a transfer to another accredited institution',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <span className="text-[#0E7C7B] font-bold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations do not authorize employment during the grace period unless work authorization was previously granted (e.g., an existing OPT EAD that is still valid). The grace period alone does not confer work authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The OPT Filing Deadline and the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The OPT application must be filed within 60 days of the program end date — the same period as the grace period. These two windows run concurrently. A timely-filed OPT application during the grace period extends the student&apos;s authorized status while pending. An OPT application filed after day 60 is rejected.
            </p>
            <p className="text-gray-600 leading-relaxed">
              An approved OPT EAD transitions the student&apos;s authorized status from F-1 grace period to active OPT employment authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">60-Day vs. 15-Day Grace Period</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document two different grace period lengths. The 60-day grace period applies after normal program completion. A shorter 15-day grace period applies when a student is authorized to withdraw early or when a program is terminated. The 60-day grace period is the standard for students who complete their academic program.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Grace Period After OPT</h2>
            <p className="text-gray-600 leading-relaxed">
              When OPT expires, a separate 60-day grace period begins. This post-OPT grace period is also established under 8 CFR 214.2(f)(5)(iv) and carries the same characteristics: authorized status, no new employment authorization, and time to depart or take authorized action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap and the Grace Period</h2>
            <p className="text-gray-600 leading-relaxed">
              For F-1 students whose H-1B petition has been selected in the lottery and timely filed, cap-gap provisions under 8 CFR 214.2(f)(5)(vi) may extend authorized status beyond the normal 60-day grace period. Cap-gap runs from the OPT expiration or grace period expiration through September 30 of the H-1B start year.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Common Misconceptions</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The grace period does not equal the visa stamp expiration. An F-1 visa stamp may expire while a student is in valid status — the visa stamp is a travel document; the grace period is a status period. They are governed by separate rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Additionally, the grace period does not reset unlawful presence that may have already accrued, does not provide a second opportunity if a student re-enrolls and re-completes a program without a new I-20, and does not extend the F-1 visa stamp.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">See exactly when your grace period ends</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your 60-day grace period, OPT window, and every other critical F-1 deadline from your program dates.
          </p>
          <Link href="/signup" className="inline-flex bg-[#0E7C7B] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors">
            Track your deadlines in StatusAnchor — free →
          </Link>
        </div>

      </article>

      <SeoFooter />
    </main>
  )
}
