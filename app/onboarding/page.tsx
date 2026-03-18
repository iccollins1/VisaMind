'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const VISA_TYPES = ['F-1', 'F-2', 'OPT', 'STEM-OPT', 'J-1', 'H-1B', 'H-4', 'O-1', 'TN', 'Green Card']
const TOTAL_STEPS = 3

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [visaType, setVisaType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isEnrolled, setIsEnrolled] = useState(false)
  const [university, setUniversity] = useState('')
  const [country, setCountry] = useState('')

  const progressPercent = ((step - 1) / TOTAL_STEPS) * 100

  const validateStep = () => {
    if (step === 1 && !visaType) return 'Please select a visa type.'
    if (step === 2 && !startDate) return 'Please enter your program start date.'
    if (step === 2 && !endDate) return 'Please enter your program end date.'
    if (step === 3 && !country.trim()) return 'Please enter your country of citizenship.'
    return ''
  }

  const handleNext = () => {
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setStep(s => s + 1)
  }

  const handleBack = () => {
    setError('')
    setStep(s => s - 1)
  }

  const handleSubmit = async () => {
    const err = validateStep()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/signin')
      return
    }

    const { error: insertError } = await supabase.from('visa_profiles').insert({
      user_id: user.id,
      visa_type: visaType,
      program_start_date: startDate,
      program_end_date: endDate,
      university_name: university || null,
      country_of_citizenship: country,
    })

    if (insertError) {
      setError(insertError.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex flex-col">

      {/* Nav */}
      <nav className="bg-white border-b border-gray-200 px-6 h-16 flex items-center">
        <span className="text-xl font-bold text-[#1B2E4B] tracking-tight">
          Status<span className="text-[#0E7C7B]">Anchor</span>
        </span>
      </nav>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-1">
        <div
          className="bg-[#0E7C7B] h-1 transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            {[1, 2, 3].map(n => (
              <div key={n} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  n < step ? 'bg-[#0E7C7B] text-white' :
                  n === step ? 'bg-[#1B2E4B] text-white' :
                  'bg-gray-200 text-gray-400'
                }`}>
                  {n < step ? (
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  ) : n}
                </div>
                {n < 3 && <div className={`h-px w-8 ${n < step ? 'bg-[#0E7C7B]' : 'bg-gray-200'}`} />}
              </div>
            ))}
            <span className="ml-2 text-xs text-gray-400 font-medium">Step {step} of {TOTAL_STEPS}</span>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-1">Step 1</p>
                <h2 className="text-2xl font-extrabold text-[#1B2E4B] mb-1">Your visa type</h2>
                <p className="text-sm text-gray-400 mb-6">Select the visa you currently hold or are applying for.</p>
                <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                  Visa type
                </label>
                <select
                  value={visaType}
                  onChange={e => setVisaType(e.target.value)}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] bg-white focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                >
                  <option value="">Select a visa type…</option>
                  {VISA_TYPES.map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-1">Step 2</p>
                <h2 className="text-2xl font-extrabold text-[#1B2E4B] mb-1">Program dates</h2>
                <p className="text-sm text-gray-400 mb-6">These dates are used to calculate your critical deadlines.</p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                      Program start date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={e => setStartDate(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                      Program end date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={e => setEndDate(e.target.value)}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                  <strong className="text-gray-500">Students:</strong> find these dates on your I-20.{' '}
                  <strong className="text-gray-500">Workers:</strong> check your visa approval notice (I-797).{' '}
                  Not sure? Enter your best estimate — you can update these later.
                </p>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0E7C7B] mb-1">Step 3</p>
                <h2 className="text-2xl font-extrabold text-[#1B2E4B] mb-1">Your details</h2>
                <p className="text-sm text-gray-400 mb-6">Almost done — just a couple more details.</p>
                <div className="space-y-4">

                  {/* University toggle */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={isEnrolled}
                        onChange={e => {
                          setIsEnrolled(e.target.checked)
                          if (!e.target.checked) setUniversity('')
                        }}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                        isEnrolled ? 'bg-[#0E7C7B] border-[#0E7C7B]' : 'border-gray-300 group-hover:border-[#0E7C7B]'
                      }`}>
                        {isEnrolled && (
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-[#1B2E4B] leading-snug">
                      I am currently enrolled at a university or college
                    </span>
                  </label>

                  {/* University name — only shown when enrolled */}
                  {isEnrolled && (
                    <div>
                      <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                        University / college name
                        <span className="ml-2 text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={university}
                        onChange={e => setUniversity(e.target.value)}
                        placeholder="e.g. University of Michigan"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                      />
                    </div>
                  )}

                  {/* Country — always required */}
                  <div>
                    <label className="block text-xs font-bold text-[#1B2E4B] mb-1.5 uppercase tracking-wide">
                      Country of citizenship
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                      placeholder="e.g. India"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#0E7C7B] focus:ring-1 focus:ring-[#0E7C7B] transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-600">{error}</p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 mt-8">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 border-2 border-gray-200 text-[#1B2E4B] font-bold py-3 rounded-xl hover:border-[#0E7C7B] transition-colors text-sm"
                >
                  ← Back
                </button>
              )}
              {step < TOTAL_STEPS ? (
                <button
                  onClick={handleNext}
                  className="flex-1 bg-[#0E7C7B] text-white font-bold py-3 rounded-xl hover:bg-[#1B2E4B] transition-colors text-sm"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 bg-[#0E7C7B] text-white font-bold py-3 rounded-xl hover:bg-[#1B2E4B] transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Saving…' : 'Build my timeline →'}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
            StatusAnchor provides immigration information, not legal advice.
          </p>
        </div>
      </main>
    </div>
  )
}
