// app/api/cart/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Cart from '@/model/cart.model';
import Furniture from '@/model/furniture.model';

export async function POST(req: NextRequest) {
  const { userId, furnitureId, quantity } = await req.json();
  
  await dbConnect();

  try {
    const furniture = await Furniture.findById(furnitureId);
    if (!furniture) {
      return NextResponse.json({ message: 'Furniture not found' }, { status: 404 });
    }

    const cart = await Cart.findOne({ user: userId });
    if (cart) {
      // If cart exists, add item to cart
      cart.furnitureItems.push({ item: furnitureId, quantity });
      await cart.save();
    } else {
      // If no cart exists, create a new cart
      await Cart.create({ user: userId, furnitureItems: [{ item: furnitureId, quantity }] });
    }

    return NextResponse.json({ message: 'Added to cart successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error adding to cart', error }, { status: 500 });
  }
}
