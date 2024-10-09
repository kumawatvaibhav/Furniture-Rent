import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import User from '@/model/user.model';
import RentedFurniture from '@/model/Rentedfurniture.model'; 
import PastOrder from '@/model/PastOrder.model'; 
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Connect to the database
connectDB();

export async function GET(request: NextRequest) {
  try {
    // Extract the token from the request cookies
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verify the JWT token
    let userId;
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.id;
    } catch (error) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    // Find user data by ID
    const user = await User.findById(userId).select('-password'); // Omit password field
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Fetch user's rented furniture
    const rentedFurniture = await RentedFurniture.find({ userId: user._id });
    
    // Fetch user's past orders
    const pastOrders = await PastOrder.find({ userId: user._id });

    // Create the response data
    const userProfile = {
      name: user.name,
      email: user.email,
      avatar: user.avatar, // Assuming you have an avatar field
      address: user.address, // Assuming you have an address field
      phone: user.phone, // Assuming you have a phone field
      rentedFurniture: rentedFurniture.map(item => ({
        id: item._id,
        name: item.name,
        image: item.image,
        rentedSince: item.rentedSince,
      })),
      pastOrders: pastOrders.map(order => ({
        id: order._id,
        name: order.name,
        startDate: order.startDate,
        endDate: order.endDate,
        total: order.total,
      })),
    };

    // Return user profile data as JSON
    return NextResponse.json(userProfile, { status: 200 });

  } catch (err) {
    console.error('Error fetching profile data:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
