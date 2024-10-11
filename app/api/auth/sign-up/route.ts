import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import dbConnect from '@/lib/dbConnect';
import User from '@/model/user.model';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to the database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Set up Nodemailer transport with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '22bt04059@gsfcuniversity.ac.in',  // Replace with your Gmail address
        pass: 'gtok vgxq suvl hgia',     // Replace with the App Password
      },
    });

    const mailOptions = {
      from: '22bt04059@gsfcuniversity.ac.in',   // Sender address
      to: email,                      // Receiver's email
      subject: 'Account Confirmation',
      text: `Hello ${username},\n\nThank you for registering. Please confirm your email by clicking the following link: \nhttp://Ario.com/confirm?email=${email}\n\nBest Regards,\nTeam`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json(
      { message: 'User registered successfully, confirmation email sent', user: newUser },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { message: 'Error registering user', error: error.message },
      { status: 500 }
    );
  }
}
