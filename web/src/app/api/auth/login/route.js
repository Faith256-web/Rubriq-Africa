import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { SignJWT } from 'jose';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// Secret key for signing JWTs (in a real app, this MUST be an environment variable)
const JWT_SECRET = new TextEncoder().encode('rubriq-africa-super-secret-key-2026');

// Schema for login validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required")
});

export async function POST(request) {
  try {
    const rawBody = await request.json();
    
    // Validate the incoming login credentials
    const { email, password } = loginSchema.parse(rawBody);

    let fileData = '[]';
    if (fs.existsSync(dataFilePath)) {
      fileData = fs.readFileSync(dataFilePath, 'utf8');
    }
    const users = JSON.parse(fileData);

    // Find the user by email
    const user = users.find(u => u.email === email);
    if (!user) {
      // Return a generic error message for security purposes
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Create a JWT token for the session using jose
    const token = await new SignJWT({ id: user.id, email: user.email, role: user.role })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h') // Token expires in 2 hours
      .sign(JWT_SECRET);

    // Create the response and set the HTTP-only cookie
    const response = NextResponse.json({ message: 'Login successful', role: user.role }, { status: 200 });
    
    response.cookies.set({
      name: 'auth_token',
      value: token,
      httpOnly: true, // Prevents client-side JS from accessing the cookie (security)
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 2 // 2 hours in seconds
    });

    return response;

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors[0].message, errors: error.errors }, { status: 400 });
    }
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
