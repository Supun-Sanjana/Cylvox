import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, baseUrl } from "@/lib/seo";
import { ShieldCheck, FileText, ArrowLeft, Mail, ExternalLink, Scale, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Trust Signal Auditor | Cylvox",
  description: "Terms of Service for the Trust Signal Auditor WordPress plugin and the optional api.cylvox.com Apply Fix remediation service.",
  alternates: {
    canonical: `${baseUrl}/products/trust-signal-auditor/terms`,
  },
  openGraph: {
    title: "Terms of Service — Trust Signal Auditor | Cylvox",
    description: "Terms of Service for the Trust Signal Auditor WordPress plugin and the optional api.cylvox.com Apply Fix remediation service.",
    url: `${baseUrl}/products/trust-signal-auditor/terms`,
    siteName: "Cylvox",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Trust Signal Auditor Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service — Trust Signal Auditor | Cylvox",
    description: "Terms of Service for the Trust Signal Auditor WordPress plugin and the optional api.cylvox.com Apply Fix remediation service.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Trust Signal Auditor", path: "/products/trust-signal-auditor" },
  { name: "Terms of Service", path: "/products/trust-signal-auditor/terms" },
]);

export default function TrustSignalAuditorTermsPage() {
  return (
    <main className="bg-background min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbs} />

      <div className="max-w-4xl mx-auto">
        {/* Navigation Breadcrumb Backlink */}
        <div className="mb-8">
          <Link
            href="/products/trust-signal-auditor"
            className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Trust Signal Auditor
          </Link>
        </div>

        {/* Page Header */}
        <div className="border-b border-border pb-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            <Scale className="w-3.5 h-3.5" />
            Product Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            These terms govern your use of the <strong>Trust Signal Auditor</strong> WordPress plugin and the optional external <strong>api.cylvox.com Apply Fix</strong> service.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-6">
            <span>Effective Date: August 16, 2026</span>
            <span>•</span>
            <span>Version: 1.0.0</span>
            <span>•</span>
            <span>Product Scope: Trust Signal Auditor Only</span>
          </div>
        </div>

        {/* Quick Summary Callout */}
        <div className="p-6 rounded-2xl bg-surface border border-border mb-12 space-y-3 text-sm">
          <h2 className="font-bold text-foreground flex items-center gap-2 text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Summary at a Glance
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The core <strong>Trust Signal Auditor</strong> plugin is free, open-source software licensed under GPLv2+. The optional <strong>Apply Fix</strong> feature connects to <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">api.cylvox.com</code> using an API key to return AI-assisted bio and schema suggestions. AI suggestions are drafts and <em>must always be reviewed and approved by you</em> before saving. We never charge for the local scan and never collect your visitor data.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, activating, or using the <strong>Trust Signal Auditor</strong> WordPress plugin (&ldquo;the Plugin&rdquo;), or by connecting to and utilizing the optional Apply Fix API at <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">api.cylvox.com</code> (&ldquo;the Service&rdquo;), you (&ldquo;User&rdquo;, &ldquo;Site Owner&rdquo;, or &ldquo;You&rdquo;) agree to be legally bound by these Terms of Service.
            </p>
            <p>
              If you are accepting these terms on behalf of a company, client, or legal entity, you represent and warrant that you have full authority to bind that entity to these terms. If you do not agree to these terms, do not install or use the Plugin or the Service.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              2. Free Core Plugin License &amp; Rights
            </h2>
            <p>
              The core WordPress plugin source code is released as free, open-source software under the <strong>GNU General Public License v2 (or later)</strong> (&ldquo;GPLv2+&rdquo;). You are free to inspect, modify, fork, and redistribute the local plugin code in accordance with the terms of the GPLv2 license.
            </p>
            <p>
              The core audit functions (such as calculating the E-E-A-T readiness score, checking author profile completeness, detecting indexability directives, and verifying Gravatar availability) execute entirely within your local WordPress hosting environment. No fee or subscription is required to run local audits.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              3. The Optional Apply Fix Service (api.cylvox.com)
            </h2>
            <p>
              Cylvox operates an optional hosted remediation API (&ldquo;Apply Fix Service&rdquo;) hosted at <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">https://api.cylvox.com</code>. This feature is entirely optional and is not required for the normal operation of the local plugin scan.
            </p>
            <div className="p-5 rounded-2xl bg-muted/40 border border-border space-y-2">
              <h3 className="font-semibold text-foreground text-sm sm:text-base">How the Apply Fix Service Works:</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  <strong>Transmission Trigger:</strong> The Plugin sends a secure HTTPS request to the Service only when a site administrator explicitly clicks the &ldquo;Apply Fix&rdquo; button for a flagged issue and has configured an active API key.
                </li>
                <li>
                  <strong>Transmitted Data:</strong> The request payload includes strictly the post title, author display name, and current schema type. It does <em>not</em> transmit the full post body, private database records, user login credentials, or website visitor traffic data.
                </li>
                <li>
                  <strong>AI Generation:</strong> The Service processes the payload through hosted large language models (including Anthropic Claude API as a sub-processor) to generate a tailored author bio draft or JSON-LD schema snippet.
                </li>
                <li>
                  <strong>Mandatory Human Approval:</strong> AI suggestions are returned to the WordPress admin modal as draft previews. The Plugin will <em>never</em> automatically write or overwrite database values without your explicit manual review and click of the &ldquo;Approve &amp; Apply Fix&rdquo; confirmation button.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              4. API Keys, Quotas, and Fair Use
            </h2>
            <p>
              Access to the Apply Fix Service requires a valid API key issued by Cylvox. You are responsible for safeguarding your API key. You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Share, resell, lease, or publicly expose your API key.</li>
              <li>Attempt to bypass rate limits, quota caps, or security controls implemented on <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">api.cylvox.com</code>.</li>
              <li>Send automated, scraping, or abusive high-frequency requests that impair service availability for other users.</li>
              <li>Transmit unlawful, defamatory, or infringing text in post titles or author metadata submitted for processing.</li>
            </ul>
            <p>
              Cylvox reserves the right to throttle, rate-limit, or revoke API keys without prior notice in cases of suspected abuse, non-payment of quota tiers, or security violations.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              5. Intellectual Property &amp; Content Ownership
            </h2>
            <p>
              You retain all existing intellectual property rights in your WordPress website, post titles, author biographies, and content. When suggestions are generated by the Apply Fix Service and approved by you, you retain full ownership of the resulting bio drafts and schema code saved to your site.
            </p>
            <p>
              Cylvox and its licensors retain all rights, title, and interest in and to the proprietary backend infrastructure, algorithms, and API endpoints serving <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">api.cylvox.com</code>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              6. Disclaimers &amp; Limitation of Liability
            </h2>
            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm space-y-2">
              <p className="font-semibold text-foreground flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                SEO and Algorithmic Outcome Disclaimer
              </p>
              <p>
                Search engine algorithms, ranking factors, AI Overview citations, and quality rating guidelines (including Google E-E-A-T) are controlled solely by third-party search engines and change continuously. Cylvox makes no warranty or representation that using the Plugin or applying suggestions will guarantee specific search rankings, traffic increases, or algorithmic immunity.
              </p>
            </div>
            <p>
              THE PLUGIN AND SERVICE ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL CYLVOX, ITS FOUNDERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, DATA, TRAFFIC, OR REVENUE) ARISING FROM YOUR USE OF OR INABILITY TO USE THE PLUGIN OR THE SERVICE.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              7. Service Modifications &amp; Termination
            </h2>
            <p>
              Cylvox may update, refine, or deprecate specific features of the Apply Fix Service or Plugin to maintain security and compatibility with modern WordPress versions.
            </p>
            <p>
              You may terminate these terms at any time by deactivating and deleting the Plugin and discontinuing use of the API. Cylvox may terminate or suspend API access immediately for any violation of these terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              8. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction of Cylvox Solo Studio, without regard to conflict of law principles. Any dispute arising out of or related to these terms shall be resolved through good-faith informal negotiations prior to initiating legal proceedings.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              9. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms of Service or need technical clarification, please contact our engineering team:
            </p>
            <div className="p-5 rounded-2xl bg-surface border border-border inline-block">
              <p className="font-semibold text-foreground">Cylvox Solo Studio</p>
              <p className="text-sm mt-1">Product: Trust Signal Auditor</p>
              <p className="text-sm mt-1">
                Email: <a href="mailto:hello@cylvox.com" className="text-foreground underline font-medium">hello@cylvox.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation Link */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <Link href="/products/trust-signal-auditor/privacy" className="text-foreground underline hover:opacity-80">
            View Privacy Policy →
          </Link>
          <Link href="/products/trust-signal-auditor" className="text-muted-foreground hover:text-foreground">
            Trust Signal Auditor Home
          </Link>
        </div>
      </div>
    </main>
  );
}
