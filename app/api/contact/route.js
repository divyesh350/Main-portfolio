import { NextResponse } from 'next/server';
import { sendEmail } from '@/helper/sendEmail';

export async function POST(request) {
  try {
    // Get the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide all required fields: name, email, and message' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please provide a valid email address' 
        },
        { status: 400 }
      );
    }

    // Send email using our helper function
    const result = await sendEmail({ name, email, message });

    if (result.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully' 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: result.error || 'Failed to send message' 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in contact route:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
} 