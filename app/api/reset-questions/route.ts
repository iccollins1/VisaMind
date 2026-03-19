import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Called by a cron job (e.g. Vercel Cron, GitHub Actions, cron-job.org).
// Requires: Authorization: Bearer <CRON_SECRET>
export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') ?? ''
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceRoleKey) {
    console.error('[reset-questions] missing Supabase env vars')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  // Initialize inside the handler so missing env vars fail gracefully at runtime
  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // 30 days ago — profiles whose reset_date is older than this need resetting
  const cutoff = new Date(today)
  cutoff.setDate(today.getDate() - 30)
  const cutoffStr = cutoff.toISOString().split('T')[0]
  const todayStr = today.toISOString().split('T')[0]

  // Fetch all free users past their reset date
  const { data: profiles, error } = await supabaseAdmin
    .from('visa_profiles')
    .select('user_id, ai_questions_reset_date')
    .eq('plan_tier', 'free')
    .lt('ai_questions_reset_date', cutoffStr)

  if (error) {
    console.error('[reset-questions] query error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  if (!profiles || profiles.length === 0) {
    return NextResponse.json({ reset: 0, message: 'No users due for reset.' })
  }

  let resetCount = 0
  let emailCount = 0
  const errors: string[] = []

  for (const profile of profiles) {
    // Reset the counter
    const { error: updateErr } = await supabaseAdmin
      .from('visa_profiles')
      .update({ ai_questions_used: 0, ai_questions_reset_date: todayStr })
      .eq('user_id', profile.user_id)

    if (updateErr) {
      errors.push(`update failed for ${profile.user_id}: ${updateErr.message}`)
      continue
    }
    resetCount++

    // Get user email via admin API
    const { data: userData, error: userErr } = await supabaseAdmin.auth.admin.getUserById(
      profile.user_id,
    )
    if (userErr || !userData.user?.email) {
      errors.push(`could not get email for ${profile.user_id}`)
      continue
    }

    const email = userData.user.email

    // Send reset email via Resend
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'StatusAnchor <noreply@statusanchor.app>',
          to: email,
          subject: 'Your 5 free questions just reset',
          text: 'Your monthly questions have reset. Here is what is coming up on your visa timeline this month — log in to check your deadlines.',
        }),
      })
      if (res.ok) {
        emailCount++
      } else {
        const body = await res.text()
        errors.push(`email failed for ${email}: ${body}`)
      }
    }
  }

  console.log(`[reset-questions] reset=${resetCount} emails=${emailCount} errors=${errors.length}`)

  return NextResponse.json({
    reset: resetCount,
    emails_sent: emailCount,
    errors: errors.length > 0 ? errors : undefined,
  })
}
