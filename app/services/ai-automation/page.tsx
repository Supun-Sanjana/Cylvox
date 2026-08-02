import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = {
  title: "AI Workflow Automation Solo Studio (n8n) | Cylvox",
  description: "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
  alternates: { canonical: "/services/ai-automation" },
};

export default function AIAutomationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
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
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
          Intelligent Operations
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          AI & <span className="text-[#ccff00]">Workflow Automation</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-3xl">
          Stop doing manual data entry. We design and deploy intelligent, custom automation workflows using n8n and advanced AI to connect your apps, streamline operations, and multiply your team's output.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> Why You Need This
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Reclaim Hundreds of Hours:</strong> Manual copying and pasting between CRMs, emails, and spreadsheets drains your team. Automation handles the busywork so you can focus on strategy.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Eliminate Human Error:</strong> AI pipelines execute tasks the exact same way every single time, ensuring pristine data integrity across your entire software stack.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Scale Without Hiring:</strong> Need to handle 10x the leads? An automated AI workflow scales instantly without the overhead of recruiting and training new staff.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> What We Deliver
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">n8n Custom Pipelines:</strong> We build robust, self-hosted or cloud-based n8n workflows that connect disparate APIs and SaaS tools effortlessly.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">AI Agent Integrations:</strong> Integrating OpenAI, Claude, or local LLMs directly into your workflows to draft emails, summarize documents, or classify inbound leads.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Automated Lead Nurturing:</strong> Complex sequences that instantly respond to forms, enrich lead data via APIs, and update your CRM automatically.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to automate your operations?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Discover how custom AI workflows can cut your operational costs and dramatically improve your team's efficiency.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                       px-8 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                       hover:bg-[#a3cc00] transition-all duration-200"
          >
            <span>Automate Your Business</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
