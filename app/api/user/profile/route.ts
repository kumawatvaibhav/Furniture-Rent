import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json("hello loading", { status: 200 });

  } catch (err) {
    console.error('Error fetching profile data:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
