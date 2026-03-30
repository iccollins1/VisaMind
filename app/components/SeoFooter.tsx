import Link from 'next/link'

export default function SeoFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-6 text-center">
      <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
        StatusAnchor provides general immigration information derived from publicly available USCIS guidance and documentation. StatusAnchor is not a law firm and does not provide legal advice. No attorney-client relationship is formed through use of this platform. All outputs are system-calculated information based on user-provided data.
      </p>
      <p className="text-xs text-gray-400 mt-3">
        © 2026 StatusAnchor · statusanchor.app ·{' '}
        <Link href="/privacy" className="text-[#0E7C7B] hover:underline">Privacy Policy</Link> ·{' '}
        <Link href="/terms" className="text-[#0E7C7B] hover:underline">Terms of Service</Link> ·{' '}
        <Link href="/blog" className="text-[#0E7C7B] hover:underline">Blog</Link>
      </p>
    </footer>
  )
}
