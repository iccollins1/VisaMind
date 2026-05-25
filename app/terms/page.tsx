import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | StatusAnchor',
  description: 'Terms of Service for StatusAnchor — read our terms covering user responsibilities, limitations of liability, and platform policies.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] py-16 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="text-2xl font-extrabold text-[#1B2E4B] tracking-tight">
            Status<span className="text-[#0E7C7B]">Anchor</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 space-y-8">
          <div>
            <h1 className="text-2xl font-extrabold text-[#1B2E4B] mb-1">Terms of Service</h1>
            <p className="text-xs text-gray-400">Last updated: May 2026</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">1. Information Only — Not Legal Advice</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              StatusAnchor provides general immigration information derived from publicly available USCIS guidance and documentation. Nothing on this platform constitutes legal advice. You should consult a licensed immigration attorney for advice specific to your situation. Reliance on any information provided by StatusAnchor is solely at your own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">2. No Attorney-Client Relationship</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Use of StatusAnchor does not create an attorney-client relationship between you and StatusAnchor or any of its employees, contractors, or affiliates. StatusAnchor is not a law firm and is not authorized to practice law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">3. User Responsibilities</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              By using StatusAnchor, you agree to:
            </p>
            <ul className="text-sm text-gray-600 leading-relaxed list-disc list-inside space-y-1 pl-2">
              <li>Provide accurate and truthful information when creating your account and using the platform.</li>
              <li>Use the platform only for lawful purposes and in accordance with these Terms.</li>
              <li>Not share your account credentials with others or allow unauthorized access to your account.</li>
              <li>Not attempt to reverse-engineer, scrape, or otherwise misuse the platform or its data.</li>
              <li>Independently verify any dates, deadlines, or procedural information before taking action on immigration matters.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">4. Limitation of Liability</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              To the maximum extent permitted by applicable law, StatusAnchor and its affiliates, employees, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including lost profits, data loss, or harm resulting from reliance on information provided by the platform. StatusAnchor&apos;s total liability to you for any claim arising from use of the platform shall not exceed the amount you paid to StatusAnchor in the twelve months preceding the claim, or $50, whichever is greater.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">5. Termination</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              StatusAnchor reserves the right to suspend or terminate your access to the platform at any time, for any reason, with or without notice. This includes, but is not limited to, violations of these Terms, suspected fraudulent activity, or circumstances that StatusAnchor determines may harm the platform or other users. Upon termination, your right to use the platform ceases immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">6. Changes to These Terms</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We may update these Terms from time to time. Continued use of the platform after changes are posted constitutes your acceptance of the revised Terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-sm font-bold text-[#1B2E4B] uppercase tracking-wide">7. Contact</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              For questions about these Terms, contact us at{' '}
              <a href="mailto:support@statusanchor.app" className="text-[#0E7C7B] hover:underline">
                support@statusanchor.app
              </a>.
            </p>
          </section>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          <Link href="/" className="text-[#0E7C7B] hover:underline">Back to StatusAnchor</Link>
        </p>
      </div>
    </main>
  )
}
