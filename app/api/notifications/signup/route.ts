import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { email, signupAt, visaType } = await request.json()

  const visaLine = visaType
    ? `Visa type: ${visaType}`
    : 'Visa type: Onboarding not yet completed'

  const { error } = await resend.emails.send({
    from: 'notifications@statusanchor.app',
    to: 'ian@statusanchor.app',
    subject: 'New StatusAnchor Signup 🎉',
    text: [
      'New signup on StatusAnchor.',
      '',
      `Email: ${email}`,
      `Signed up: ${new Date(signupAt).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })} ET`,
      visaLine,
    ].join('\n'),
  })

  if (error) {
    console.error('[signup-notification] Resend error:', error)
    return NextResponse.json({ error }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
