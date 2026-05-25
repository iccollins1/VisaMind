'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleReset = async () => {
    setLoading(true)
    setError('')

    if (!email) {
      setError('Please enter your email address.')
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    if (error) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#F9F7F4] flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-[#1B2E4B] tracking-tight">
            Status<span className="text-[#0E7C7B]">Anchor</span>
          </Link>
          <p className="text-gray-500 text-sm mt-2">Reset your password</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">

          {submitted ? (
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#0E7C7B]/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-[#0E7C7B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-sm font-bold text-[#1B2E4B]">Check your email</h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                If an account exists for <span className="font-semibold text-[#1B2E4B]">{email}</span>, we&apos;ve sent a password reset link. Check your inbox and follow the instructions.
              </p>
              <p className="text-xs text-gray-400 pt-2">
                <Link href="/signin" className="text-[#0E7C7B] font-semibold hover:underline">
                  Back to sign in
                </Link>
              </p>
            </div>
          ) : (
            <>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-5">
                  <p className="text-xs text-red-600">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                    onKeyDown={e => e.key === 'Enter' && handleReset()}
                  />
                </div>

                <button
                  onClick={handleReset}
                  disabled={loading}
                  className="w-full bg-[#0E7C7B] text-white font-bold py-3 rounded-xl hover:bg-[#1B2E4B] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send reset link'}
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-5">
                Remember your password?{' '}
                <Link href="/signin" className="text-[#0E7C7B] font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
