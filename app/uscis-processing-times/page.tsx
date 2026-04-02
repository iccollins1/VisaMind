import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'Current USCIS Processing Times by Form and Service Center | StatusAnchor',
  description: 'USCIS publishes official processing time data by form type and service center at uscis.gov. Learn how processing times are calculated and how to check your case status.',
  alternates: { canonical: 'https://www.statusanchor.app/uscis-processing-times' },
}

export default function UscisProcessingTimes() {
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
          USCIS Processing
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          Current USCIS Processing Times by Form and Service Center
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          USCIS publishes official processing time data for immigration forms and benefit types on its website at uscis.gov. Processing times reflect the time USCIS takes to complete adjudication and vary by form type, service center, and application category.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">How USCIS Calculates Processing Times</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS defines processing time as the time from receipt of a properly filed application to the completion of adjudication. USCIS publishes this data as a range — for example, &quot;3 to 5 months&quot; — reflecting the period within which USCIS completed 93% of adjudicated cases of that type during a recent historical period.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS processing times are updated monthly and reflect recent case completion data, not guarantees of future processing. Published times are historical averages and may not predict how long a specific pending application will take.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-765 (Employment Authorization Document)</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Form I-765 is used to apply for an Employment Authorization Document (EAD). For F-1 OPT applicants, the I-765 must be filed within the OPT application window. USCIS processing times for Form I-765 under the OPT category are published by service center on the USCIS processing times page.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Premium processing is not available for Form I-765 OPT applications under current USCIS rules. Because of this, USCIS regulations allow filing up to 90 days before the OPT program end date to accommodate processing time before the requested EAD start date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-129 (H-1B and Other Worker Petitions)</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Form I-129 is used by employers to petition for H-1B and other nonimmigrant worker classifications. Processing times vary by service center and whether premium processing is requested.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Premium processing (Form I-907) guarantees a 15-business-day adjudication under USCIS regulations, for an additional fee. Premium processing is commonly used for H-1B petitions where timing is critical, such as during the cap-gap period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-485 (Adjustment of Status)</h2>
            <p className="text-gray-600 leading-relaxed">
              Adjustment of status applications (Form I-485) are among the most variable in processing time, often ranging from 12 to 36 months or more depending on the applicant&apos;s priority date, country of birth, and service center. USCIS publishes a separate Visa Bulletin with monthly priority date information governing when I-485 cases may be filed or adjudicated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">How to Use the USCIS Processing Times Tool</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The USCIS processing times tool is available at uscis.gov. It allows applicants to select a form type and service center to view published processing time ranges. The tool also includes a check-your-case function: if an application has been pending longer than the published processing time, the applicant may submit an inquiry to USCIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS routes applications to specific service centers based on form type and the applicant&apos;s state of residence. Lockbox facilities, which receive initial filings, are separate from adjudicating service centers. Published processing times refer to adjudicating service centers, not lockbox receipt times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">How to Check Case Status</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS provides a Case Status Online tool at uscis.gov where applicants can check the status of a pending application using the receipt number on the I-797 notice. The receipt number begins with a three-letter service center code followed by numeric digits.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS also provides an e-Request system for applicants whose cases are outside normal processing times. For cases involving significant processing delays or concerns about status, consultation with a licensed immigration attorney is documented as a standard step in USCIS practice guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Why Processing Times Matter for OPT</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS processing times are especially significant for F-1 OPT applicants because the EAD must arrive before the requested start date for work to begin on time. USCIS regulations establish the 90-day pre-program-end filing window specifically to provide sufficient processing time before the OPT start date. The STEM OPT 180-day automatic extension rule exists for the same reason — to bridge the gap if USCIS has not yet adjudicated the STEM OPT application before the initial EAD expires.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track where your application stands</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor maps your full immigration timeline, including USCIS processing milestones, based on your visa type and program dates.
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
