// app/api/cart/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/dbConnect';
import Cart from '@/model/cart.model';
import Furniture from '@/model/furniture.model';

export async function POST(req: NextRequest) {
  // Parse the request body
  const { userId, furnitureId, quantity } = await req.json();
  
  // Ensure database connection
  await dbConnect();

  // Validate userId and furnitureId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 });
  }

  if (!mongoose.Types.ObjectId.isValid(furnitureId)) {
    return NextResponse.json({ message: 'Invalid furniture ID' }, { status: 400 });
  }

  try {
    // Check if the furniture exists in the database
    const furniture = await Furniture.findById(furnitureId);
    if (!furniture) {
      return NextResponse.json({ message: 'Furniture not found' }, { status: 404 });
    }

    // Find or create the user's cart
    let cart = await Cart.findOne({ user: userId });
    
    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({
        user: userId,
        furnitureItems: [{ item: furnitureId, quantity }],
      });
    } else {
      // If cart exists, find the item and update quantity or add new item
      const existingItemIndex = cart.furnitureItems.findIndex((item: { item: mongoose.Types.ObjectId }) => item.item.toString() === furnitureId);
      
      if (existingItemIndex > -1) {
        // Update the quantity of the existing item
        cart.furnitureItems[existingItemIndex].quantity += quantity;
      } else {
        // Add the new item to the cart
        cart.furnitureItems.push({ item: furnitureId, quantity });
      }
    }

    // Save the updated cart to the database
    await cart.save();

    return NextResponse.json({ message: 'Added to cart successfully' }, { status: 200 });
  } catch (error: unknown) {
    // Log the error for debugging
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
    console.error('Error adding to cart:', error);
    
    // Return a generic error message with 500 status
    return NextResponse.json({ message: 'Error adding to cart', error: errorMessage }, { status: 500 });
  }
}
