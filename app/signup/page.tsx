'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function SignUp() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const isEduEmail = (email: string) => email.endsWith('.edu')

  const handleSignUp = async () => {
    setLoading(true)
    setError('')

    if (!email || !password) {
      setError('Please enter your email and password.')
      setLoading(false)
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          is_edu_email: isEduEmail(email),
          plan: isEduEmail(email) ? 'student' : 'free',
        }
      }
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    // Fire-and-forget signup notification — does not block the redirect
    fetch('/api/notifications/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, signupAt: new Date().toISOString() }),
    }).catch(() => {/* non-critical — ignore errors */})

    router.push('/dashboard')
  }

  return (
    <main className="min-h-screen bg-[#F9F7F4] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-[#1B2E4B] tracking-tight">
            Status<span className="text-[#0E7C7B]">Anchor</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">Create your free account</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5">
              <p className="text-xs text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
              />
              {isEduEmail(email) && (
                <p className="text-xs text-[#0E7C7B] font-medium mt-1.5">
                  🎓 .edu email — Student pricing applies ($9/mo)
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                onKeyDown={e => e.key === 'Enter' && handleSignUp()}
              />
            </div>

            <button
              onClick={handleSignUp}
              disabled={loading}
              className="w-full bg-[#0E7C7B] text-white font-bold py-3 rounded-xl hover:bg-[#1B2E4B] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create free account'}
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-5 p-3 bg-[#E6F4F4] rounded-lg">
            <p className="text-xs text-[#2D6A6A] leading-relaxed">
              StatusAnchor provides immigration information, not legal advice. By signing up you agree to our{' '}
              <Link href="/terms" className="underline">Terms of Service</Link> and{' '}
              <Link href="/privacy" className="underline">Privacy Policy</Link>.
            </p>
          </div>

          <p className="text-center text-xs text-gray-400 mt-5">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#0E7C7B] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </main>
  )
}