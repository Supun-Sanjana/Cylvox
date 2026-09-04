import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, baseUrl } from "@/lib/seo";
import { ShieldCheck, Lock, ArrowLeft, ExternalLink, Database, Cpu, EyeOff, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Trust Signal Auditor | Cylvox",
  description: "Privacy policy and data collection disclosures for the Trust Signal Auditor WordPress plugin and the optional api.cylvox.com Apply Fix feature.",
  alternates: {
    canonical: `${baseUrl}/products/trust-signal-auditor/privacy`,
  },
  openGraph: {
    title: "Privacy Policy — Trust Signal Auditor | Cylvox",
    description: "Privacy policy and data collection disclosures for the Trust Signal Auditor WordPress plugin and the optional api.cylvox.com Apply Fix feature.",
    url: `${baseUrl}/products/trust-signal-auditor/privacy`,
    siteName: "Cylvox",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Trust Signal Auditor Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — Trust Signal Auditor | Cylvox",
    description: "Privacy policy and data collection disclosures for the Trust Signal Auditor WordPress plugin.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Trust Signal Auditor", path: "/products/trust-signal-auditor" },
  { name: "Privacy Policy", path: "/products/trust-signal-auditor/privacy" },
]);

export default function TrustSignalAuditorPrivacyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            Privacy &amp; Data Transparency
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            This policy discloses exactly what data is processed by the <strong>Trust Signal Auditor</strong> WordPress plugin and the optional external <strong>api.cylvox.com Apply Fix</strong> service.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mt-6">
            <span>Effective Date: August 16, 2026</span>
            <span>•</span>
            <span>Version: 1.0.0</span>
            <span>•</span>
            <span>WordPress.org Compliant</span>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-border mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-foreground text-lg">Our Core Privacy Commitment</h2>
              <p className="text-xs text-muted-foreground">Minimal data footprint, no stealth tracking, no visitor profiling.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-muted/40 border border-border">
              <EyeOff className="w-5 h-5 text-foreground mb-2" />
              <p className="font-bold text-foreground text-sm">No Visitor Tracking</p>
              <p className="text-xs text-muted-foreground mt-1">Zero frontend scripts or cookies placed on your visitors.</p>
            </div>
            <div className="p-4 rounded-2xl bg-muted/40 border border-border">
              <Database className="w-5 h-5 text-foreground mb-2" />
              <p className="font-bold text-foreground text-sm">Local Execution</p>
              <p className="text-xs text-muted-foreground mt-1">Audits run inside your WordPress instance without external servers.</p>
            </div>
            <div className="p-4 rounded-2xl bg-muted/40 border border-border">
              <Cpu className="w-5 h-5 text-foreground mb-2" />
              <p className="font-bold text-foreground text-sm">Opt-In AI Only</p>
              <p className="text-xs text-muted-foreground mt-1">Data sent to API only when you click &ldquo;Apply Fix&rdquo;.</p>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="space-y-12 text-muted-foreground leading-relaxed text-sm sm:text-base">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              1. What Data Is Collected &amp; Processed
            </h2>
            <p>
              We distinguish strictly between the <strong>Free Local Scan</strong> and the <strong>Optional Apply Fix Service</strong>:
            </p>

            <div className="space-y-4 pt-2">
              {/* Free Core Scan */}
              <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <h3 className="font-bold text-foreground text-base">A. Free Core Plugin Scan</h3>
                </div>
                <p className="text-sm">
                  The standard diagnostic scan (auditing indexability, author bio length, display name formats, and JSON-LD schema presence) executes <strong>100% locally on your WordPress server</strong>.
                </p>
                <p className="text-sm">
                  <strong>Gravatar Probe:</strong> To verify whether an author has an active avatar, the plugin issues an HTTP <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">HEAD</code> request directly from your server to Gravatar (<code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">https://secure.gravatar.com/avatar/[md5_hash]</code>). Only the cryptographic MD5 hash of the author&apos;s email address is sent. No other site data, visitor data, or personal details leave your server.
                </p>
              </div>

              {/* Optional Apply Fix */}
              <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-foreground shrink-0" />
                  <h3 className="font-bold text-foreground text-base">B. Optional Apply Fix Service (api.cylvox.com)</h3>
                </div>
                <p className="text-sm">
                  When you explicitly request an AI remediation suggestion, the plugin transmits the following scoped metadata payload to <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">https://api.cylvox.com</code>:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm">
                  <li><strong>Post / Page Title:</strong> To provide context for schema headline generation.</li>
                  <li><strong>Author Display Name:</strong> To construct accurate Person schema and author bio drafts.</li>
                  <li><strong>Current Schema Type:</strong> To format the recommended JSON-LD patch correctly.</li>
                </ul>
                <div className="p-4 rounded-xl bg-muted/60 text-xs text-foreground font-medium border border-border">
                  🔒 <strong>Explicitly Excluded:</strong> We DO NOT collect post body text, unpublished drafts, visitor IPs, website analytics, database credentials, or WordPress administrator passwords.
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              2. When and How Data Is Transmitted
            </h2>
            <p>
              Data is transmitted to external servers <strong>only</strong> when all of the following conditions are met:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>A site administrator has entered and saved a valid API key in the plugin settings.</li>
              <li>A site administrator manually navigates to a flagged audit issue and clicks the &ldquo;Apply Fix (AI)&rdquo; button.</li>
            </ol>
            <p className="text-sm">
              The plugin does not execute automated background calls or scheduled data synchronization to external endpoints.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              3. Purpose of Processing
            </h2>
            <p>
              The payload received by <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">api.cylvox.com</code> is processed exclusively to generate structured remediation suggestions:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Synthesizing professional author bio drafts optimized for E-E-A-T clarity.</li>
              <li>Synthesizing valid, Schema.org-compliant JSON-LD markup snippets (Person, Article, TechArticle).</li>
            </ul>
            <p className="text-sm">
              The generated outputs are returned back to your browser session for your manual review and approval before any change is written to your WordPress database.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              4. Third-Party Sub-processors &amp; External Services
            </h2>
            <p>
              To deliver these functionalities, the following third-party service providers are utilized:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/60 text-foreground font-semibold border-b border-border">
                    <th className="p-3 sm:p-4">Entity</th>
                    <th className="p-3 sm:p-4">Role / Purpose</th>
                    <th className="p-3 sm:p-4">Data Transmitted</th>
                    <th className="p-3 sm:p-4">Privacy Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-foreground">Gravatar (Automattic Inc.)</td>
                    <td className="p-3 sm:p-4">Avatar image presence check</td>
                    <td className="p-3 sm:p-4 font-mono text-xs">MD5 email hash only</td>
                    <td className="p-3 sm:p-4">
                      <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-foreground underline inline-flex items-center gap-1">
                        Automattic Privacy <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-foreground">Anthropic PBC</td>
                    <td className="p-3 sm:p-4">AI model inference sub-processor</td>
                    <td className="p-3 sm:p-4 font-mono text-xs">Title, author name, schema type</td>
                    <td className="p-3 sm:p-4">
                      <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline inline-flex items-center gap-1">
                        Anthropic Privacy <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 sm:p-4 font-semibold text-foreground">Cylvox Solo Studio</td>
                    <td className="p-3 sm:p-4">API operator &amp; hosting</td>
                    <td className="p-3 sm:p-4 font-mono text-xs">API key, request metadata</td>
                    <td className="p-3 sm:p-4">
                      <Link href="/products/trust-signal-auditor/terms" className="text-foreground underline inline-flex items-center gap-1">
                        Terms of Service <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              5. Data Retention Policy &amp; Zero Training Guarantee
            </h2>
            <div className="space-y-3">
              <p>
                <strong>Zero Training:</strong> We guarantee that customer request payloads (post titles, author names, or generated snippets) sent to <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">api.cylvox.com</code> and upstream AI sub-processors are <strong>never used to train public machine learning models</strong>.
              </p>
              <p>
                <strong>Ephemeral Server Logs:</strong> Operational server access logs (containing IP address, API key ID, and response status codes) are retained on <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">api.cylvox.com</code> for a maximum of <strong>30 days</strong> strictly for rate-limiting enforcement, abuse mitigation, and security diagnostics, after which they are permanently purged.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              6. Site Owner Rights &amp; Data Erasure Requests
            </h2>
            <p>
              As a site owner using Trust Signal Auditor, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Request immediate revocation and deletion of your API key.</li>
              <li>Request deletion of any operational debug log entries associated with your API key from our server records.</li>
              <li>Completely remove all local plugin data at any time by uninstalling the plugin via your WordPress admin (which deletes all local transients and options).</li>
            </ul>
            <p className="text-sm">
              To submit a data deletion request, email our engineering team at <a href="mailto:hello@cylvox.com" className="text-foreground underline font-medium">hello@cylvox.com</a> with your API key reference. Requests are processed within 48 hours.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">
              7. Contact Information
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact the product maintainer:
            </p>
            <div className="p-5 rounded-2xl bg-surface border border-border inline-block">
              <p className="font-semibold text-foreground">Cylvox Solo Studio</p>
              <p className="text-sm mt-1">Product: Trust Signal Auditor</p>
              <p className="text-sm mt-1">
                Email: <a href="mailto:hello@cylvox.com" className="text-foreground underline font-medium">hello@cylvox.com</a>
              </p>
              <p className="text-sm mt-1">
                Website: <a href="https://www.cylvox.com" className="text-foreground underline font-medium">https://www.cylvox.com</a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Navigation Link */}
        <div className="mt-16 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
          <Link href="/products/trust-signal-auditor/terms" className="text-foreground underline hover:opacity-80">
            View Terms of Service →
          </Link>
          <Link href="/products/trust-signal-auditor" className="text-muted-foreground hover:text-foreground">
            Trust Signal Auditor Home
          </Link>
        </div>
      </div>
    </main>
  );
}
