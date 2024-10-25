import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Users from '@/model/user.model';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Connect to the database
connectDB();

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check if both email and password are provided
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'User does not exist' },
        { status: 400 }
      );
    }

    // Compare passwords (without hashing, directly compare plain text)
    if (password !== user.password) {
      return NextResponse.json(
        { message: 'Incorrect password' },
        { status: 400 }
      );
    }

    // If passwords match, create a JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id }, 
      JWT_SECRET, 
      { expiresIn: '1h' }
    );

    // Send response with the token and user ID
    const response = NextResponse.json({
      message: "Login Successful",
      userId: user._id,
    });

    // Set token in cookies
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Error during login process:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
