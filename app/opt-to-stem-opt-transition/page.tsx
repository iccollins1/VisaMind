import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'OPT to STEM OPT: How the Transition Works | StatusAnchor',
  description: 'USCIS regulations at 8 CFR 214.2(f)(10)(ii)(C) govern the OPT to STEM OPT transition. Learn the filing window, DSO requirements, 180-day rule, and Form I-983 obligations.',
  alternates: { canonical: 'https://www.statusanchor.app/opt-to-stem-opt-transition' },
}

export default function OptToStemOptTransition() {
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
          STEM OPT Transition
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          OPT to STEM OPT: How the Transition Works
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The transition from standard post-completion OPT to the 24-month STEM OPT extension is governed by 8 CFR 214.2(f)(10)(ii)(C). It requires coordination between the student, the DSO, and the employer before the current OPT EAD expires.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Eligibility Requirements as Documented by USCIS</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations document three primary eligibility conditions for the STEM OPT transition:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-3">
              {[
                'The student must hold a STEM-designated degree from an accredited U.S. institution, as listed on the DHS STEM Designated Degree Program List',
                'The employer must be enrolled in E-Verify at the time of the STEM OPT application and throughout the training period',
                'The student must be currently on valid post-completion OPT — the application must be filed before the current OPT EAD expires',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#E6F4F4] text-[#0E7C7B] rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The Application Window</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS requires that Form I-765 for the STEM OPT extension be filed no more than 90 days before the current OPT EAD expiration date. The application must be filed while the OPT EAD is still valid. Applications filed after EAD expiration do not qualify.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations also document a prior-STEM-degree option: a student whose current OPT is based on a non-STEM degree may use a prior qualifying STEM degree from a U.S. institution under specific conditions documented in USCIS rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">DSO Role in the Transition</h2>
            <p className="text-gray-600 leading-relaxed">
              Before the STEM OPT application can be filed, the student&apos;s DSO must update the SEVIS record and issue a new I-20 reflecting the STEM OPT recommendation. This SEVIS-generated I-20 is required as part of the Form I-765 filing package. USCIS rules state that the application cannot be approved without this DSO certification. Students must allow adequate lead time for the DSO to process the SEVIS update before the 90-day filing window closes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The 180-Day Automatic Extension</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Under 8 CFR 274a.12(b)(6)(iv), a STEM OPT application filed on time — before the current OPT EAD expires — triggers an automatic 180-day extension of work authorization beginning on the EAD expiration date. During this period, the expired EAD combined with the USCIS receipt notice and the updated I-20 serves as evidence of continued work authorization.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The 180-day automatic extension applies only to employment with the same E-Verify employer named in the STEM OPT application. If USCIS denies or withdraws the application, work authorization under the automatic extension ends.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Form I-983: Training Plan</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS regulations require that both the student and the employer complete Form I-983 (Training Plan for STEM OPT Students) before STEM OPT employment begins. The I-983 documents the student&apos;s learning objectives, skills to be developed, compensation, hours, and oversight arrangements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Form I-983 is not filed with USCIS; it is maintained by the student, employer, and DSO. USCIS may request it during a site visit or as part of adjudication. It must be updated whenever material changes occur in the training arrangement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Ongoing Compliance After Approval</h2>
            <p className="text-gray-600 leading-relaxed">
              USCIS STEM OPT regulations establish ongoing obligations after approval: students must confirm employment status with their DSO every six months, employers must report terminations or material changes within 5 business days, and students may not accumulate more than 150 days of unemployment during the STEM OPT period. Failure to meet these documented requirements can result in SEVIS termination.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Know exactly when your STEM OPT window opens</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor calculates your 90-day STEM OPT application window from your OPT EAD expiration date automatically.
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
