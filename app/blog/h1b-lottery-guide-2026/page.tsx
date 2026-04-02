import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'H-1B Lottery 2026: Everything You Need to Know | StatusAnchor',
  description: 'The H-1B cap, electronic registration system, FY2026 dates, cap-gap protection for F-1/OPT holders, and published selection odds — based on publicly available USCIS guidance.',
  alternates: { canonical: 'https://www.statusanchor.app/blog/h1b-lottery-guide-2026' },
}

export default function H1bLotteryGuide2026() {
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
          <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">H-1B lottery 2026</span>
          <span className="text-xs text-gray-400">March 2026</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          H-1B Lottery 2026: Everything You Need to Know
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The H-1B visa allows U.S. employers to employ foreign nationals in specialty occupations requiring at least a bachelor&apos;s degree in a specific field. For most F-1 students and OPT workers seeking long-term U.S. employment, the H-1B cap lottery represents the primary path. This guide documents publicly available USCIS rules governing the H-1B lottery process for FY2026.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The H-1B Cap: What Congress Established</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Congress established the annual H-1B cap at 65,000 regular-cap slots, with an additional 20,000 slots reserved for beneficiaries holding a U.S. master&apos;s degree or higher (the advanced degree exemption). These numbers are set by statute — they cannot be administratively increased by USCIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-exempt employers — including qualifying universities, nonprofit research organizations affiliated with higher education, and certain government research institutions — may file H-1B petitions outside the cap process under 8 CFR 214.2(h)(8)(ii). F-1 students employed at such institutions can transition to H-1B without participating in the annual lottery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Electronic Registration System</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS implemented mandatory electronic pre-registration beginning in FY2020. Under this system, the employer — not the beneficiary — submits an electronic registration for each H-1B candidate during the annual registration window, typically in March. The current registration fee is $215 per registration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If total registrations exceed available cap slots — which has occurred every year since FY2008 — USCIS conducts a random selection lottery. USCIS first selects from all eligible registrations for the regular cap. It then runs a second lottery from remaining advanced degree registrations for the 20,000 master&apos;s-cap slots, effectively giving advanced degree holders two chances at selection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">FY2026 Timeline</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-4">
                {[
                  { period: 'March 2025', event: 'Electronic pre-registration window (employer action required; specific dates published by USCIS in the Federal Register)' },
                  { period: 'Late March 2025', event: 'USCIS random lottery selection; notifications sent to employer myUSCIS accounts' },
                  { period: 'April 1 – June 30, 2025', event: 'Full H-1B petition filing window for selected registrations (Form I-129)' },
                  { period: 'April – September 2025', event: 'USCIS adjudicates petitions; cap-gap covers F-1/OPT holders whose status would expire before October 1' },
                  { period: 'October 1, 2025', event: 'H-1B employment start date for approved FY2026 petitions' },
                ].map(item => (
                  <div key={item.period} className="flex gap-4">
                    <div className="min-w-[150px] text-xs font-bold text-[#0E7C7B] uppercase tracking-wide mt-0.5">{item.period}</div>
                    <div className="text-sm text-gray-600">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The H-1B Petition After Selection</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Selected registrants receive notification through the employer&apos;s myUSCIS account. The employer then has until June 30 to file a complete Form I-129 (Petition for a Nonimmigrant Worker). The petition must document the specialty occupation qualification, employer-employee relationship, and beneficiary&apos;s qualifying credentials.
            </p>
            <p className="text-gray-600 leading-relaxed">
              H-1B specialty occupation regulations at 8 CFR 214.2(h)(4)(ii) require documentation that the position requires at least a bachelor&apos;s degree in a specific field and that the beneficiary holds such a degree. USCIS may issue a Request for Evidence (RFE) asking for additional documentation. Anyone who receives an RFE on an H-1B petition requires immediate consultation with a licensed immigration attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap Protection for F-1/OPT Holders</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Cap-gap protection under 8 CFR 214.2(f)(5)(vi) is the regulatory bridge between F-1/OPT status and H-1B status for students whose OPT would expire before October 1. USCIS rules document that F-1 students on OPT whose H-1B petition is timely filed and cap-selected, requesting an October 1 start date, may remain in authorized status and authorized employment from the OPT expiration through September 30 of the petition year.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-gap is automatic — no separate USCIS application is required. The DSO endorses the I-20 to reflect cap-gap status. USCIS rules document that departure from the United States during the cap-gap period terminates the cap-gap benefit. Re-entry after departure during the cap-gap period requires a valid H-1B visa stamp, which must be obtained abroad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Lottery Odds: Published USCIS Data</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS publishes H-1B cap registration data annually. Recent published figures illustrate the competitive nature of the lottery:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="space-y-3">
                {[
                  { fy: 'FY2025', regs: '470,342 eligible registrations', rate: '~18% selection rate' },
                  { fy: 'FY2024', regs: '758,994 eligible registrations', rate: '~11% selection rate' },
                  { fy: 'FY2023', regs: '483,927 eligible registrations', rate: '~17% selection rate' },
                  { fy: 'FY2022', regs: '308,613 eligible registrations', rate: '~28% selection rate' },
                ].map(row => (
                  <div key={row.fy} className="grid grid-cols-3 gap-4 text-sm">
                    <span className="font-bold text-[#1B2E4B]">{row.fy}</span>
                    <span className="text-gray-600">{row.regs}</span>
                    <span className="text-[#0E7C7B] font-semibold">{row.rate}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">Source: USCIS published H-1B cap season data. Odds vary year to year based on total registrations received.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Rules Document for Non-Selected Registrants</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              If a registration is not selected, the registrant may not file an H-1B cap-subject petition for that fiscal year. USCIS rules permit participation in subsequent fiscal years&apos; lotteries. Some employers are cap-exempt and not subject to the lottery at all.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS has documented and taken action against H-1B fraud schemes, including multiple registrations for a single beneficiary. USCIS regulations prohibit multiple registrations for the same beneficiary by the same employer or affiliated companies. Submitting multiple registrations to improve lottery odds is grounds for disqualification and potential debarment under current rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Change of Status vs. Consular Processing</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document two pathways for the H-1B transition: change of status (processed domestically by USCIS, no departure required) and consular processing (beneficiary departs and obtains H-1B visa stamp at a U.S. Embassy or Consulate abroad). Each pathway has distinct timing rules, travel implications, and risks that depend on the individual&apos;s specific circumstances. A licensed immigration attorney documents the appropriate pathway for each situation.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your OPT, cap-gap, and H-1B transition dates</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor maps your full immigration timeline — from OPT expiration through cap-gap to H-1B start date.
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
