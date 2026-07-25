import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "AI Workflow Automation Agency (n8n) | Cylvox",
  description: "Automate your business processes with custom AI workflows. We build powerful automation pipelines using n8n and modern AI models to save you time.",
};

export default function AIAutomationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          AI & <span className="text-[#ccff00]">Workflow Automation</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
          Stop doing manual data entry. We design and deploy intelligent, custom automation workflows using n8n and advanced AI to connect your apps, streamline operations, and multiply your team's output.
        </p>

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
  );
}
