import type { Metadata } from "next";
import Link from "next/link";
import { TrustSignalHero } from "@/components/trust-signal-hero";
import { BentoFeatures } from "@/components/bento-features";
import { TrustSignalScanPreview } from "@/components/trust-signal-scan-preview";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, baseUrl } from "@/lib/seo";
import { TRUSTLYNE_PLUGIN_URL } from "@/lib/wisp/pluginConfig";
import { 
  ShieldCheck, 
  Download, 
  ExternalLink, 
  FileText, 
  Lock, 
  HelpCircle, 
  CheckCircle2, 
  Server, 
  Zap, 
  Globe 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Trust Signal Auditor — WordPress E-E-A-T Plugin | Cylvox",
  description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors with a real, lightweight audit.",
  alternates: {
    canonical: `${baseUrl}/products/trust-signal-auditor`,
  },
  openGraph: {
    title: "Trust Signal Auditor — WordPress E-E-A-T Plugin | Cylvox",
    description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors with a real, lightweight audit.",
    url: `${baseUrl}/products/trust-signal-auditor`,
    siteName: "Cylvox",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Trust Signal Auditor WordPress Plugin Dashboard UI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust Signal Auditor — WordPress E-E-A-T Plugin | Cylvox",
    description: "Scan your WordPress site for missing trust signals, indexability traps, and authorship errors.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const pluginSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Trust Signal Auditor",
  "operatingSystem": "WordPress 6.0+",
  "applicationCategory": "SEOApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "description": "Trust Signal Auditor scans your WordPress site for missing trust signals, indexability traps, and authorship errors.",
  "author": {
    "@type": "Organization",
    "name": "Cylvox Solo Studio",
    "url": baseUrl,
  },
  ...(TRUSTLYNE_PLUGIN_URL ? { "downloadUrl": TRUSTLYNE_PLUGIN_URL } : {}),
  "softwareVersion": "1.0.0",
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Trust Signal Auditor", path: "/products/trust-signal-auditor" },
]);

export default function TrustSignalAuditorPage() {
  return (
    <main className="bg-background min-h-screen">
      <JsonLd data={pluginSchema} />
      <JsonLd data={breadcrumbs} />

      {/* Hero Section */}
      <TrustSignalHero />

      {/* Interactive Scan Results HUD / UI Showcase */}
      <section id="interactive-audit" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Plugin Interface
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground">
            Audit Your Entire Site in Seconds
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3">
            Run the live Wisp scan below to inspect real indexability, authorship, structured-data, and on-page findings.
          </p>
        </div>

        <TrustSignalScanPreview />
      </section>

      {/* Bento Grid Feature Breakdown */}
      <BentoFeatures />

      {/* External Services & Transparency Section (matches readme.txt) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              External Services &amp; Privacy Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Transparent, Zero-Surprise Architecture
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3">
              We design our tools for total privacy. The free audit never exfiltrates data, and the optional AI remediation only operates on explicit user consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free Plugin Operation */}
            <div className="p-8 rounded-3xl bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Free Core Plugin</h3>
                    <p className="text-xs text-muted-foreground">Runs 100% locally in WordPress</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>No external telemetry:</strong> No tracking scripts, no analytics beacons, and no visitor data collection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>Gravatar Verification:</strong> Performs a local HTTP <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">HEAD</code> request to <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">secure.gravatar.com</code> using an MD5 hash of author emails to verify avatar presence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>GPLv2 Licensed:</strong> {TRUSTLYNE_PLUGIN_URL ? "Free and open source, hosted on the official WordPress.org plugin directory." : "Free and open source — launching soon on the WordPress.org plugin directory."}</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
                Subject to <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Automattic Privacy Policy</a> for Gravatar requests.
              </div>
            </div>

            {/* Optional Apply Fix API */}
            <div className="p-8 rounded-3xl bg-surface border border-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-foreground flex items-center justify-center font-bold">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Optional Apply Fix Service</h3>
                    <p className="text-xs text-muted-foreground">Hosted at api.cylvox.com</p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>Explicit Trigger:</strong> Transmits data only when you configure an API key and click &ldquo;Apply Fix&rdquo; on a specific flagged issue.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>Minimal Scoped Payload:</strong> Transmits post title, author display name, and current schema type only. Never post content, never visitor data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-bold">•</span>
                    <span><strong>Human-in-the-Loop:</strong> AI-generated suggestions (Anthropic Claude sub-processor) must be manually reviewed and confirmed before updating WordPress.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <Link href="/products/trust-signal-auditor/privacy" className="font-semibold text-foreground underline hover:text-foreground/80">
                  Read Privacy Policy
                </Link>
                <Link href="/products/trust-signal-auditor/terms" className="font-semibold text-foreground underline hover:text-foreground/80">
                  Read Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Installation Specs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-foreground">Technical Specifications</h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">Engineered for lightweight, zero-bloat performance on all WordPress hosting environments.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">WordPress</p>
              <p className="text-xl font-bold text-foreground mt-1">6.0 or higher</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">PHP Version</p>
              <p className="text-xl font-bold text-foreground mt-1">7.4 to 8.3+</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">License</p>
              <p className="text-xl font-bold text-foreground mt-1">GPLv2 or later</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <p className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">Network Footprint</p>
              <p className="text-xl font-bold text-foreground mt-1">0KB on Frontend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Legal & Support Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-display font-bold text-foreground">Plugin Documentation &amp; Policies</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Review our scoped policies or get in touch with the engineering team at <a href="mailto:hello@cylvox.com" className="text-foreground underline">hello@cylvox.com</a>.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products/trust-signal-auditor/terms"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs font-semibold hover:bg-muted transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Terms of Service
            </Link>
            <Link
              href="/products/trust-signal-auditor/privacy"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-xs font-semibold hover:bg-muted transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              Privacy Policy
            </Link>
            {TRUSTLYNE_PLUGIN_URL ? (
              <a href={TRUSTLYNE_PLUGIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity">
                <Download className="w-3.5 h-3.5" />
                Install Trustlyne
              </a>
            ) : (
              <Link href="#interactive-audit" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-muted text-foreground text-xs font-semibold hover:bg-muted/80 transition-opacity">
                Trustlyne coming soon
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
