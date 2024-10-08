import { NextRequest,NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Users from '@/model/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await Users.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'This user does not exist.' },
        { status: 400 }
      );
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(reqBody.password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: 'Incorrect password.' },
        { status: 400 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send response with token in cookies
    const response = NextResponse.json({
      message: "Login Successful"
    });
    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/'
    });

    return response;

  } catch (err) {
    console.error('Error during login process:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}





