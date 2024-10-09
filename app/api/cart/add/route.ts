// app/api/cart/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Cart from '@/model/cart.model';
import Furniture from '@/model/furniture.model';

export async function POST(req: NextRequest) {
  const { userId, furnitureId, quantity } = await req.json();
  
  await dbConnect();

  try {
    // Check if the furniture exists
    const furniture = await Furniture.findById(furnitureId);
    if (!furniture) {
      return NextResponse.json({ message: 'Furniture not found' }, { status: 404 });
    }

    // Find or create the user's cart
    const cart = await Cart.findOne({ user: userId });
    if (cart) {
      
      // Update existing cart
      const existingItemIndex = cart.furnitureItems.findIndex(item => item.item.toString() === furnitureId);
      
      if (existingItemIndex > -1) {
        // If the item exists, update its quantity
        cart.furnitureItems[existingItemIndex].quantity += quantity;
      } else {
        // If the item doesn't exist, add it
        cart.furnitureItems.push({ item: furnitureId, quantity });
      }
      
      await cart.save();
      alert("item added to cart");
    } else {
      // Create a new cart if it doesn't exist
      await Cart.create({ user: userId, furnitureItems: [{ item: furnitureId, quantity }] });
    }

    return NextResponse.json({ message: 'Added to cart successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json({ message: 'Error adding to cart', error: error.message }, { status: 500 });
  }
}
