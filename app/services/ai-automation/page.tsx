import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { baseUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation Solo Studio (n8n) | Cylvox",
  description: "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
  alternates: { canonical: `${baseUrl}/services/ai-automation` },
  openGraph: {
    title: "AI Workflow Automation Solo Studio (n8n) | Cylvox",
    description: "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
    url: `${baseUrl}/services/ai-automation`,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Cylvox AI Automation Services" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "AI Workflow Automation Solo Studio (n8n) | Cylvox",
    description: "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function AIAutomationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AI & Workflow Automation", path: "/services/ai-automation" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "AI & Workflow Automation (n8n)",
          description:
            "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
          path: "/services/ai-automation",
          serviceType: "Business Process Automation",
        })}
      />
      <div className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "AI Automation" },
          ]}
        />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-foreground bg-surface rounded-full border border-border shadow-sm mb-8">
          Intelligent Operations
        </div>
        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight leading-[1.05]">
          AI & <em className="text-primary not-italic">Workflow Automation</em>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-16 leading-relaxed">
          Stop doing manual data entry. We design and deploy intelligent, custom automation workflows using n8n and advanced AI to connect your apps, streamline operations, and multiply your team's output.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-border pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">Why You Need This
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Reclaim Hundreds of Hours:</strong> Manual copying and pasting between CRMs, emails, and spreadsheets drains your team. Automation handles the busywork so you can focus on strategy.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Eliminate Human Error:</strong> AI pipelines execute tasks the exact same way every single time, ensuring pristine data integrity across your entire software stack.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Scale Without Hiring:</strong> Need to handle 10x the leads? An automated AI workflow scales instantly without the overhead of recruiting and training new staff.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-3xl font-display font-semibold mb-6 text-foreground flex items-center gap-2">What We Deliver
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">n8n Custom Pipelines:</strong> We build robust, self-hosted or cloud-based n8n workflows that connect disparate APIs and SaaS tools effortlessly.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">AI Agent Integrations:</strong> Integrating OpenAI, Claude, or local LLMs directly into your workflows to draft emails, summarize documents, or classify inbound leads.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p><strong className="text-foreground">Automated Lead Nurturing:</strong> Complex sequences that instantly respond to forms, enrich lead data via APIs, and update your CRM automatically.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-[2.5rem] p-10 md:p-16 text-center shadow-sm">
          <h3 className="text-4xl font-display tracking-tight mb-4 text-foreground">Ready to automate your operations?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Discover how custom AI workflows can cut your operational costs and dramatically improve your team's efficiency.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full
                       px-8 py-4 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span>Automate Your Business</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
