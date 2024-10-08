// app/api/furniture/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Furniture from '@/model/furniture.model';
import { Types } from 'mongoose';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const furniture = await Furniture.findById(params.id);
    if (!furniture) {
      return NextResponse.json({ message: 'Furniture not found' }, { status: 404 });
    }

    return NextResponse.json({ furniture }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching furniture', error }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();

  try {
    const deletedFurniture = await Furniture.findByIdAndDelete(params.id);
    if (!deletedFurniture) {
      return NextResponse.json({ message: 'Furniture not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Furniture deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting furniture', error }, { status: 500 });
  }
}
