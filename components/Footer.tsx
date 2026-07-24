import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070913] border-t border-white/10 text-white pt-[clamp(60px,10vw,100px)] overflow-hidden">
      <div className="px-[clamp(24px,8.5vw,140px)] flex flex-col md:flex-row justify-between gap-12 pb-16">
        
        {/* Left: About Paragraph */}
        <div className="max-w-md">
          <h3 className="font-bold text-[#ccff00] mb-4 text-lg">Cylvox.</h3>
          <p className="text-gray-400 leading-relaxed text-[15px] font-medium">
            We are an independent digital agency engineering high-concurrency web systems, autonomous n8n workflows, and brutally effective interfaces that command attention. We don't just build apps; we architect unfair advantages.
          </p>
        </div>

        {/* Right: Links Grid */}
        <div className="grid grid-cols-2 gap-x-[clamp(40px,8vw,80px)] gap-y-8">
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Platforms</h4>
            <ul className="flex flex-col gap-3 text-[14px] font-medium text-gray-400">
              <li>
                <a href="#" className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1 group">
                  Upwork <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1 group">
                  Fiverr <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Socials</h4>
            <ul className="flex flex-col gap-3 text-[14px] font-medium text-gray-400">
              <li>
                <a href="#" className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1 group">
                  X / Twitter <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1 group">
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ccff00] transition-colors inline-flex items-center gap-1 group">
                  GitHub <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Brand Text */}
      <div className="border-t border-white/5 pt-8 overflow-hidden flex flex-col items-center">
        <a href="#top" className="block text-center w-full px-4 hover:opacity-80 transition-opacity">
          <span 
            className="font-[family-name:var(--font-syne)] font-black text-[clamp(60px,18vw,280px)] leading-none tracking-[-0.08em] text-white select-none whitespace-nowrap block w-full"
          >
            CYLVOX<span className="text-[#ccff00]">.</span>
          </span>
        </a>
        
        {/* Copyright Bar */}
        <div className="w-full px-[clamp(24px,8.5vw,140px)] py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-500 border-t border-white/5 mt-8">
          <p>&copy; {new Date().getFullYear()} Cylvox Agency. All rights reserved.</p>
          <p>Designing better ways forward.</p>
        </div>
      </div>
    </footer>
  );
}