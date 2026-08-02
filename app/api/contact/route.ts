import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to add RESEND_API_KEY to your .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const projectType = formData.get("projectType") as string | null;
    const budget = formData.get("budget") as string | null;
    const message = formData.get("message") as string | null;
    const file = formData.get("attachment") as File | null;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
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

    const data = await resend.emails.send({
      from: 'Cylvox Contact Form <onboarding@resend.dev>', // Use a verified domain or onboarding@resend.dev for testing
      to: 'infor.ssupun@gmail.com',
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

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error('Resend Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
