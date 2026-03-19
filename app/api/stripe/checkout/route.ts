import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICE_IDS = {
  core: 'price_1TCf0FRylgop7izKwRHggWSk',
  core_student: 'price_1TCf0mRylgop7izKNCX9oeCC',
  pro: 'price_1TCf1xRylgop7izKVzPE53Ij',
} as const

export async function POST(req: NextRequest) {
  const { plan, email, userId } = await req.json()

  if (plan !== 'core' && plan !== 'pro') {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }
  if (!email || !userId) {
    return NextResponse.json({ error: 'Missing email or userId' }, { status: 400 })
  }

  // Auto-detect .edu for student pricing on Core
  const isStudent = plan === 'core' && (email as string).toLowerCase().endsWith('.edu')
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
