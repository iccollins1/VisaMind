import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'USCIS Case Status: How to Read and Understand Your Case Updates | StatusAnchor',
  description: 'USCIS publishes case status definitions for every stage of petition processing. Learn what each documented status message means and how the USCIS system works.',
  alternates: { canonical: 'https://www.statusanchor.app/uscis-case-status-guide' },
}

export default function UścisCaseStatusGuide() {
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
          USCIS
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          USCIS Case Status: How to Read and Understand Your Case Updates
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS publishes case status information on its case status portal at egov.uscis.gov. Each status update corresponds to a documented stage in USCIS petition processing. Understanding what each status means is based on USCIS&apos;s own published definitions.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Receipt Notice</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS documentation establishes that a receipt notice (Form I-797C) is issued when USCIS accepts a petition or application for processing. The receipt notice contains the receipt number — a 13-character identifier beginning with a 3-letter service center code (e.g., EAC, WAC, SRC, LIN, IOE) followed by digits representing the fiscal year, processing day, and case sequence number.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS case status can be checked using the receipt number at egov.uscis.gov. The receipt notice date is also used to calculate whether a case is outside USCIS&apos;s published processing time estimate for that form type.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Common Case Status Messages and What USCIS Documents They Mean</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="text-[#1B2E4B]">Case Was Received:</strong> USCIS has accepted the application and it is in the queue for processing. No action has been taken on the merits yet.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="text-[#1B2E4B]">Case Is Being Actively Reviewed:</strong> USCIS documentation describes this status as indicating an officer has been assigned and is reviewing the case. It does not indicate a specific outcome.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="text-[#1B2E4B]">Fingerprint Fee Was Received / Biometrics Appointment Notice Was Sent:</strong> USCIS has scheduled or is scheduling a biometrics appointment. This status is common for I-485, I-131, and other benefit forms requiring biometrics collection.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              <strong className="text-[#1B2E4B]">Case Was Approved:</strong> USCIS documents this status as indicating the petition or application has been approved. For EAD applications, a card production notice typically follows the approval notice.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-[#1B2E4B]">Card Was Mailed to Me / Card Was Picked Up by the Post Office:</strong> USCIS documents these statuses as indicating the physical card (EAD, green card, or other identity document) has entered the U.S. Postal Service delivery system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Requests for Evidence (RFE)</h2>
            <p className="text-gray-600 leading-relaxed">
              A case status of &quot;Request for Evidence Was Sent&quot; indicates USCIS has issued a formal Request for Evidence. RFEs involve specific legal and procedural requirements with response deadlines. An RFE requires review by a licensed immigration attorney before any response is submitted to USCIS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Case Was Denied</h2>
            <p className="text-gray-600 leading-relaxed">
              A denial notice documents USCIS&apos;s determination that a petition or application does not meet the applicable statutory or regulatory requirements. Denial notices include the specific legal basis for the denial. Appeal rights, if any, are documented in the denial notice. The consequences of a denial depend on the specific form type, the applicant&apos;s underlying status, and applicable timelines — review by a licensed immigration attorney is warranted immediately upon receipt of any denial notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Processing Times and Outside Normal Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publishes processing time estimates by form type and service center at uscis.gov/processing-times. These estimates represent the time within which USCIS is completing a specified percentage of cases. A case whose receipt date is earlier than the published processing time estimate is considered &quot;outside normal processing time&quot; under USCIS documentation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS documentation states that cases outside normal processing time may be eligible for a service request through the USCIS online portal or by calling the USCIS Contact Center at 1-800-375-5283. USCIS documents that service requests do not expedite cases but trigger a review of the case&apos;s status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The USCIS Case Status Portal</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS provides case status information at egov.uscis.gov using the receipt number. The portal reflects the most recent status update in the USCIS system. USCIS documentation notes that status updates may not appear immediately after an action occurs due to processing and data entry timelines. Applicants can also create a USCIS online account to receive status updates by email and access additional case information.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your immigration deadlines in one place</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor monitors your OPT EAD dates, STEM OPT windows, and other key immigration milestones automatically.
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
