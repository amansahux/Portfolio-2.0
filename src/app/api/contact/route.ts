import { NextResponse } from "next/server";
import { Resend } from 'resend';

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactPayload(payload: ContactPayload) {
  if (!payload.name?.trim()) {
    return "Name is required.";
  }

  if (payload.name.trim().length < 2) {
    return "Name must contain at least 2 characters.";
  }

  if (!payload.email?.trim()) {
    return "Email is required.";
  }

  if (!EMAIL_REGEX.test(payload.email.trim())) {
    return "Please enter a valid email address.";
  }

  if (!payload.subject?.trim()) {
    return "Subject is required.";
  }

  if (!payload.message?.trim()) {
    return "Message is required.";
  }

  if (payload.message.trim().length < 20) {
    return "Message must contain at least 20 characters.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const error = validateContactPayload(payload);

    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const { name, email, subject, message } = payload;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error: resendError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `New Inquiry: ${subject} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #050505; color: #e5e2e1; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .card { background-color: #131313; border: 1px solid #333; border-radius: 12px; padding: 40px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px; }
            .header h1 { margin: 0; font-size: 20px; color: #e8e8e8; font-weight: 300; letter-spacing: 3px; text-transform: uppercase; }
            .field { margin-bottom: 24px; }
            .label { font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 8px; display: block; }
            .value { font-size: 16px; color: #e5e2e1; line-height: 1.6; margin: 0; }
            .message-box { background-color: #0e0e0e; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-top: 8px; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; letter-spacing: 1px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <h1>New Portfolio Message</h1>
              </div>
              <div class="field">
                <span class="label">Sender Details</span>
                <p class="value"><strong>${name}</strong><br><a href="mailto:${email}" style="color: #c0c0c0; text-decoration: none;">${email}</a></p>
              </div>
              <div class="field">
                <span class="label">Inquiry Type</span>
                <p class="value" style="text-transform: capitalize;">${subject}</p>
              </div>
              <div class="field">
                <span class="label">Message</span>
                <div class="message-box">
                  <p class="value" style="white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Sent securely from your MERN Developer Portfolio</p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    if (resendError) {
      throw new Error(resendError.message);
    }

    return NextResponse.json(
      {
        message:
          "Thank you for reaching out. Your message has been received successfully.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Resend Error:", errorMessage);
    return NextResponse.json(
      {
        message: "We couldn't send your message right now. Please try again in a moment.",
        error: errorMessage
      },
      { status: 500 }
    );
  }
}
