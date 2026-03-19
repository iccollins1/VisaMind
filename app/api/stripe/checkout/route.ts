import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

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

  // Read the JWT from the Authorization header sent by the client
  const authHeader = req.headers.get('authorization') ?? ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Verify the token and get the user
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const email = user.email ?? ''
  const userId = user.id

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

  return NextResponse.json({ url: checkoutSession.url })
}
