import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { InteractiveSkewText } from "./InteractiveSkewText";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-foreground pt-20 sm:pt-28 overflow-hidden">
      <div className="px-4 sm:px-8 mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12 pb-16">
        
        {/* Left: About Paragraph */}
        <div className="max-w-sm">
          <h3 className="font-display font-bold text-primary mb-4 text-xl">Cylvox.</h3>
          <p className="text-muted-foreground leading-relaxed text-sm font-medium">
            An independent solo studio specialising in Technical SEO, high-concurrency web engineering, and autonomous n8n workflows. We architect unfair advantages — from page-speed to page one.
          </p>
        </div>

        {/* Right: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 sm:gap-x-14 gap-y-8">
          
          {/* Services — most important for SEO */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li><Link href="/services/technical-seo" className="hover:text-primary transition-colors">Technical SEO</Link></li>
              <li><Link href="/services/optimization" className="hover:text-primary transition-colors">Core Web Vitals</Link></li>
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Web Engineering</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-primary transition-colors">n8n Automation</Link></li>
              <li><Link href="/services/web-development" className="hover:text-primary transition-colors">Security Audits</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li><Link href="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/agency-partners" className="hover:text-primary transition-colors">Agency Partners</Link></li>
              <li><Link href="/trust-signal-auditor" className="hover:text-primary transition-colors">Trust Signal Auditor</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Platforms</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li>
                <a href="https://www.upwork.com/freelancers/~01070df5b63ecea5bf?mp_source=share" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Upwork <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/s/R717Am8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Fiverr <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Socials</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li>
                <span className="text-muted-foreground/50 inline-flex items-center gap-1 cursor-default">
                  X / Twitter <span className="text-[10px] text-muted-foreground/30 ml-1">(soon)</span>
                </span>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sanjana-supun" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  LinkedIn <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Supun-Sanjana" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  GitHub <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Massive Brand Text */}
      <div className="border-t border-border pt-8 overflow-hidden flex flex-col items-center">
        <InteractiveSkewText />
        
        {/* Copyright Bar */}
        <div className="w-full px-4 sm:px-8 mx-auto max-w-7xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-muted-foreground border-t border-border mt-8">
          <p>&copy; {new Date().getFullYear()} Cylvox Solo Studio. All rights reserved.</p>
          <p>Technical SEO &amp; Web Engineering.</p>
        </div>
      </div>
    </footer>
  );
}