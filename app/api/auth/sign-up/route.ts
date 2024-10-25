import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/user.model';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Save the new user to the database
    const newUser = new User({
      username,
      email,
      password, // Storing plain password directly
    });

    // Save the new user
    await newUser.save();

    // Nodemailer setup for sending confirmation emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Account Confirmation',
      text: `Hello ${username},\n\nThank you for registering and your password: ${password}. Please confirm your email by clicking the following link: \nhttp://Ario.com/confirm?email=${email}\n\nBest Regards,\nTeam`,
    };

    // Send confirmation email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json(
      { message: 'User registered successfully, confirmation email sent', user: newUser },
      { status: 201 }
    );

  } catch (error: unknown) { // Explicitly typing the error as unknown
    const errorMessage = (error instanceof Error) ? error.message : 'Unknown error occurred';
    console.error('Error during registration process:', error);
    return NextResponse.json(
      { message: 'Error registering user', error: errorMessage },
      { status: 500 }
    );
  }
}
