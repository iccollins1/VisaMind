import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'Cap-Gap Rule Explained: How F-1 Students Stay Protected During H-1B Processing | StatusAnchor',
  description: 'USCIS regulations establish cap-gap protection for F-1 OPT holders with a timely filed H-1B petition. Learn what the documented rules cover for 2026.',
  alternates: { canonical: 'https://www.statusanchor.app/cap-gap-rule-explained' },
}

export default function CapGapRuleExplained() {
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
          F-1 / H-1B
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          Cap-Gap Rule Explained: How F-1 Students Stay Protected During H-1B Processing
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The cap-gap rule is a USCIS regulatory provision documented at 8 CFR 214.2(f)(5)(vi) that automatically extends F-1 status and, where applicable, OPT work authorization for students with a timely filed, cap-subject H-1B petition requesting an October 1 start date.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the Cap-Gap Rule Documents</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that when an F-1 student&apos;s authorized stay would otherwise expire between April 1 and September 30 of any H-1B cap year, a timely filed H-1B petition creates a &quot;cap-gap&quot; — the period between expiration of the student&apos;s current status and the H-1B start date of October 1. The cap-gap provision bridges this period automatically under the regulatory framework.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The extension applies to both F-1 status (the legal authorization to remain in the United States) and, separately, to OPT employment authorization in some circumstances. USCIS rules treat these two components distinctly in the regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What Qualifies as a &quot;Timely Filed&quot; Petition</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations define a timely filed H-1B petition as one submitted during the H-1B cap filing period — historically opening April 1 after the lottery selection process — while the student&apos;s F-1 status and OPT EAD remain valid. A petition filed after OPT or F-1 status has already expired does not qualify for cap-gap protection under the documented rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules also state that cap-gap protection applies only to cap-subject H-1B petitions requesting an October 1 start date. Cap-exempt petitions filed with cap-exempt employers do not trigger cap-gap provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Cap-Gap and OPT Work Authorization</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations distinguish between two cap-gap scenarios. First, if a student&apos;s F-1 status is still valid but the OPT EAD has expired, cap-gap extends status only — work authorization is not automatically extended in this scenario under current rules.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Second, if the OPT EAD is still valid when the H-1B petition is filed, cap-gap extends both F-1 status and OPT work authorization through September 30. USCIS documents that in this scenario, the student may continue working for the same employer under the cap-gap OPT extension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The I-20 and Cap-Gap Documentation</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS rules require that the student&apos;s Designated School Official (DSO) issue an updated I-20 reflecting the cap-gap extension. The updated I-20 serves as the primary documentation of the cap-gap extension period. USCIS does not issue a separate cap-gap EAD card — the student continues using the existing OPT EAD in combination with the updated I-20.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Employers verifying employment authorization through Form I-9 may accept this combination of documents during the cap-gap period as established by USCIS guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">When the H-1B Petition Is Denied or Withdrawn</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that if the H-1B petition is denied, revoked, or withdrawn, cap-gap protection terminates. In these situations, the student enters a grace period as defined by applicable F-1 regulations. A denial, withdrawal, or revocation of an H-1B petition during the cap-gap period involves status implications that require review by a licensed immigration attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Travel During Cap-Gap</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS guidance notes that travel outside the United States during the cap-gap period carries significant risk. Re-entry under cap-gap status is not guaranteed, and a student who departs during the cap-gap period may be unable to return before October 1 under the same status. Travel decisions during this period involve complex status considerations best reviewed with a licensed immigration attorney.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know exactly where your cap-gap timeline stands</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your OPT end date, cap-gap window, and H-1B start date in one place.
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
