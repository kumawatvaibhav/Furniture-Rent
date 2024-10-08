import connectDB from '@/lib/dbConnect';
import { validateJWT } from '@/lib/validateJWT';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import User from '@/model/user.model';
connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await validateJWT(request);
    const user = await User.findById(userId).select('-password'); //Do not show password
    return NextResponse.json({
      data: user
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      if (error.message === 'jwt expired') {
        cookies().delete('token');
      }
      return NextResponse.json(
        {
          message: error.message
        },
        { status: 400 }
      );
    }
  }
}