import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'I-20 Extension Process: How the USCIS Framework Works | StatusAnchor',
  description: 'USCIS and SEVP rules document when and how F-1 students can extend their I-20 program end date. Learn the documented DSO process, timing rules, and status implications.',
  alternates: { canonical: 'https://www.statusanchor.app/i-20-extension-process' },
}

export default function I20ExtensionProcess() {
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
          F-1 I-20
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          I-20 Extension Process: How the USCIS Framework Works
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The Form I-20 program end date governs the most consequential deadlines in an F-1 student&apos;s immigration timeline. USCIS and SEVP regulations at 8 CFR 214.2(f) document the conditions under which the program end date may be extended and what the DSO is authorized to do.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the I-20 Program End Date Controls</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations establish that the I-20 program end date is the date by which the student is expected to complete their degree program. This date controls the start of the 60-day grace period following program completion, the OPT application filing window, and the calculation of cap-gap eligibility.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The I-20 expiration date and the I-20 program end date are the same field under current USCIS SEVIS formatting. When a DSO issues an extension, the program end date is updated in SEVIS and a new I-20 is generated reflecting the new date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Qualifying Reasons for Extension Under USCIS Rules</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that a DSO may authorize an I-20 program extension when a student cannot complete their program of study by the current end date due to compelling academic reasons. Qualifying reasons documented by USCIS include change of major or research topic, unexpected research delays, and other qualifying academic circumstances. The DSO must document the reason in SEVIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS rules further require that the student be making normal progress toward completing their program. A DSO is not authorized to extend the I-20 program end date indefinitely or without adequate academic justification. The USCIS SEVP policy manual documents the standards DSOs are required to apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Timing: Before the Program End Date</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS guidance states that I-20 extensions are processed by the DSO through SEVIS and must be completed before the current program end date expires. A student whose program end date passes without an extension in SEVIS begins accruing time against their 60-day grace period immediately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Because the DSO processes extensions internally through SEVIS — not through USCIS — there is no government filing fee and no USCIS processing time to account for. The new I-20 is typically available quickly after the DSO enters the extension in SEVIS, though each school&apos;s internal processing time varies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Impact on OPT Eligibility</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document that an I-20 extension resets the OPT filing window to align with the new program end date. A student who has not yet applied for OPT gains a new 150-day filing window calculated from the updated program end date — the window opens 90 days before the new end date and closes 60 days after it.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A student who has already applied for OPT with a requested start date tied to the original program end date may need to coordinate with their DSO and potentially USCIS if the extension changes the relationship between the program end date and the pending OPT application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Extensions Beyond Five Years</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS SEVP rules document that certain program extensions beyond the fifth year of an initial program may require additional DSO documentation or school-level approvals. Graduate programs with extended research timelines commonly require multiple I-20 extensions before completion.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each extension must be supported by documentation showing the student continues to make progress toward program completion and continues to maintain full-time enrollment status as defined by the school.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Travel After an I-20 Extension</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS and DOS guidance document that a student traveling internationally after receiving an I-20 extension needs a new DSO travel signature on the updated I-20 if the previous signature is more than one year old. The visa stamp in the passport does not need to be updated for the I-20 program extension itself, but the visa stamp must still be valid for re-entry. Visa stamp validity is separate from I-20 program end date validity under the documented rules.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Track your I-20 end date and OPT windows</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor recalculates your OPT filing window automatically when your program end date changes.
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
