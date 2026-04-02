import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'STEM OPT Extension: Requirements, Timeline, and Deadlines | StatusAnchor',
  description: 'USCIS regulations at 8 CFR 214.2(f)(10)(ii)(C) govern STEM OPT eligibility, the 90-day filing window, 180-day automatic extension, E-Verify requirements, and Form I-983 obligations.',
  alternates: { canonical: 'https://www.statusanchor.app/blog/stem-opt-extension-guide' },
}

export default function StemOptExtensionGuide() {
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
          <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">STEM OPT extension</span>
          <span className="text-xs text-gray-400">March 2026</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          STEM OPT Extension: Requirements, Timeline, and Deadlines
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The STEM OPT extension gives qualifying F-1 students an additional 24 months of employment authorization after the initial 12-month OPT period. USCIS regulations at 8 CFR 214.2(f)(10)(ii)(C) govern the extension, setting out eligibility conditions, filing timelines, and ongoing compliance requirements.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the STEM OPT Extension Is</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The STEM OPT extension is a 24-month extension of F-1 post-completion OPT available to students who hold a qualifying STEM degree from an accredited U.S. institution, are currently on valid post-completion OPT, and have a qualifying job with an E-Verify employer in a STEM-related role.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The extension brings the total maximum OPT period for eligible STEM students to 36 months (12 + 24). USCIS regulations document that the STEM OPT extension is not automatic — a separate Form I-765 application must be filed within the specified window while the current OPT EAD is still valid.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">STEM Degree Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The Department of Homeland Security maintains the STEM Designated Degree Program List, which enumerates CIP codes qualifying for the STEM OPT extension. USCIS rules document that the degree program&apos;s CIP code must appear on this list at the time of the STEM OPT application — not merely at the time the degree was completed.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations also permit use of a prior STEM degree under specific conditions. A student whose current OPT is based on a non-STEM degree may use a prior qualifying STEM degree from a U.S. institution, provided the prior degree was earned within 10 years of the STEM OPT application date and meets other regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">E-Verify Employer Requirement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules document that STEM OPT is only available with employers enrolled in E-Verify. E-Verify is a Department of Homeland Security web-based system that allows employers to confirm employment eligibility. The employer must be enrolled at the time the student begins STEM OPT employment and must maintain enrollment throughout the training period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that students are responsible for confirming E-Verify enrollment with prospective employers before the STEM OPT application is filed. If an employer&apos;s E-Verify participation lapses during the STEM OPT period, the student&apos;s authorization to work for that employer under STEM OPT is affected by current rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Filing Window: 90 Days Before EAD Expiration</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish the STEM OPT extension application window as the 90-day period before the current OPT EAD expiration date. Filing earlier than 90 days before expiration is not permitted; filing after the EAD expires disqualifies the application from STEM OPT consideration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because the DSO must update SEVIS and issue a new I-20 before the application can be filed, the USCIS-documented timeline effectively requires students to work with their DSO well in advance of the 90-day window opening.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 180-Day Automatic Extension</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              One of the most consequential STEM OPT provisions is the 180-day automatic extension under 8 CFR 274a.12(b)(6)(iv). When a STEM OPT application is timely filed — before the current OPT EAD expires — the current OPT EAD is automatically extended for up to 180 days. This allows the student to continue working at the same E-Verify employer while USCIS adjudicates the application.
            </p>
            <p className="text-gray-600 leading-relaxed">
              During the 180-day automatic extension period, work authorization is evidenced by the combination of the expired EAD card, the USCIS Form I-797 receipt notice for the STEM OPT application, and the SEVIS-generated I-20 reflecting the STEM OPT recommendation. If USCIS denies or withdraws the application, the automatic extension ends and work authorization terminates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">DSO Certification and the I-20 Update</h2>
            <p className="text-gray-600 leading-relaxed">
              Before the STEM OPT I-765 application can be filed, the DSO must update the student&apos;s SEVIS record to reflect the STEM OPT recommendation and issue a new I-20. The updated I-20 is required as part of the Form I-765 filing package. USCIS rules document that the application cannot be approved without this DSO-issued, SEVIS-generated I-20.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-983: The Training Plan</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations require that both the student and the employer complete Form I-983 (Training Plan for STEM OPT Students) before STEM OPT employment begins. The form documents the student&apos;s learning objectives, skills to be developed, compensation, hours per week, and the employer&apos;s oversight and mentoring plan.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Form I-983 is not filed with USCIS — it is maintained by the student, employer, and DSO. However, USCIS may request it during a site visit or as part of adjudication. It must be updated when material changes occur in the training arrangement, such as a change in supervisor or training objectives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Ongoing Compliance Requirements</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS STEM OPT regulations establish ongoing obligations after approval that differ from standard OPT:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { label: 'Every 6 months', desc: 'Student must confirm employment status with DSO through SEVIS' },
                  { label: 'Within 5 business days', desc: 'Employer must report terminations, material training plan changes, or significant drops in compensation' },
                  { label: 'Within 5 business days', desc: 'Student must report changes in employer or employment status to DSO' },
                  { label: 'Maximum 150 days', desc: 'Total cumulative unemployment permitted during the full STEM OPT period' },
                ].map(item => (
                  <div key={item.label} className="flex gap-3">
                    <span className="min-w-[150px] text-xs font-bold text-[#0E7C7B] uppercase tracking-wide mt-0.5">{item.label}</span>
                    <span className="text-sm text-gray-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3">
              Failure to comply with these documented requirements can result in SEVIS termination and loss of STEM OPT authorization.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap and STEM OPT</h2>
            <p className="text-gray-600 leading-relaxed">
              STEM OPT students with a timely-filed, cap-selected H-1B petition may be eligible for cap-gap protection under 8 CFR 214.2(f)(5)(vi). Cap-gap can extend authorized status and work authorization from the STEM OPT expiration date through September 30 of the H-1B start year, covering the period between when STEM OPT ends and when H-1B status begins.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your STEM OPT filing window automatically</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your 90-day STEM OPT application window, 180-day automatic extension, and every other critical date from your OPT EAD expiration.
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
