import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICE_IDS = {
  core: 'price_1TCf0FRylgop7izKwRHggWSk',
  core_student: 'price_1TCf0mRylgop7izKNCX9oeCC',
  pro: 'price_1TCf1xRylgop7izKVzPE53Ij',
} as const

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { plan, email, userId } = body

    if (plan !== 'core' && plan !== 'pro') {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }
    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('[stripe/checkout] STRIPE_SECRET_KEY is not set')
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 })
    }

    // Auto-detect .edu for student pricing on Core
    const isStudent = plan === 'core' && String(email).toLowerCase().endsWith('.edu')
    const priceId =
      plan === 'pro' ? PRICE_IDS.pro :
      isStudent      ? PRICE_IDS.core_student :
                       PRICE_IDS.core

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const origin = req.nextUrl.origin
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email,
      success_url: `${origin}/dashboard?upgraded=1`,
      cancel_url: `${origin}/upgrade`,
      metadata: { plan, ...(userId ? { user_id: userId } : {}) },
    })

    console.log('[stripe/checkout] session created:', checkoutSession.id, 'plan:', plan, 'isStudent:', isStudent)
    return NextResponse.json({ url: checkoutSession.url })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[stripe/checkout] error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
