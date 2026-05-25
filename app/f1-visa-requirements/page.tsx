import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'F-1 Visa Requirements: What USCIS Rules Establish for International Students | StatusAnchor',
  description: 'USCIS and DOS regulations document the requirements for F-1 student visa eligibility, SEVIS enrollment, I-20 issuance, and visa interview requirements for 2026.',
  alternates: { canonical: 'https://www.statusanchor.app/f1-visa-requirements' },
}

export default function F1VisaRequirements() {
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
          F-1 Visa
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          F-1 Visa Requirements: What USCIS Rules Establish for International Students
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The F-1 student visa is governed by regulations at 8 CFR 214.2(f) and the Immigration and Nationality Act. USCIS and the Student and Exchange Visitor Program (SEVP) jointly administer the rules that govern who qualifies, how status is maintained, and what documentation is required.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">SEVP Certification and School Approval</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that F-1 status is available only at schools approved by SEVP. Before a school can enroll F-1 students, it must obtain SEVP certification, which authorizes the school to issue Forms I-20. SEVP maintains a public database of approved schools at studyinthestates.dhs.gov.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules establish that an I-20 issued by a non-SEVP-certified school cannot be used to apply for an F-1 visa or to request a change of status to F-1. Acceptance at an SEVP-certified school is a prerequisite for all subsequent F-1 documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Form I-20</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that the Form I-20 (Certificate of Eligibility for Nonimmigrant Student Status) is issued by the school&apos;s Designated School Official (DSO) through the SEVIS system. The I-20 documents the student&apos;s program of study, program dates, and financial support information.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The I-20 program end date — not the visa expiration date — controls most F-1 regulatory deadlines. USCIS rules document that students must maintain enrollment consistent with their I-20 program to remain in valid F-1 status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The SEVIS I-901 Fee</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              SEVP regulations require payment of the SEVIS I-901 fee before a student may apply for an F-1 visa. As of 2026, the SEVIS fee for F-1 students is $350. This fee is paid to SEVP separately from any visa application fees collected by the Department of State.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SEVP rules document that the SEVIS I-901 fee is generally not refundable and is not transferable between schools. Students changing from one SEVP school to another at the same education level may not need to pay the SEVIS fee again, but a new SEVIS record is created by the new school&apos;s DSO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">F-1 Visa Application at a U.S. Embassy or Consulate</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The Department of State (DOS) processes F-1 visa applications at U.S. embassies and consulates worldwide. DOS regulations require completion of Form DS-160, payment of the nonimmigrant visa application fee (MRV fee), and attendance at a visa interview. Required documents at the interview typically include the I-20, SEVIS fee receipt, financial documentation, and evidence of ties to the home country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The consular officer makes the final determination on visa issuance. A valid F-1 visa stamp permits entry into the United States but does not itself confer F-1 status — F-1 status begins upon admission by a CBP officer at a port of entry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Full Course of Study Requirement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations at 8 CFR 214.2(f)(6) document that F-1 students are required to pursue a full course of study unless a reduced course load has been authorized by the DSO for qualifying reasons. Unauthorized failure to maintain a full course of study constitutes a violation of F-1 status under the documented rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS defines a full course of study for undergraduate students as at least 12 credit hours per semester, and for graduate students as whatever the school&apos;s regulations define as full-time for that program. Online coursework limitations also apply under current USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Duration of Status</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that F-1 students are admitted for &quot;duration of status&quot; (D/S) rather than a fixed date. Duration of status means the student is authorized to remain in the United States for as long as they maintain valid F-1 status — enrolled at an SEVP school, pursuing a full course of study, and complying with all applicable regulations. Status ends when the program ends or when a violation occurs, not when the visa stamp expires.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Stay on top of your F-1 status dates</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your I-20 program end date, OPT windows, and key F-1 deadlines automatically.
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
