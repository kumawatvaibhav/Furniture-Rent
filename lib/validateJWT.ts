import { NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const validateJWT = async (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    if (!token) {
      throw new Error('No token provided');
    }

    // decode the token
    const decryptedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;
    return decryptedToken.id;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};