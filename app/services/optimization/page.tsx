import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Website Performance & SEO Optimization | Cylvox",
  description: "Speed up your website and improve your search rankings. We offer technical SEO, Core Web Vitals optimization, and WordPress speed enhancements.",
};

export default function OptimizationPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Performance & <span className="text-[#ccff00]">SEO Optimization</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
          A slow website costs you customers. We specialize in deep technical optimization, improving Core Web Vitals, enhancing technical SEO, and turbocharging WordPress sites so you rank higher and convert better.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                     px-8 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                     hover:bg-[#a3cc00] transition-all duration-200"
        >
          <span>Get an Optimization Audit</span>
          <ArrowUpRight className="w-5 h-5 stroke-[3]" />
        </Link>
      </div>
    </div>
  );
}
