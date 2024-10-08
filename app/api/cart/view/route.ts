// app/api/cart/view/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Cart from '@/model/cart.model';

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get('userId');

  await dbConnect();

  try {
    const cart = await Cart.findOne({ user: userId }).populate('furnitureItems.item');
    if (!cart) {
      return NextResponse.json({ message: 'Cart not found' }, { status: 404 });
    }

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching cart', error }, { status: 500 });
  }
}
