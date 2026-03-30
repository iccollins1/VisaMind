import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'Got a USCIS RFE? Here Is What It Means and What to Do Next | StatusAnchor',
  description: 'A USCIS Request for Evidence requires immediate consultation with a licensed immigration attorney. This page explains what an RFE is — not how to respond to one.',
}

export default function UscisRfeWhatToDo() {
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

        {/* Attorney alert — high prominence */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 flex gap-4 mb-10">
          <span className="text-2xl flex-shrink-0">⚠️</span>
          <div>
            <p className="font-bold text-amber-900 mb-1">Immediate legal consultation required</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              Receipt of a USCIS RFE requires immediate consultation with a licensed immigration attorney. RFEs contain specific legal questions with strict deadlines, and the response can determine the outcome of the application. This page provides general background information only — it does not and cannot substitute for qualified legal representation on a specific RFE.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">USCIS RFE</span>
          <span className="text-xs text-gray-400">March 2026</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          Got a USCIS RFE? Here Is What It Means and What to Do Next
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          A Request for Evidence (RFE) is an official USCIS notice issued when an adjudicating officer determines that additional information or documentation is needed to adjudicate a pending application or petition. Receiving an RFE does not mean a denial has been issued — but it does require timely, substantive action through qualified legal counsel.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Is an RFE?</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              An RFE (Request for Evidence) is a formal written notice issued by USCIS during the adjudication of an immigration benefit. USCIS regulations at 8 CFR 103.2(b)(8) document the circumstances under which USCIS issues RFEs. When the adjudicating officer determines that evidence submitted with an application is insufficient to establish eligibility, an RFE requests additional documentation or clarification.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Common application types that may receive RFEs include Form I-129 (H-1B petitions and other worker petitions), Form I-485 (adjustment of status), Form I-140 (immigrant petitions for alien workers), and others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The RFE Deadline</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Every RFE contains a response deadline — typically 87 days from the date the RFE is issued. USCIS regulations do not provide a general process for extending this deadline, and failure to respond by the deadline results in USCIS adjudicating the petition on the existing record — which in most RFE cases results in denial.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The deadline clock begins on the date the RFE is issued, not the date it is received by the applicant or attorney. Any delay between the issuance date and receipt reduces the available response time. This makes immediate action upon receipt essential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Why an Attorney Is Essential for an RFE</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              RFEs involve specific legal questions about eligibility, documentation standards, and USCIS adjudication policy. The questions in an RFE are typically framed in regulatory language that requires interpretation of immigration law and knowledge of USCIS adjudication trends at the specific service center handling the case.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              An insufficient, misdirected, or incomplete response to an RFE can result in denial even when a complete, well-documented response would have resulted in approval. USCIS regulations do not provide a mechanism to appeal a denial on the grounds that the applicant misunderstood the RFE&apos;s legal questions.
            </p>
            <p className="text-gray-600 leading-relaxed font-medium text-[#1B2E4B]">
              Anyone who has received an RFE requires immediate consultation with a licensed immigration attorney — this is not a situation to navigate without qualified legal representation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Happens If an RFE Goes Unanswered</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that if an applicant fails to respond to an RFE by the stated deadline, USCIS adjudicates the case on the evidence already on file. In most RFE cases where the existing record is insufficient to grant the benefit, USCIS issues a denial.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For F-1 students transitioning to H-1B, an I-129 denial during the cap-gap period has documented implications for authorized status. For adjustment of status applicants, a denial may affect the ability to remain in the United States. The specific consequences depend on the application type, the applicant&apos;s current status, and the legal basis of the denial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Common Types of RFEs: General Public Information</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publicly documents the most common reasons RFEs are issued. This list is general background information — it describes categories of RFEs, not how to respond to any specific RFE.
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ul className="space-y-3">
                {[
                  { type: 'H-1B petitions (Form I-129)', reasons: 'Specialty occupation qualification, employer-employee relationship documentation, or beneficiary\'s educational credentials' },
                  { type: 'Adjustment of status (Form I-485)', reasons: 'Admissibility questions, priority date documentation, or missing required evidence' },
                  { type: 'Immigrant petitions (Form I-140)', reasons: 'Employer\'s ability to pay the proffered wage, beneficiary\'s qualifying credentials, or job duties' },
                  { type: 'Employment authorization (Form I-765)', reasons: 'Eligibility category documentation or missing supporting evidence' },
                ].map(item => (
                  <li key={item.type} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold text-[#1B2E4B] mb-1">{item.type}</p>
                    <p className="text-sm text-gray-600">{item.reasons}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-amber-700 text-sm mt-4 font-medium">
              The content of any specific RFE is unique to that application and requires individualized legal review by a licensed immigration attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What an RFE Is Not</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              An RFE is not a denial. Receiving an RFE means the adjudicating officer has not denied the petition but needs more information before making a decision. Many RFE responses result in approval when properly handled by qualified counsel.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A related notice — the Notice of Intent to Deny (NOID) — is more serious than an RFE. A NOID indicates that USCIS is inclined to deny the application based on existing evidence and gives the applicant a final opportunity to respond. Both an RFE and a NOID require immediate consultation with a licensed immigration attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Procedural Notes Documented by USCIS</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules require that RFE responses include a copy of the original RFE. The response must be sent to the address specified in the RFE — which may differ from the original filing address, as USCIS may direct responses to a different facility. USCIS instructions recommend tracking the delivery of the response to document timely receipt.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond these procedural notes, this page does not document how to respond to an RFE. The substance of an RFE response is a matter for qualified legal counsel.
            </p>
          </section>

        </div>

        {/* Attorney CTA — prominent */}
        <div className="mt-10 bg-amber-50 border-2 border-amber-300 rounded-2xl p-7 text-center">
          <p className="text-xl font-bold text-amber-900 mb-3">Received an RFE? Contact a licensed immigration attorney immediately.</p>
          <p className="text-sm text-amber-800 max-w-lg mx-auto leading-relaxed">
            RFE deadlines are strict and the response determines the outcome of the application. StatusAnchor provides immigration information — not legal representation. An RFE requires a licensed attorney.
          </p>
        </div>

        {/* StatusAnchor CTA */}
        <div className="mt-8 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your immigration deadlines before problems arise</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor maps your full visa timeline so you know exactly where you stand — based on publicly available USCIS guidance.
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
