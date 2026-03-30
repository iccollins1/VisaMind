import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'What Happens When OPT Expires: Your Options Explained | StatusAnchor',
  description: 'USCIS regulations document the pathways available when OPT expires: STEM OPT extension, H-1B cap-gap, change of status, and departure. Documented rules, not advice.',
}

export default function WhatHappensAfterOptExpires() {
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
          OPT End Date
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          What Happens When OPT Expires: Your Options Explained
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          When OPT ends, USCIS regulations document several pathways that may be available depending on a student&apos;s visa status, degree, and employer situation. This page summarizes those pathways as documented in publicly available USCIS guidance.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 60-Day Grace Period</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations at 8 CFR 214.2(f)(5)(iv) establish a 60-day grace period that begins when OPT expires. During this grace period, the student remains in valid F-1 status. The 60-day post-OPT grace period has the same characteristics as the post-completion grace period: authorized status, no new employment authorization, and time to depart or take authorized action.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that no unlawful presence accrues during the grace period. The grace period ends on day 60, not when action is taken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Option 1: STEM OPT Extension</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              F-1 students who hold a qualifying STEM degree and are employed by an E-Verify employer may be eligible for a 24-month STEM OPT extension under 8 CFR 214.2(f)(10)(ii)(C). This is the most common pathway for eligible students.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Critical USCIS rule: the STEM OPT application must be filed before the current OPT EAD expires — not during the grace period. A timely-filed application triggers a 180-day automatic extension of work authorization under 8 CFR 274a.12(b)(6)(iv).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Option 2: H-1B Cap-Gap</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              F-1 students on OPT who have a timely-filed, cap-selected H-1B petition requesting an October 1 start date are entitled to cap-gap protection under 8 CFR 214.2(f)(5)(vi). Cap-gap rules extend authorized status and (when on OPT) work authorization from the OPT expiration date through September 30. Beginning October 1, if the H-1B is approved, the individual&apos;s status transitions to H-1B.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cap-gap is automatic — no separate filing is required. The DSO endorses the I-20 to reflect cap-gap status. Departure from the United States during the cap-gap period terminates the cap-gap benefit under USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Option 3: Change of Status</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations permit individuals in valid status to file for a change of status to another nonimmigrant visa category — such as H-4, J-1, or others — provided they remain in status and meet the eligibility requirements for the new category. Change of status applications are filed on Form I-539 (for most nonimmigrant categories) or Form I-129 (employer-filed, for employment-based categories). The change of status application must be filed before the current authorized stay expires.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Option 4: Departure</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules document that students who depart the United States within the 60-day grace period do not accrue unlawful presence for that grace period. After departure, future re-entry requires a valid visa for the status being sought.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What USCIS Documents About Unlawful Presence</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations and the USCIS Policy Manual document that periods of authorized status — including the 60-day grace period — do not accrue unlawful presence. Unlawful presence begins accruing when authorized status ends and no extension or change of status application is pending or approved.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Accumulated unlawful presence of 180 days or more triggers documented bars to re-entry under immigration statutes. Individuals with questions about whether unlawful presence has accrued in their specific situation require consultation with a licensed immigration attorney.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">If OPT Has Already Expired Without Action</h2>
            <p className="text-gray-600 leading-relaxed">
              If OPT has expired and no timely action was taken, the situation involves potential status gaps and unlawful presence considerations documented in USCIS regulations. USCIS does not provide general exceptions or waivers for lapsed status. This situation requires immediate consultation with a licensed immigration attorney to assess the specific facts and available options.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know your OPT end date and what comes next</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor tracks your OPT expiration, STEM OPT window, cap-gap dates, and grace period — all from your program and EAD dates.
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
