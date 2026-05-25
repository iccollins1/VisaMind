import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'SEVP Portal Guide: What the System Documents for F-1 Students | StatusAnchor',
  description: 'The SEVP Portal gives F-1 students direct access to update their records when between DSOs. Learn what the system documents and how USCIS rules govern its use.',
  alternates: { canonical: 'https://www.statusanchor.app/sevp-portal-guide' },
}

export default function SevpPortalGuide() {
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
          F-1 SEVP
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          SEVP Portal Guide: What the System Documents for F-1 Students
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The SEVP Portal is a web-based system administered by the Student and Exchange Visitor Program (SEVP), a component of ICE within DHS. SEVP documentation establishes that the portal provides F-1 students on OPT and STEM OPT with a direct mechanism to update certain record information when they are between DSOs or otherwise without access to a DSO.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the SEVP Portal Is</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The SEVP Portal is distinct from SEVIS. SEVIS (Student and Exchange Visitor Information System) is the back-end database used by DSOs and government officials to manage student records. The SEVP Portal is a front-end interface that allows certain F-1 students to view and update a limited subset of their SEVIS record information directly, without DSO intervention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SEVP documentation notes that the portal became available to F-1 OPT students as a tool to facilitate required reporting — particularly employment updates — when a student is between school enrollments (such as during post-completion OPT after graduation).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Who Has Access to the SEVP Portal</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              SEVP documentation establishes that the portal is available to F-1 students who are currently on OPT or STEM OPT and have graduated from their SEVP-certified school. Students who are still enrolled and have access to a DSO are expected to make record updates through their DSO rather than the portal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Students receive an invitation to access the SEVP Portal via email after their OPT EAD is approved. The email contains a one-time link to create a portal account. SEVP documentation notes that this invitation is time-limited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Students Can Update in the Portal</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              SEVP documentation lists the record fields that OPT students can update directly through the portal: current U.S. residential address, employer name and address, employer start and end dates, and employer EIN. Students on STEM OPT can also use the portal to update their employer information required for STEM OPT compliance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The portal does not allow students to request an I-20 extension, change their program of study, authorize CPT, or perform other DSO-level actions. Those actions remain exclusively within the DSO&apos;s authority in SEVIS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Reporting Deadlines the Portal Supports</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS and SEVP regulations require OPT students to report employer changes within 10 days of the change. The SEVP Portal provides the mechanism for students without DSO access to meet this reporting requirement. SEVP documentation notes that failure to report within 10 days constitutes a reporting violation under the applicable regulations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              STEM OPT students must also use either the portal or their DSO to submit required self-evaluation reports at the 12-month mark of their STEM OPT period, as established by USCIS STEM OPT regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Relationship Between the Portal and SEVIS</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Updates made through the SEVP Portal are reflected in SEVIS in real time. SEVP documentation notes that the student&apos;s SEVIS record — not the portal account — is the authoritative government record. Information in the portal reflects what is in the student&apos;s SEVIS record at the time of viewing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              SEVIS data is shared across DHS components including USCIS and CBP. Accurate reporting through the portal directly affects the accuracy of the official SEVIS record that these agencies use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">When the Portal Is Not Sufficient</h2>
            <p className="text-gray-600 leading-relaxed">
              SEVP documentation establishes that certain actions require DSO involvement and cannot be completed through the student portal. These include requesting an I-20 extension, transferring to a new SEVP school, recommending OPT or STEM OPT in SEVIS, updating degree information, and correcting fundamental record errors. For these actions, the student must contact their school&apos;s DSO office directly.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Never miss an OPT reporting deadline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your employer update deadlines, unemployment day count, and STEM OPT reporting windows.
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
