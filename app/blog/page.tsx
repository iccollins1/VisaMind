import type { Metadata } from 'next'
import Link from 'next/link'
import SeoNav from '@/app/components/SeoNav'
import SeoFooter from '@/app/components/SeoFooter'

export const metadata: Metadata = {
  title: 'Immigration Guides for F-1 Students | StatusAnchor Blog',
  description: 'Plain-English guides to OPT deadlines, F-1 grace periods, STEM OPT extensions, H-1B lottery, and more — all based on publicly available USCIS guidance.',
  alternates: { canonical: 'https://www.statusanchor.app/blog' },
}

const posts = [
  {
    slug: 'opt-deadline-guide-2026',
    title: 'OPT Application Deadline Guide for F-1 Students in 2026',
    description: 'The 90-day to 60-day filing window, EAD start date rules, required documents, and what USCIS regulations say about late applications.',
    keyword: 'OPT application deadline',
    date: 'March 2026',
  },
  {
    slug: 'f1-grace-period-complete-guide',
    title: 'F-1 Grace Period: The Complete Guide to Your 60 Days',
    description: 'What is and is not permitted during the 60-day F-1 grace period, when it starts, and how it interacts with OPT filing and cap-gap rules.',
    keyword: 'F-1 grace period',
    date: 'March 2026',
  },
  {
    slug: 'stem-opt-extension-guide',
    title: 'STEM OPT Extension: Requirements, Timeline, and Deadlines',
    description: 'Eligibility, the 90-day filing window, the 180-day automatic extension, E-Verify employer requirements, and Form I-983 obligations.',
    keyword: 'STEM OPT extension',
    date: 'March 2026',
  },
  {
    slug: 'h1b-lottery-guide-2026',
    title: 'H-1B Lottery 2026: Everything You Need to Know',
    description: 'The cap, electronic registration system, FY2026 timeline, cap-gap protection for F-1/OPT holders, and published selection odds.',
    keyword: 'H-1B lottery 2026',
    date: 'March 2026',
  },
  {
    slug: 'uscis-rfe-what-to-do',
    title: 'Got a USCIS RFE? Here Is What It Means and What to Do Next',
    description: 'What an RFE is, the response deadline, and why immediate consultation with a licensed immigration attorney is essential.',
    keyword: 'USCIS RFE',
    date: 'March 2026',
  },
]

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-[#F9F7F4] text-[#1a1a2e]">
      <SeoNav />

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Disclaimer */}
        <div className="bg-[#E6F4F4] border border-[#B2DFDF] rounded-xl p-5 flex gap-3 mb-10">
          <span className="text-base mt-0.5 flex-shrink-0">ℹ️</span>
          <p className="text-sm text-[#2D6A6A] leading-relaxed">
            This page provides general immigration information based on publicly available USCIS guidance — not legal advice. Your situation may have factors that change these answers. When in doubt, consult a licensed immigration attorney.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#E6F4F4] text-[#0E7C7B] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
          Immigration Guides
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B2E4B] leading-tight tracking-tight mb-4">
          StatusAnchor Blog
        </h1>
        <p className="text-lg text-gray-500 mb-12 leading-relaxed">
          Plain-English explanations of F-1, OPT, STEM OPT, and H-1B rules — based on publicly available USCIS guidance, not legal advice.
        </p>

        <div className="space-y-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#0E7C7B] transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-[#0E7C7B] uppercase tracking-wide bg-[#E6F4F4] px-3 py-1 rounded-full">
                  {post.keyword}
                </span>
                <span className="text-xs text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1B2E4B] mb-2 group-hover:text-[#0E7C7B] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">{post.description}</p>
              <p className="text-sm font-semibold text-[#0E7C7B] mt-4">Read guide →</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-[#1B2E4B] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Put your deadlines on autopilot</h2>
          <p className="text-[#94A3B8] text-sm mb-6 max-w-sm mx-auto">
            StatusAnchor turns your visa type and program dates into a full deadline calendar — based on the same USCIS rules documented in these guides.
          </p>
          <Link href="/signup" className="inline-flex bg-[#0E7C7B] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-[#1B2E4B] transition-colors">
            Track your deadlines in StatusAnchor — free →
          </Link>
        </div>

      </div>

      <SeoFooter />
    </main>
  )
}
