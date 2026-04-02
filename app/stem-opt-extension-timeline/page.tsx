import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'STEM OPT Extension Timeline: Key Dates and Requirements | StatusAnchor',
  description: 'USCIS regulations at 8 CFR 214.2(f)(10)(ii)(C) govern the 24-month STEM OPT extension. Learn the application window, 180-day rule, E-Verify requirement, and key dates.',
  alternates: { canonical: 'https://www.statusanchor.app/stem-opt-extension-timeline' },
}

export default function StemOptExtensionTimeline() {
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
          STEM OPT
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          STEM OPT Extension Timeline: Key Dates and Requirements
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The STEM OPT extension is a 24-month extension of post-completion OPT available to F-1 students with qualifying STEM degrees. USCIS regulations at 8 CFR 214.2(f)(10)(ii)(C) govern eligibility, timing, and ongoing compliance requirements.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Application Window: 90 Days Before EAD Expiration</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish the STEM OPT filing window as the 90-day period before the current OPT EAD expiration date. The Form I-765 application must be filed within this window — not earlier, and not after the EAD expires. Applications filed after EAD expiration do not qualify for the STEM OPT extension.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The application must be filed while the current OPT EAD is still valid. An expired EAD disqualifies the applicant from the STEM OPT extension under current USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 180-Day Automatic Extension</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Under 8 CFR 274a.12(b)(6)(iv), a STEM OPT application filed on time — before the current OPT EAD expires — triggers an automatic 180-day extension of the existing work authorization. This 180-day period begins on the EAD expiration date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              During the 180-day automatic extension, the combination of the expired EAD, the USCIS receipt notice, and a valid I-20 with STEM OPT recommendation serves as evidence of continued work authorization. If USCIS denies or withdraws the application, work authorization under the automatic extension ends.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Degree Eligibility Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules document that the STEM OPT extension is available only for degrees in fields listed on the Department of Homeland Security&apos;s STEM Designated Degree Program List. The designation must be current at the time of the STEM OPT application, not merely at the time the degree was completed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations also permit use of a prior STEM degree under certain conditions — allowing a student to rely on an older qualifying STEM degree even if their current OPT is based on a non-STEM degree.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">E-Verify Employer Requirement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules document that STEM OPT is only available with E-Verify employers. The employer must be enrolled in E-Verify, have a valid Federal Employer Identification Number (FEIN), and maintain E-Verify enrollment throughout the STEM OPT training period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that students are responsible for confirming E-Verify enrollment with prospective employers. If an employer&apos;s E-Verify participation lapses during the STEM OPT period, authorization to work for that employer is affected under current rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">DSO Certification and the New I-20</h2>
            <p className="text-gray-600 leading-relaxed">
              Before the STEM OPT application can be filed, the student&apos;s DSO must update the SEVIS record and issue a new I-20 reflecting the 24-month STEM OPT recommendation. USCIS rules state that this SEVIS-generated I-20 is required as part of the Form I-765 filing package. The application cannot be approved without DSO certification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Key Dates in the STEM OPT Timeline</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                {[
                  { date: '90 days before OPT EAD expiration', label: 'Earliest filing date for STEM OPT application' },
                  { date: 'OPT EAD expiration date', label: 'Last valid day of original OPT; 180-day automatic extension begins if application was timely filed' },
                  { date: '180 days after OPT EAD expiration', label: 'Maximum automatic extension period ends' },
                  { date: 'Every 6 months', label: 'Student must confirm employment status with DSO' },
                  { date: 'Within 5 business days', label: 'Employer must report terminations or material training plan changes' },
                ].map(item => (
                  <div key={item.date} className="flex gap-4">
                    <div className="min-w-[180px] text-xs font-bold text-[#0E7C7B] uppercase tracking-wide mt-0.5">{item.date}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Ongoing Compliance Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS STEM OPT regulations establish ongoing reporting obligations for both the student and the employer. Students must confirm employment status with their DSO every six months. Employers must report material changes to the training plan, including termination of employment, within 5 business days. Students may not accumulate more than 150 days of unemployment during the STEM OPT period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Form I-983 (Training Plan for STEM OPT Students) must be completed by both the student and employer before STEM OPT employment begins and must be updated when material changes occur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap and STEM OPT</h2>
            <p className="text-gray-600 leading-relaxed">
              STEM OPT students who have a timely-filed, cap-selected H-1B petition may be eligible for cap-gap protection under 8 CFR 214.2(f)(5)(vi). Cap-gap can extend authorized status and work authorization from the STEM OPT expiration date through September 30 of the H-1B start year.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your STEM OPT application window</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your 90-day STEM OPT filing window and the 180-day automatic extension period from your OPT EAD expiration date.
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
