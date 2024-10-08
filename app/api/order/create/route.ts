// app/api/order/create/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/model/order.model';

export async function POST(req: NextRequest) {
  const { userId, items, totalPrice } = await req.json();

  await dbConnect();

  try {
    const newOrder = await Order.create({
      user: userId,
      items,
      totalPrice,
      status: 'Pending',
    });

    return NextResponse.json({ message: 'Order created successfully', order: newOrder }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Error creating order', error }, { status: 500 });
  }
}
