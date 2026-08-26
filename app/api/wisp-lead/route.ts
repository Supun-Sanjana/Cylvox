import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // { email?, domain, issues, source, message? }
    
    if (!body.domain || !body.source) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    if (body.source === 'registration' && !body.email) {
      return NextResponse.json({ error: 'Email required for registration' }, { status: 400 });
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
    // only handles 'contact' leads. Kept the 'registration' value in
    // the DB check constraint for historical rows.
    if (body.source === 'contact') {
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
          subject: `New Wisp Lead (Contact): ${body.domain}`,
          text: `A user wants Cylvox to fix their Wisp issues.\n\nDomain: ${body.domain}\nIssues: ${JSON.stringify(body.issues, null, 2)}`
        }).catch(console.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
