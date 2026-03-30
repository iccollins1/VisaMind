import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'What Is an I-20? A Plain English Guide for International Students | StatusAnchor',
  description: 'The I-20 is issued by SEVP-certified schools, not USCIS. Learn what the I-20 documents, how it differs from the F-1 visa stamp, and when it must be updated.',
}

export default function UscisI20Explained() {
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
          F-1 Basics
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-6">
          What Is an I-20? A Plain English Guide for International Students
        </h1>

        <p className="text-lg text-gray-500 leading-relaxed mb-10">
          The Form I-20, Certificate of Eligibility for Nonimmigrant Student Status, is an official document issued by SEVP-certified educational institutions — not by USCIS. It is the foundational document for F-1 status and controls many of the most important immigration deadlines.
        </p>

        <div className="space-y-8 text-[#1a1a2e]">

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">What the I-20 Documents</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The I-20 contains the following information as documented by SEVP regulations:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ul className="space-y-2">
                {[
                  'The institution\'s SEVP-assigned school code and program information',
                  'The student\'s full legal name, date of birth, and country of citizenship',
                  'The SEVIS ID number (beginning with "N")',
                  'The program start date and program end date',
                  'The education level (bachelor\'s, master\'s, doctoral, English language training, etc.)',
                  'The student\'s financial support information',
                  'English language proficiency status',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#0E7C7B] font-bold mt-0.5 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The I-20 Is Not Issued by USCIS</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              A common misconception is that the I-20 comes from USCIS. It does not. The I-20 is issued by the Designated School Official (DSO) at the student&apos;s SEVP-certified educational institution through the SEVIS system. SEVP (Student and Exchange Visitor Program) is a program within the Department of Homeland Security, administered separately from USCIS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The DSO — typically a staff member in the international students office — is the only person authorized to issue and update I-20s for that institution. Contact with the DSO is required for most official changes to F-1 status.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">I-20 vs. the F-1 Visa Stamp</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              The F-1 visa stamp, issued by a U.S. Embassy or Consulate, is a travel document. It authorizes the student to seek entry into the United States at a port of entry. The I-20 is a status document — it evidences the maintenance of F-1 status while in the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              USCIS regulations document that F-1 status is maintained through SEVIS and the I-20, not through the visa stamp. A student may have an expired F-1 visa stamp but remain in valid F-1 status — this is normal and not a status violation. The visa stamp is only required when re-entering the United States from abroad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Program End Date vs. I-20 Expiration Date</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              For OPT purposes, USCIS regulations distinguish between the &quot;program end date&quot; and the I-20 expiration date. For most I-20s, these are the same date. However, DSOs may extend the I-20 to accommodate additional semesters or program requirements.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The OPT application window (90 days before to 60 days after) is calculated from the program end date — the actual completion date of the degree program — not from the I-20 expiration date. Students with extended I-20s must confirm with their DSO which date governs their OPT window.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">When the I-20 Must Be Updated</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              USCIS SEVP regulations require the I-20 to be updated whenever there is a material change in the student&apos;s academic program, including:
            </p>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <ul className="space-y-2">
                {[
                  'Program extension beyond the listed end date',
                  'Change of educational level (e.g., bachelor\'s to master\'s)',
                  'Change of major or field of study',
                  'Transfer to a new SEVP-certified institution',
                  'OPT or STEM OPT applications (DSO endorsement required)',
                  'Cap-gap status (DSO endorsement required)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#0E7C7B] font-bold mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">Travel Signatures on the I-20</h2>
            <p className="text-gray-600 leading-relaxed">
              For re-entry into the United States, USCIS and CBP rules require that the I-20 carry a valid travel signature from the DSO. Travel signatures are typically valid for 12 months (or 6 months for students on OPT). An expired travel signature does not invalidate F-1 status — it only affects re-entry. Students planning international travel must confirm their I-20 travel signature is current before departure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1B2E4B] mb-3">The SEVIS I-901 Fee</h2>
            <p className="text-gray-600 leading-relaxed">
              Before an initial I-20 can be used for a visa application or U.S. entry, the student must pay the SEVIS I-901 fee — currently $350 for F-1 students. This fee is paid to SEVP, not to USCIS. Proof of payment is required for the F-1 visa interview at the U.S. Embassy or Consulate.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Turn your I-20 dates into a full deadline timeline</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor uses your I-20 program end date to calculate your OPT window, grace period, and every other critical F-1 deadline.
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
