import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON payload received.' },
        { status: 400 }
      );
    }

    const { name, email, message } = body || {};

    // Validate fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Successfully processed data
    console.log('New Contact Submission Received:', { name, email, message });

    return NextResponse.json(
      { success: true, message: 'Form data received successfully on the server!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Server Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}