import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Secret key for verifying JWTs
const JWT_SECRET = new TextEncoder().encode('rubriq-africa-super-secret-key-2026');

export async function GET(request) {
  try {
    // Retrieve the auth token from cookies
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Verify the token
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // Return the user's role and email
    return NextResponse.json({ user: { email: payload.email, role: payload.role } }, { status: 200 });

  } catch (error) {
    // If the token is invalid or expired
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
}
