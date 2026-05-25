import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'DSO Authorization Explained: The F-1 Student and School Official Relationship | StatusAnchor',
  description: 'USCIS and SEVP regulations document the role of Designated School Officials in F-1 student status. Learn what DSOs are authorized to do and how the regulatory framework works.',
  alternates: { canonical: 'https://www.statusanchor.app/dso-authorization-explained' },
}

export default function DsoAuthorizationExplained() {
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
          F-1 DSO
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          DSO Authorization Explained: The F-1 Student and School Official Relationship
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS and SEVP regulations at 8 CFR 214.3 establish the role of the Designated School Official (DSO) in the F-1 visa program. The DSO is the primary point of contact between F-1 students, their school, and the federal government&apos;s SEVIS database.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Who DSOs Are Under USCIS Regulations</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that DSOs are school employees designated by the school to maintain SEVIS records and carry out F-1 regulatory responsibilities on behalf of the school. Each SEVP-certified school must have a Principal Designated School Official (PDSO) and may have additional DSOs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SEVP regulations require DSOs to complete SEVP training and maintain active SEVIS access. DSOs are vetted by SEVP and are personally responsible under the regulations for the accuracy of SEVIS records they manage. The PDSO is the school&apos;s primary point of contact with SEVP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What DSOs Are Authorized to Do in SEVIS</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS and SEVP regulations document an extensive set of DSO-exclusive authorities in SEVIS. DSOs are authorized to: issue initial and transfer I-20s, extend the program end date on a student&apos;s I-20, recommend OPT and CPT in SEVIS, authorize reduced course loads, enter employment information, sign I-20s for travel, and terminate SEVIS records for regulatory violations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              These actions cannot be taken by students directly in SEVIS — with the limited exception of the SEVP Portal for certain OPT reporting updates. The DSO&apos;s SEVIS actions directly affect the student&apos;s official immigration record.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The DSO Role in OPT Authorization</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that an OPT application cannot be filed with USCIS without a DSO recommendation. The DSO enters the OPT recommendation in SEVIS, which generates a SEVIS-recommended I-20 that is submitted with the Form I-765 to USCIS. Without the SEVIS recommendation, the USCIS application is incomplete and will be rejected.
            </p>
            <p className="text-gray-600 leading-relaxed">
              DSOs also issue the STEM OPT recommendation in SEVIS for qualifying students. The DSO must review the student&apos;s degree against the DHS STEM Designated Degree Program List and verify the employer&apos;s E-Verify enrollment before making the SEVIS recommendation for STEM OPT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Travel Signatures and the DSO</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that F-1 students returning to the United States after international travel must present an I-20 with a valid DSO travel signature. USCIS policy establishes that a DSO travel signature remains valid for one year from the date of signature for most students, and for six months for students on OPT.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The DSO travel signature is separate from the visa stamp in the passport. A valid visa stamp permits the CBP officer to admit the student, but the travel signature on the I-20 is a required document for re-entry. An I-20 with an expired travel signature requires a new signature from the DSO before the student departs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Reduced Course Load Authorization</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations at 8 CFR 214.2(f)(6)(iii) document that a DSO may authorize a reduced course load for qualifying reasons including medical conditions (with a licensed medical professional&apos;s recommendation) or documented academic difficulties in the initial academic term. The DSO must enter the reduced course load authorization in SEVIS before the student drops below full-time enrollment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A student who reduces course load without DSO authorization is considered out of status under the documented USCIS rules, regardless of the reason for the reduction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">SEVIS Record Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that DSOs are required to terminate a student&apos;s SEVIS record when the student fails to maintain F-1 status, exceeds OPT unemployment day limits, transfers to another school without following the transfer procedure, or is otherwise no longer eligible for F-1 status. A terminated SEVIS record has immediate status implications. Students whose SEVIS records have been terminated face complex status issues that require review by a licensed immigration attorney.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Stay ahead of every F-1 deadline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your I-20 dates, OPT windows, and reporting deadlines so nothing falls through the cracks.
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
