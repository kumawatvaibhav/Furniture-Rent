import { getSession } from 'next-auth/react';
import dbConnect from '@/lib/dbConnect'; // Assuming you have a DB connection setup
import User from '@/model/user.model'; // Import your User model

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req }); // Get the logged-in user's session
    if (!session) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { name, email, address, phone } = req.body;

    // Connect to your database
    await dbConnect();

    // Update the user's information in the database
    const updatedUser = await User.findByIdAndUpdate(
      session.user._id,  // assuming the user's ID is stored in the session
      { name, email, address, phone },
      { new: true } // Return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
