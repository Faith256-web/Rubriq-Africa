import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');

// Schema for user registration to ensure unexpected data is rejected
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export async function POST(request) {
  try {
    const rawBody = await request.json();
    
    // Parse and validate the incoming request body
    const { name, email, password } = registerSchema.parse(rawBody);

    // Read the current users from our mock database
    let fileData = '[]';
    if (fs.existsSync(dataFilePath)) {
      fileData = fs.readFileSync(dataFilePath, 'utf8');
    }
    const users = JSON.parse(fileData);

    // Check if the user already exists
    if (users.find(u => u.email === email)) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Hash the password using bcrypt for secure storage
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create the new user. The first user becomes the superadmin.
    const newUser = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
      role: users.length === 0 ? 'superadmin' : 'user'
    };

    // Save back to the file
    users.push(newUser);
    fs.writeFileSync(dataFilePath, JSON.stringify(users, null, 2), 'utf8');

    // Do not return the hashed password
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: error.errors[0].message, errors: error.errors }, { status: 400 });
    }
    console.error('Registration error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
