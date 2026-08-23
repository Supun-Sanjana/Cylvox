import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to add RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------------------------------------------------------------------
// In-memory IP-based rate limiter
// ---------------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 3;

interface RateLimitEntry {
  count: number;
  firstRequestTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Periodically clean up stale entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequestTime > RATE_LIMIT_WINDOW_MS) {
    // First request in a new window
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  entry.count += 1;
  return false;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 1000;

function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'
  );
}

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------
export async function POST(req: Request) {
  try {
    // --- Rate limiting ---
    const clientIp = getClientIp(req);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const formData = await req.formData();
    const rawName = formData.get("name") as string | null;
    const rawEmail = formData.get("email") as string | null;
    const projectType = formData.get("projectType") as string | null;
    const budget = formData.get("budget") as string | null;
    const rawMessage = formData.get("message") as string | null;
    const file = formData.get("attachment") as File | null;

    // --- Input sanitization: trim whitespace ---
    const name = rawName?.trim() || null;
    const email = rawEmail?.trim() || null;
    const message = rawMessage?.trim() || null;

    // --- Required field validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // --- Email format validation ---
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // --- Message length validation ---
    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
        { status: 400 }
      );
    }

    const attachments: Array<{ filename: string; content: Buffer }> = [];

    if (file && file instanceof File && file.size > 0) {
      // Validate 2 MB limit
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json(
          { error: 'Attachment exceeds the 2 MB file size limit.' },
          { status: 400 }
        );
      }

      // Validate file extension
      const fileName = file.name || 'document.txt';
      const ext = fileName.split('.').pop()?.toLowerCase() || '';
      const allowedExts = ['txt', 'docx', 'doc', 'csv', 'xlsx', 'xls', 'pdf', 'rtf', 'odt'];
      if (!allowedExts.includes(ext)) {
        return NextResponse.json(
          { error: 'Invalid file format. Supported document types: txt, pdf, doc, docx, csv, xls, xlsx.' },
          { status: 400 }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: fileName,
        content: buffer,
      });
    }

    // 1. Send notification to site owner
    const data = await resend.emails.send({
      from: 'Cylvox <onboarding@resend.dev>', // TODO: Update to verified domain e.g., hello@cylvox.com
      to: 'infor.ssupun@gmail.com',
      replyTo: email,
      subject: `New Lead from Cylvox: ${name} (${projectType || 'General'})`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Attachment Included:</strong> ${attachments.length > 0 ? attachments[0].filename : 'None'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 2. Send auto-responder confirmation to the client
    // Note: This requires a verified domain in Resend. onboarding@resend.dev only allows sending to your own email.
    await resend.emails.send({
      from: 'Cylvox <onboarding@resend.dev>', // TODO: Must update this to a verified domain (e.g. hello@cylvox.com) for external delivery
      to: email,
      subject: `We've received your request - Cylvox`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2>Hi ${name},</h2>
          <p>Thanks for reaching out to Cylvox!</p>
          <p>This is an automated confirmation that we've received your project inquiry. We are reviewing the details and will get back to you within 24 hours to discuss the next steps.</p>
          <br/>
          <p><strong>Your Message Summary:</strong></p>
          <blockquote style="border-left: 4px solid #eee; padding-left: 1rem; color: #555;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
          <br/>
          <p>Best regards,</p>
          <p><strong>Supun Sanjana</strong><br/>Cylvox Solo Studio</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
