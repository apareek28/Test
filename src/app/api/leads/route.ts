import { NextResponse } from 'next/server';

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  goals?: string;
  budget?: string;
  source?: string;
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!body.name || !body.email || !body.company || !body.goals || !body.budget) {
    return NextResponse.json({ ok: false, message: 'Missing required fields.' }, { status: 400 });
  }

  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ ok: false, message: 'Invalid email address.' }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: 'Request submitted successfully. A strategist will contact you within one business day.'
  });
}
