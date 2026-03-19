import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const PRICE_IDS = {
  core: 'price_1TCf0FRylgop7izKwRHggWSk',
  core_student: 'price_1TCf0mRylgop7izKNCX9oeCC',
  pro: 'price_1TCf1xRylgop7izKVzPE53Ij',
} as const

export async function GET(req: NextRequest) {
  const plan = req.nextUrl.searchParams.get('plan')
  if (plan !== 'core' && plan !== 'pro') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  // Get the authenticated user
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: () => {},
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) {
    const signinUrl = new URL('/signin', req.url)
    return NextResponse.redirect(signinUrl)
  }

  const email = session.user.email ?? ''
  const userId = session.user.id

  // Detect .edu for student pricing on Core plan
  const isStudent = plan === 'core' && email.toLowerCase().endsWith('.edu')
  let priceId: string
  if (plan === 'pro') {
    priceId = PRICE_IDS.pro
  } else if (isStudent) {
    priceId = PRICE_IDS.core_student
  } else {
    priceId = PRICE_IDS.core
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const origin = req.nextUrl.origin
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: email,
    success_url: `${origin}/dashboard?upgraded=1`,
    cancel_url: `${origin}/upgrade`,
    metadata: { user_id: userId, plan },
  })

  return NextResponse.redirect(checkoutSession.url!)
}
