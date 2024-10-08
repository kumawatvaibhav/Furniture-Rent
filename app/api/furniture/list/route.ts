// app/api/furniture/list/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Furniture from '@/model/furniture.model';

export async function GET() {
  await dbConnect();

  try {
    const furniture = await Furniture.find({});
    return NextResponse.json({ furniture }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching furniture', error }, { status: 500 });
  }
}
