import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'OPT vs STEM OPT: Key Differences Every F-1 Student Should Know | StatusAnchor',
  description: 'USCIS regulations document distinct rules for OPT and STEM OPT — eligibility, duration, employer requirements, and timing. Learn the key differences for 2026.',
  alternates: { canonical: 'https://www.statusanchor.app/opt-stem-opt-difference' },
}

export default function OptStemOptDifference() {
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
          OPT vs STEM OPT: Key Differences Every F-1 Student Should Know
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS regulations at 8 CFR 214.2(f)(10) and 8 CFR 214.2(f)(10)(ii)(C) document two distinct work authorization programs for F-1 students: Optional Practical Training (OPT) and the STEM OPT extension. Each program carries separate eligibility requirements, timelines, and employer obligations.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Duration: What USCIS Rules Establish</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that standard post-completion OPT provides up to 12 months of employment authorization. This 12-month period is shared across all OPT authorized for a given degree level — pre-completion OPT used during enrollment counts against the 12-month total.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The STEM OPT extension provides an additional 24 months of employment authorization beyond the standard 12-month OPT period, for a combined potential total of 36 months at a given degree level. USCIS established this 24-month STEM OPT extension through regulations finalized in 2016.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Eligibility Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              For standard OPT, USCIS regulations require that the student be in valid F-1 status, have a DSO recommendation entered in SEVIS, and have their program end date fall within the applicable filing window. OPT is available for bachelor&apos;s, master&apos;s, and doctoral degree programs across all fields of study.
            </p>
            <p className="text-gray-600 leading-relaxed">
              STEM OPT eligibility requires additional conditions documented by USCIS: the student&apos;s degree must appear on the DHS STEM Designated Degree Program List, the employer must be enrolled in and use E-Verify, the employer and student must complete Form I-983 (Training Plan), and the student must already be on a valid standard OPT EAD. USCIS rules also require the STEM OPT application to be filed with at least 90 days remaining on the current OPT EAD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The E-Verify Requirement for STEM OPT</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that every employer wishing to employ a STEM OPT student must be enrolled in the E-Verify program and in good standing. This is a statutory requirement with no waiver — an employer not enrolled in E-Verify cannot employ a STEM OPT student under the documented rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Standard OPT carries no E-Verify requirement for employers under current USCIS regulations. The employer for standard OPT is not required to participate in E-Verify or complete any specific training plan form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Reporting Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document reporting obligations for both programs, but the STEM OPT obligations are substantially more detailed. For standard OPT, students are required to report changes in employer, address, and legal name to their DSO within 10 days.
            </p>
            <p className="text-gray-600 leading-relaxed">
              STEM OPT regulations additionally require formal self-evaluations by the student every 12 months using Form I-983, annual employer attestation reports, and reporting of material changes to the training plan. USCIS rules state that failure to comply with STEM OPT reporting requirements can jeopardize the student&apos;s employment authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Unemployment Day Limits</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that standard OPT holders are limited to 90 days of cumulative unemployment during the 12-month OPT period. STEM OPT holders face a stricter limit: an additional 60 days of unemployment allowed during the 24-month STEM extension period. These limits are tracked in SEVIS and apply independently for the OPT and STEM OPT periods.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Applying for Each Program</h2>
            <p className="text-gray-600 leading-relaxed">
              Both programs require filing Form I-765 with USCIS. Standard OPT applications are filed through USCIS with a DSO-recommended I-20. STEM OPT applications additionally require a completed Form I-983 signed by both the student and employer, a copy of the current OPT EAD, and the DSO&apos;s STEM OPT recommendation in SEVIS. USCIS processes each as a separate application and issues a new EAD card for the STEM OPT extension.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your OPT and STEM OPT deadlines automatically</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your unemployment day count, extension filing windows, and key dates based on your specific EAD.
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
