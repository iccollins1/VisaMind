import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'EAD Card Processing Time: What to Expect in 2026 | StatusAnchor',
  description: 'USCIS publishes Form I-765 processing times by service center. Learn how EAD card processing works for OPT applicants, the 90-day filing window, and what to do if your card is delayed.',
}

export default function EadCardProcessingTime() {
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
          OPT EAD
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          EAD Card Processing Time: What to Expect in 2026
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The Employment Authorization Document (EAD) is the physical card issued by USCIS that serves as evidence of an F-1 OPT student&apos;s work authorization. Understanding EAD processing timelines is essential for planning around the OPT application window.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the EAD Documents</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The EAD card displays the holder&apos;s name, photograph, alien registration number, card validity dates, and the class of admission. For OPT students, the EAD displays a start date and an expiration date. Work authorization is valid from the start date to the expiration date printed on the card.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules state that employment may not begin before the EAD start date, even if the card arrives early. The start date on the card is the controlling date, not the date of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-765 and the OPT EAD Application</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The EAD for OPT is applied for using Form I-765 (Application for Employment Authorization). The application must be filed within the OPT window: no earlier than 90 days before the program end date and no later than 60 days after the program end date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules do not currently permit premium processing for Form I-765 OPT applications. The EAD card is produced and mailed after USCIS approves the I-765 application, typically within 7 to 14 days of the approval notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">USCIS Processing Times for I-765 in 2026</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publishes current Form I-765 processing times by service center at uscis.gov/processIngtimes. As of early 2026, OPT EAD processing times at most service centers have ranged from 3 to 5 months, though this varies based on application volume, service center staffing, and whether biometrics are required.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS defines processing time as the time from receipt of a properly filed application to completion of adjudication. This does not include mail delivery time for the physical card after approval.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Why the 90-Day Filing Window Exists</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations make the I-765 OPT application window available up to 90 days before the program end date specifically because current processing times often exceed 60 days. Filing within the 90-day window provides additional lead time for USCIS to adjudicate the application before the requested OPT start date. Students who file in the final weeks of the application window face a higher risk of the EAD not arriving by the start date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">If the EAD Has Not Arrived by the Start Date</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules document that if an approved EAD is not received by the start date, applicants should allow additional time for mail delivery before contacting USCIS. USCIS provides an inquiry process for cards that have been approved but not delivered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Work authorization under OPT does not automatically extend if the physical EAD has not arrived. USCIS rules document that the EAD start date does not change based on the date of receipt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">EAD Card Errors</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS instructions document a process for requesting correction of EAD cards containing errors, such as incorrect birth dates, misspelled names, or incorrect validity dates. Errors are reported to USCIS promptly. Employers use the EAD to verify employment eligibility under the I-9 process, so accuracy is required. USCIS provides specific instructions for reporting EAD errors on its website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">STEM OPT EAD</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The STEM OPT extension requires a separate Form I-765 filing and results in a new EAD card reflecting the STEM OPT period (typically 24 months). The STEM OPT application must be filed within 90 days before the current OPT EAD expiration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The 180-day automatic extension rule under 8 CFR 274a.12(b)(6)(iv) means that during STEM OPT application processing, the expired OPT EAD — combined with the USCIS receipt notice and updated I-20 — may serve as evidence of continued work authorization. Details are documented in the USCIS instructions for Form I-765 under the STEM OPT category.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your OPT filing window and EAD timeline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your OPT application window, earliest filing date, and EAD start date range from your I-20 program end date.
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
