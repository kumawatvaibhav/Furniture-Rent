import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'; // For JWT validation
import dbConnect from '@/lib/dbConnect'; // Database connection utility
import User from '@/model/user.model'; // Import User model

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// PUT method to update the user's details
export async function PUT(req: NextRequest) {
  try {
    // Establish DB connection
    await dbConnect();

    // Extract the token from the request cookies
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verify the JWT token
    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = (decoded as any).id; // Cast to any and extract the user ID
    } catch (error) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Parse the incoming request body
    const { name, email, address, phone } = await req.json();

    // Update user info using the user ID from the decoded token
    const updatedUser = await User.findByIdAndUpdate(
      userId, 
      { name, email, address, phone },
      { new: true } // Return the updated user object
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return updated user information
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
