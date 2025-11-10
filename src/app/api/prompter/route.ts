import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://clecucuci.beget.app/webhook/autosapienspropter';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const rawBody = await webhookResponse.text();

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          error: 'Webhook request failed',
          status: webhookResponse.status,
          details: rawBody
        },
        { status: webhookResponse.status }
      );
    }

    try {
      const data = JSON.parse(rawBody);
      return NextResponse.json(data);
    } catch {
      return NextResponse.json({ reply: rawBody });
    }
  } catch (error) {
    console.error('Prompter API proxy error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

