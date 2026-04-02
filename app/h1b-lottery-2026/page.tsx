import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'H-1B Lottery 2026: Dates, Odds, and What to Do Now | StatusAnchor',
  description: 'USCIS regulations govern the annual H-1B cap lottery, registration window, petition filing period, and cap-gap protection for F-1/OPT holders. Documented FY2026 information.',
  alternates: { canonical: 'https://www.statusanchor.app/h1b-lottery-2026' },
}

export default function H1bLottery2026() {
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
          H-1B Transition
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          H-1B Lottery 2026: Dates, Odds, and What to Do Now
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The H-1B visa program is subject to an annual numerical cap established by Congress. USCIS regulations at 8 CFR 214.2(h) govern the cap, electronic registration process, lottery selection, and cap-gap protections for F-1 and OPT holders.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Annual H-1B Cap</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Congress established the annual H-1B cap at 65,000 regular-cap slots, with an additional 20,000 slots reserved for beneficiaries holding a U.S. master&apos;s degree or higher (the advanced degree exemption). These numbers are set by statute and cannot be changed administratively by USCIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-exempt employers — including qualifying universities, nonprofit research organizations affiliated with higher education, and certain government research institutions — may file H-1B petitions outside the lottery under 8 CFR 214.2(h)(8)(ii).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Electronic Registration System</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS implemented mandatory electronic pre-registration beginning FY2020. Under this system, employers submit an electronic registration for each H-1B candidate during the annual registration window, typically in March. The registration fee is currently $215 per registration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If total registrations exceed available cap slots — as has been the case every year since FY2008 — USCIS conducts a random lottery. USCIS first selects from all eligible registrations for the regular cap, then runs a second lottery from remaining advanced degree registrations for the 20,000 master&apos;s-cap slots.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">FY2026 Key Dates</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                {[
                  { date: 'March 2025', label: 'Electronic registration window (specific dates published by USCIS in the Federal Register)' },
                  { date: 'Late March 2025', label: 'USCIS selection notifications sent to employer myUSCIS accounts' },
                  { date: 'April 1 – June 30, 2025', label: 'Petition filing window for selected registrations (Form I-129)' },
                  { date: 'October 1, 2025', label: 'H-1B employment start date for approved FY2026 petitions' },
                ].map(item => (
                  <div key={item.date} className="flex gap-4">
                    <div className="min-w-[140px] text-xs font-bold text-[#0E7C7B] uppercase tracking-wide mt-0.5">{item.date}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap Protection for F-1/OPT Holders</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              For F-1 students on OPT whose H-1B petition is timely filed for an October 1 start date, USCIS regulations at 8 CFR 214.2(f)(5)(vi) provide automatic cap-gap protection. Cap-gap rules document that an F-1 student whose OPT would otherwise expire before October 1 may remain in authorized status and authorized employment while the H-1B petition is pending.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-gap is automatic — no separate USCIS filing is required. The DSO endorses the I-20 to reflect cap-gap status. USCIS rules document that students relying on cap-gap must not depart the United States during this period, as departure terminates the cap-gap benefit and requires H-1B visa stamping abroad before re-entry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Lottery Odds: What USCIS Data Shows</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publishes H-1B cap registration data annually. Recent published figures:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { fy: 'FY2025', registrations: '470,342', rate: '~18%' },
                  { fy: 'FY2024', registrations: '758,994', rate: '~11%' },
                  { fy: 'FY2023', registrations: '483,927', rate: '~17%' },
                ].map(row => (
                  <div key={row.fy} className="grid grid-cols-3 text-sm">
                    <span className="font-bold text-[#1B2E4B]">{row.fy}</span>
                    <span className="text-gray-600">{row.registrations} registrations</span>
                    <span className="text-[#0E7C7B] font-semibold">{row.rate} selection rate</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">Source: USCIS published H-1B cap season data. Selection odds vary by year based on total registrations received.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Rules Document for Non-Selected Registrants</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              If a registration is not selected, the registrant may not file an H-1B cap-subject petition for that fiscal year. USCIS rules permit participation in subsequent fiscal years&apos; lotteries. Cap-exempt employers are not subject to this limitation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS has documented an increase in H-1B fraud schemes, including multiple registrations for a single beneficiary. USCIS regulations prohibit multiple registrations for the same beneficiary by the same or related employers. Submitting multiple registrations to improve lottery odds is grounds for disqualification and potential debarment under current rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Consular Processing vs. Change of Status</h2>
            <p className="text-gray-600 leading-relaxed">
              F-1 students have two pathways for the H-1B transition: change of status (COS), processed domestically by USCIS, or consular processing, where the applicant departs and obtains an H-1B visa stamp abroad. Each pathway has distinct timing rules, travel implications, and risks. A licensed immigration attorney can document the specific implications for each individual situation.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your OPT, cap-gap, and H-1B timeline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor maps your full F-1 to H-1B transition timeline, including cap-gap dates, from your program and OPT information.
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
