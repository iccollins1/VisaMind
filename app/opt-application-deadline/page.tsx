import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'OPT Application Deadline: What F-1 Students Need to Know | StatusAnchor',
  description: 'USCIS regulations establish a strict 90-day to 60-day filing window for OPT applications. Learn the documented rules governing Form I-765 deadlines for F-1 students.',
  alternates: { canonical: 'https://www.statusanchor.app/opt-application-deadline' },
}

export default function OptApplicationDeadline() {
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
          OPT Application Deadline: What F-1 Students Need to Know
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The OPT application deadline is one of the most consequential dates in an F-1 student&apos;s immigration timeline. USCIS regulations at 8 CFR 214.2(f)(11) establish a strict filing window with no exceptions for late submissions.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The USCIS-Documented Application Window</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document a 150-day filing window for post-completion OPT applications. The window opens 90 days before the program end date listed on the I-20 and closes 60 days after that program end date. USCIS does not accept OPT applications filed outside this window.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The program end date on the I-20 — not the I-20 expiration date — controls this calculation. A student whose I-20 was extended beyond their program completion date still uses the program end date printed in Section 5 of their I-20 for OPT eligibility purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The EAD Start Date Rule</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The EAD (Employment Authorization Document) issued for post-completion OPT cannot begin more than 60 days after the program end date. USCIS rules also state that the earliest possible OPT start date is the program end date itself. Students who apply before their program ends may request a specific start date up to 60 days after program completion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Work authorization under OPT begins on the date printed on the EAD card, not the date the card is received. USCIS rules document that employment may not begin until the EAD card is in hand and the start date has been reached.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Documents About Late Applications</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations do not provide exceptions for late OPT applications. The 60-day post-completion filing deadline is absolute under current rules. An application filed after the 60-day post-completion period is rejected, and the applicant&apos;s 60-day grace period continues to run from the program end date regardless of application status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Required Application Materials</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS requires submission of Form I-765, a SEVIS-generated I-20 with a DSO recommendation for OPT, a copy of current visa documents, passport-style photographs, and payment of the filing fee. The DSO recommendation — made through SEVIS — is a prerequisite; USCIS rules state that the application cannot be filed without it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The SEVIS I-901 fee (paid to SEVP, currently $350 for F-1 students) is separate from the I-765 filing fee. For most OPT applications, the SEVIS fee has already been paid at initial enrollment and does not need to be paid again.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Filing Timeline and Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Because USCIS processing times for Form I-765 can extend beyond 90 days, USCIS regulations allow early filing up to 90 days before program end. USCIS publishes current Form I-765 processing times on its official website at uscis.gov. Applications filed closer to the program end date carry a higher risk that the EAD will not arrive before the requested start date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Premium processing is not available for Form I-765 OPT applications under current USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The STEM OPT Extension</h2>
            <p className="text-gray-600 leading-relaxed">
              F-1 students who hold a qualifying STEM degree may be eligible for a 24-month OPT extension under 8 CFR 214.2(f)(10)(ii)(C). The STEM OPT application window, the employer E-Verify requirement, and the timing rules are separate from initial OPT and documented in distinct USCIS regulations.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know exactly when your OPT window opens and closes</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your specific OPT deadlines based on your I-20 program end date — no math required.
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
