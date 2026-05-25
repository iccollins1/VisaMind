import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'CPT vs OPT: How USCIS Rules Distinguish the Two Programs | StatusAnchor',
  description: 'USCIS regulations document distinct rules for CPT and OPT work authorization for F-1 students — eligibility timing, employer requirements, and how CPT affects OPT eligibility.',
  alternates: { canonical: 'https://www.statusanchor.app/cpt-vs-opt-difference' },
}

export default function CptVsOptDifference() {
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
          F-1 CPT / OPT
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          CPT vs OPT: How USCIS Rules Distinguish the Two Programs
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS regulations at 8 CFR 214.2(f)(10) document two forms of work authorization available to F-1 students: Curricular Practical Training (CPT) and Optional Practical Training (OPT). The two programs have fundamentally different eligibility conditions, timing rules, and implications for future immigration benefits.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What CPT Is Under USCIS Rules</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations define CPT as an integral part of an established curriculum — it is training that is required or directly related to a specific course. CPT must be authorized before work begins and is tied to a specific course in which the student is enrolled. The employer and position must align with the academic component that makes the CPT curricular.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CPT is authorized by the DSO and appears directly on the student&apos;s I-20. There is no USCIS application for CPT — no Form I-765 is filed and no separate EAD card is issued. The I-20 with CPT authorization and the CPT employer information printed on it serves as the work authorization document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What OPT Is Under USCIS Rules</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations define OPT as temporary employment authorization for practical training directly related to an F-1 student&apos;s major area of study. Unlike CPT, OPT does not need to be tied to a specific course. OPT may be used before graduation (pre-completion OPT) or after graduation (post-completion OPT).
            </p>
            <p className="text-gray-600 leading-relaxed">
              OPT requires a USCIS application on Form I-765 with a DSO recommendation in SEVIS. USCIS issues a physical EAD card that serves as the work authorization document. The application and USCIS processing create a formal agency record separate from the school.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Critical CPT Impact on OPT Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document one of the most significant distinctions between CPT and OPT: full-time CPT eliminates OPT eligibility. Specifically, 8 CFR 214.2(f)(10)(i) states that a student who has engaged in 12 months or more of full-time CPT is ineligible for OPT. Full-time CPT is defined as 20 hours per week or more.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Part-time CPT (fewer than 20 hours per week) does not affect OPT eligibility, regardless of how many months it is used. The 12-month rule applies only to full-time CPT. USCIS regulations document no waiver or exception to this rule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Enrollment Requirement During CPT</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that CPT is available only while the student is currently enrolled — CPT cannot extend beyond the academic term in which it is authorized and the student must be registered for the associated course. CPT authorization ends when the academic term ends or when the course ends, whichever is earlier.
            </p>
            <p className="text-gray-600 leading-relaxed">
              OPT, by contrast, does not require active enrollment. Post-completion OPT is specifically designed for use after graduation. Students on post-completion OPT are not required to maintain course enrollment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Employer Obligations</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that CPT employers have no E-Verify obligation for standard CPT authorization. The employer is identified on the I-20 but is not required to participate in any federal verification system for CPT purposes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For STEM OPT — an extension of post-completion OPT — the employer E-Verify requirement applies. Standard OPT also carries no E-Verify requirement for employers. USCIS Form I-9 employment verification applies to both CPT and OPT employment, as it does to all employment in the United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">One Year of Full-Time Enrollment Before CPT</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that CPT is available only after the student has completed one full academic year of full-time enrollment in F-1 status, with an exception for graduate programs where CPT is required from the start of the program under the documented curriculum. A student in their first academic year generally cannot use CPT for off-campus employment under the standard regulatory framework.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your OPT eligibility and deadlines</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor monitors your OPT filing window, unemployment days, and STEM OPT extension timeline in one dashboard.
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
