import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate incoming data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Format the email subject line based on the user's dropdown choice
    const emailSubject = `[${subject.toUpperCase()}] New Website Message from ${name}`;

    // Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Stafford Music Website <contact@form.staffordmusicllc.com>', // Must be your Resend-verified domain
      to: ['staffordmusicllc@gmail.com'], 
      replyTo: email, // Direct reply back to the sender
      subject: emailSubject,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #06b6d4; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Category/Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #06b6d4; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}