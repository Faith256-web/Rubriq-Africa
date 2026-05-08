import { NextResponse } from 'next/server';

export async function POST() {
  // To log the user out, we just clear the auth_token cookie
  const response = NextResponse.json({ message: 'Logged out successfully' }, { status: 200 });
  
  response.cookies.set({
    name: 'auth_token',
    value: '',
    httpOnly: true,
    expires: new Date(0), // Expire the cookie immediately
    path: '/'
  });

  return response;
}
