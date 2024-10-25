import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Update to the specific compatible API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-09-30.acacia', // Use the specific version format
});

export async function POST(req: Request) {
  const { amount } = await req.json(); // Use the new Request interface for handling incoming JSON

  try {
    // Create a Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd', // Change to your currency
          product_data: {
            name: 'Your Product Name',
            // Add additional product details here
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // Change to your success URL
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // Change to your cancel URL
    });

    return NextResponse.json({ sessionId: session.id }); // Send session ID back to the client
  } catch (error) {
    return NextResponse.json({ error: 'Error creating checkout session' }, { status: 500 });
  }
}
