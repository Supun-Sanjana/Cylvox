import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

function generateLeadEmailHtml(body: any) {
  const issuesHtml = body.issues && Array.isArray(body.issues) && body.issues.length > 0 
    ? body.issues.map((issue: any) => `
      <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #ffffff;">
        <div style="margin-bottom: 8px;">
          <span style="display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; ${
            issue.sev === 'critical' ? 'background-color: #fee2e2; color: #991b1b;' : 
            issue.sev === 'warning' ? 'background-color: #fef08a; color: #854d0e;' : 
            'background-color: #f3f4f6; color: #374151;'
          }">
            ${issue.sev || 'issue'}
          </span>
          <strong style="margin-left: 8px; font-size: 16px; color: #111827;">${issue.title || issue.id}</strong>
        </div>
        ${issue.body ? `<p style="margin: 0 0 12px 0; color: #4b5563; font-size: 14px; line-height: 1.5;">${issue.body}</p>` : ''}
        ${issue.howToFix ? `<p style="margin: 0; color: #059669; font-size: 14px; line-height: 1.5;"><strong>How to fix:</strong> ${issue.howToFix}</p>` : ''}
      </div>
    `).join('')
    : '<p style="color: #6b7280; font-style: italic;">No issues reported or scan not provided.</p>';

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
      <h1 style="color: #111827; font-size: 24px; margin-top: 0; margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
        New Wisp Lead
      </h1>
      
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 32px; border: 1px solid #f3f4f6;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #6b7280; font-weight: 500; width: 80px; font-size: 14px;">Domain:</td>
            <td style="padding: 6px 0; color: #111827; font-weight: 600; font-size: 15px;">
              <a href="${body.domain.startsWith('http') ? body.domain : `https://${body.domain}`}" target="_blank" style="color: #2563eb; text-decoration: none;">${body.domain}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #6b7280; font-weight: 500; font-size: 14px;">Source:</td>
            <td style="padding: 6px 0; color: #111827; font-size: 14px;">
              <span style="background-color: #e5e7eb; padding: 2px 8px; border-radius: 999px; font-size: 12px; font-weight: 500;">
                ${body.source}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #6b7280; font-weight: 500; font-size: 14px;">Email:</td>
            <td style="padding: 6px 0; color: #111827; font-size: 14px;">
              ${body.email ? `<a href="mailto:${body.email}" style="color: #2563eb; text-decoration: none;">${body.email}</a>` : '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'}
            </td>
          </tr>
          ${body.message ? `
          <tr>
            <td style="padding: 6px 0; color: #6b7280; font-weight: 500; vertical-align: top; font-size: 14px;">Message:</td>
            <td style="padding: 6px 0; color: #111827; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${body.message}</td>
          </tr>
          ` : ''}
        </table>
      </div>

      <h2 style="color: #111827; font-size: 18px; margin-bottom: 16px; font-weight: 600;">Detected SEO Issues</h2>
      ${issuesHtml}
      
      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; text-align: center;">
        Sent automatically from Cylvox Wisp via Contact Route
      </div>
    </div>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // { email?, domain, issues, source, message? }
    
    if (!body.domain || !body.source) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if ((body.source === 'registration' || body.source === 'plugin-waitlist') && !body.email) {
      return NextResponse.json({ error: 'Email required for this lead type' }, { status: 400 });
    }

    const { error } = await supabase.from('wisp_leads').insert({
      email: body.email || null,
      domain: body.domain,
      issues: body.issues,
      source: body.source,
      message: body.message || null,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }

    // Note: 'registration' (the "scan my full site" email gate) no
    // longer flows through this route — it posts straight to
    // /api/wisp-scan-multi, which does the actual multi-page scan,
    // its own wisp_leads insert, and the report email. This route now
    // only handles 'contact' and 'plugin-waitlist' leads. Kept the
    // 'registration' value in the DB check constraint for historical rows.
    if (body.source === 'contact' || body.source === 'plugin-waitlist') {
      // Notify on contact-form leads
      // Using n8n webhook if available, or any existing system.
      // Since the brief says "Resend a plain notification email to yourself... (can live in the same route)"
      // Let's send an email if RESEND_API_KEY is available.
      if (process.env.RESEND_API_KEY) {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: 'Wisp Leads <hello@cylvox.com>',
          to: 'hello@cylvox.com',
          subject: `New Wisp Lead (${body.source}): ${body.domain}`,
          html: generateLeadEmailHtml(body),
          text: `A user submitted a Wisp lead.\n\nSource: ${body.source}\nEmail: ${body.email || 'not provided'}\nDomain: ${body.domain}\nIssues: ${JSON.stringify(body.issues, null, 2)}`
        }).catch(console.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unexpected server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
