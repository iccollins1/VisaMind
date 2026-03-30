import Link from 'next/link'

export default function SeoNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 h-16 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-[#1B2E4B] tracking-tight">
        Status<span className="text-[#0E7C7B]">Anchor</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#how" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">How it works</Link>
        <Link href="/#pricing" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">Pricing</Link>
        <Link href="/blog" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">Blog</Link>
        <Link href="/signin" className="text-sm font-medium text-gray-500 hover:text-[#1B2E4B]">Sign in</Link>
        <Link href="/signup" className="bg-[#0E7C7B] text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-[#1B2E4B] transition-colors">
          Get started free
        </Link>
      </div>
    </nav>
  )
}
