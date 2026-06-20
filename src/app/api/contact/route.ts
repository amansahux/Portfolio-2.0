import { NextResponse } from "next/server";

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
    console.log(payload)
    const error = validateContactPayload(payload);

    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    return NextResponse.json(
      {
        message:
          "Thank you for reaching out. Your message has been received successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        message: "We couldn't send your message right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
