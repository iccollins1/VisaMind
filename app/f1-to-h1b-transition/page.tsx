import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'F-1 to H-1B: The Complete Transition Guide | StatusAnchor',
  description: 'USCIS regulations document the F-1 to H-1B transition pathway including the cap lottery, cap-gap rule, change of status vs. consular processing, and petition requirements.',
  alternates: { canonical: 'https://www.statusanchor.app/f1-to-h1b-transition' },
}

export default function F1ToH1bTransition() {
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
          F-1 to H-1B
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          F-1 to H-1B: The Complete Transition Guide
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The transition from F-1 student status to H-1B nonimmigrant worker status involves several distinct regulatory processes. USCIS regulations at 8 CFR 214.2(h) govern the H-1B cap, lottery, petition requirements, and cap-gap protections for F-1 students.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Two H-1B Cap Categories</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document two H-1B cap allocations: 65,000 regular-cap slots and 20,000 slots reserved for beneficiaries holding a U.S. master&apos;s degree or higher (the advanced degree exemption). Both are subject to the annual lottery when registrations exceed available slots.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-exempt employers — including qualifying universities, nonprofit research organizations affiliated with higher education, and certain government research institutions — may file H-1B petitions outside the cap under 8 CFR 214.2(h)(8)(ii). F-1 students employed at cap-exempt institutions can transition to H-1B without participating in the lottery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Electronic Registration Requirement</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS implemented mandatory electronic pre-registration beginning FY2020. The employer — not the beneficiary — submits an electronic registration during the annual registration window (typically March). If registrations exceed available cap slots, USCIS conducts a random lottery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Only selected registrations may proceed to full petition filing. Non-selected registrations cannot file an H-1B cap-subject petition for that fiscal year.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The H-1B Petition After Selection</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Following selection, the employer files Form I-129 (Petition for a Nonimmigrant Worker) during the April 1 – June 30 filing window. For F-1 students seeking a change of status, the I-129 requests that USCIS change the beneficiary&apos;s status from F-1 to H-1B effective October 1.
            </p>
            <p className="text-gray-600 leading-relaxed">
              H-1B specialty occupation regulations at 8 CFR 214.2(h)(4)(ii) require documentation that the position requires at least a bachelor&apos;s degree in a specific field and that the beneficiary holds such a degree. USCIS adjudicators evaluate both the position and the beneficiary&apos;s qualifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap Protection</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Cap-gap protection under 8 CFR 214.2(f)(5)(vi) is a critical element of the F-1 to H-1B transition for students on OPT. Cap-gap rules document that F-1 students on OPT whose H-1B petition is timely filed and cap-selected, requesting a change of status to October 1, are entitled to an extension of F-1 status and work authorization through September 30 of the petition year.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-gap is automatic — no separate USCIS filing is required. The DSO endorses the I-20 to reflect cap-gap status. USCIS rules document that departure from the United States during the cap-gap period terminates the cap-gap benefit, requiring H-1B visa stamping abroad before re-entry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Change of Status vs. Consular Processing</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              F-1 students transitioning to H-1B have two USCIS-documented pathways:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
              <div>
                <p className="font-bold text-[#1B2E4B] text-sm mb-1">Change of Status (COS)</p>
                <p className="text-sm text-gray-600">USCIS processes the status change domestically. The beneficiary does not need to depart the U.S. COS is lost if the beneficiary travels internationally before October 1 and the H-1B has not been stamped.</p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#1B2E4B] text-sm mb-1">Consular Processing</p>
                <p className="text-sm text-gray-600">The beneficiary departs the U.S. and applies for an H-1B visa stamp at a U.S. Embassy or Consulate abroad. This pathway is required for beneficiaries who cannot or do not want to maintain F-1 status through October 1.</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3">Each pathway has distinct timing rules, travel implications, and risks. A licensed immigration attorney documents the specific implications for each individual situation.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Premium Processing</h2>
            <p className="text-gray-600 leading-relaxed">
              Employers may request premium processing of Form I-129 for an additional fee under 8 CFR 103.7, which guarantees a 15-business-day adjudication decision. Premium processing for H-1B change of status petitions is commonly used when timing certainty is important.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Full F-1 to H-1B Timeline</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { step: 'March', desc: 'H-1B electronic registration window (employer action)' },
                  { step: 'Late March', desc: 'USCIS lottery selection notifications' },
                  { step: 'April 1 – June 30', desc: 'I-129 petition filing window for selected registrations' },
                  { step: 'April – September', desc: 'USCIS adjudication; cap-gap covers OPT students whose EAD would expire before Oct 1' },
                  { step: 'October 1', desc: 'H-1B employment begins (change of status effective date)' },
                ].map(item => (
                  <div key={item.step} className="flex gap-4">
                    <div className="min-w-[120px] text-xs font-bold text-[#0E7C7B] uppercase tracking-wide mt-0.5">{item.step}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track every step of your F-1 to H-1B timeline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor maps your OPT expiration, cap-gap window, and H-1B start date so nothing falls through the cracks.
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
