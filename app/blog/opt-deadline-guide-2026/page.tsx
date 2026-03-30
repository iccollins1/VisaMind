import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'OPT Application Deadline Guide for F-1 Students in 2026 | StatusAnchor',
  description: 'The complete guide to the OPT application deadline: the 90-day to 60-day filing window, EAD start date rules, required documents, and what USCIS regulations say about late applications.',
}

export default function OptDeadlineGuide2026() {
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
          <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">OPT application deadline</span>
          <span className="text-xs text-gray-400">March 2026</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          OPT Application Deadline Guide for F-1 Students in 2026
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The OPT application deadline is among the most time-sensitive dates in the F-1 immigration timeline. USCIS regulations at 8 CFR 214.2(f)(11) establish a strict filing window with no exceptions for late submissions. This guide summarizes publicly available USCIS guidance on the OPT application window.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What OPT Is</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Optional Practical Training (OPT) is a period of authorized temporary employment directly related to an F-1 student&apos;s major area of study. USCIS regulations at 8 CFR 214.2(f)(10) document two types: pre-completion OPT and post-completion OPT. Post-completion OPT is by far the more commonly used category.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Post-completion OPT authorizes up to 12 months of employment following the completion of an academic program. The authorization is documented on an Employment Authorization Document (EAD) issued by USCIS following approval of Form I-765.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Application Window: 90 Days Before to 60 Days After</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish a 150-day filing window for post-completion OPT applications. The window opens 90 days before the program end date on the I-20 and closes 60 days after that program end date. USCIS does not accept OPT applications filed outside this window — there are no exceptions documented in current regulations for late submissions based on lack of awareness, DSO delays, or other circumstances.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The program end date — not the I-20 expiration date — controls this calculation. A student whose I-20 was extended beyond their actual program completion date still uses the program end date printed in Section 5 of their I-20 for OPT eligibility purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The EAD Start Date Rules</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The EAD start date is constrained by USCIS rules in both directions. The EAD cannot start earlier than the program end date. The EAD cannot start later than 60 days after the program end date. Within these bounds, a specific start date is requested on Form I-765.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Because USCIS cannot guarantee the EAD will be produced and delivered by any specific date, students who apply near the end of the application window face a higher risk that the EAD start date will pass before the card arrives.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules document that work may not begin before the EAD start date, even if the OPT application is already approved. The physical EAD card must be in hand before employment begins.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the I-765 Application Requires</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules require the following for an OPT application package:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ul className="space-y-2">
                {[
                  'Completed Form I-765 with the correct OPT eligibility category code',
                  'SEVIS-generated I-20 with DSO recommendation for OPT (required before filing)',
                  'Copies of current visa documents and prior EADs (if applicable)',
                  'Two passport-style photographs',
                  'Payment of the USCIS filing fee',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#0E7C7B] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              A common cause of application delays is incomplete documentation or a missing DSO endorsement. The DSO must recommend OPT through SEVIS before the student can file. USCIS cannot approve an OPT application lacking a valid DSO SEVIS recommendation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">SEVIS Fee vs. USCIS Filing Fee</h2>
            <p className="text-gray-600 leading-relaxed">
              The SEVIS I-901 fee (paid to SEVP, currently $350 for F-1 students) is a separate, one-time fee paid at initial enrollment and is not required again for OPT. The I-765 USCIS filing fee is paid separately when submitting the application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Processing Times in 2026</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publishes current processing times for Form I-765 at uscis.gov. As of early 2026, processing times for OPT EAD applications have ranged from several weeks to several months depending on the service center and application volume. Premium processing is not available for OPT I-765 applications under current USCIS rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The 90-day early filing window exists specifically to allow applications to be processed before the requested OPT start date. USCIS processing time data is updated monthly and reflects historical case completion rates, not guaranteed future timelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Regulations State About Late Applications</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document explicitly that post-completion OPT applications filed after the 60-day post-program-end deadline are rejected. Once the 60-day window closes, OPT eligibility for that degree program is forfeited under current rules. The student&apos;s 60-day grace period continues to run regardless of whether an OPT application was attempted.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS does not provide a mechanism to petition for an OPT application extension beyond the 60-day post-completion window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The STEM OPT Extension and the 12-Month Limit</h2>
            <p className="text-gray-600 leading-relaxed">
              Standard post-completion OPT provides 12 months of employment authorization. F-1 students holding a qualifying STEM degree and employed by an E-Verify employer may apply for a 24-month STEM OPT extension before the initial 12-month OPT expires, as documented in 8 CFR 214.2(f)(10)(ii)(C). The STEM OPT application has its own filing window (90 days before OPT EAD expiration) and requirements, documented separately under USCIS rules.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know your exact OPT application window</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your OPT filing window, earliest filing date, and EAD start date range — no spreadsheet required.
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
