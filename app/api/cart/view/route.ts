import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Cart from '@/model/cart.model';
import Furniture from '@/model/furniture.model'; // Import your Furniture model

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId"); // Get userId from query params
  console.log("User ID from request:", userId); // Log the userId for debugging

  await dbConnect();

  try {
    // Find the cart for the given userId
    const cart = await Cart.findOne({ user: userId }).populate({
      path: 'furnitureItems.item',
      model: Furniture, // Specify the Furniture model here for population
      select: 'name price description image category available', // Specify fields to populate
    });

    if (!cart) {
      return NextResponse.json({ message: 'Cart not found' }, { status: 404 });
    }

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error fetching cart:", error); // Log the actual error

    // Check if error is an instance of Error before accessing the message
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
    return NextResponse.json({ message: 'Error fetching cart', error: errorMessage }, { status: 500 });
  }
}
