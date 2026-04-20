import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to our mock "database" file where inquiries are stored
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'inquiries.json');

// GET request handler: This creates a backend endpoint at GET /api/inquiries
// It reads the data from the inquiries.json file and sends it to the frontend via API
export async function GET() {
  try {
    // Read the data from the file synchronously (for our simple testing backend)
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const inquiries = JSON.parse(fileData);
    
    // Return the data as a JSON response with status 200 (OK)
    return NextResponse.json(inquiries, { status: 200 });
  } catch (error) {
    // If the file doesn't exist or an error occurs, return a server error
    return NextResponse.json({ message: 'Failed to read data' }, { status: 500 });
  }
}

// POST request handler: This allows testing submitting forms to the backend
// It accepts JSON body, appends it to our json data file, and responses with success
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Read current data
    const fileData = fs.readFileSync(dataFilePath, 'utf8');
    const inquiries = JSON.parse(fileData);
    
    // Create new inquiry object
    const newInquiry = {
      id: inquiries.length > 0 ? inquiries[inquiries.length - 1].id + 1 : 1,
      name: body.name || "Unknown",
      email: body.email || "Unknown",
      subject: body.subject || "General Inquiry",
      status: "New",
      date: new Date().toISOString().split('T')[0] // Format date as YYYY-MM-DD
    };
    
    // Add to our list and write back to file
    inquiries.push(newInquiry);
    fs.writeFileSync(dataFilePath, JSON.stringify(inquiries, null, 2), 'utf8');
    
    return NextResponse.json({ message: 'Inquiry received successfully!', data: newInquiry }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to process request' }, { status: 500 });
  }
}
