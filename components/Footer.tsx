import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border text-foreground pt-20 sm:pt-28 overflow-hidden">
      <div className="px-4 sm:px-8 mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12 pb-16">
        
        {/* Left: About Paragraph */}
        <div className="max-w-md">
          <h3 className="font-display font-bold text-primary mb-4 text-xl">Cylvox.</h3>
          <p className="text-muted-foreground leading-relaxed text-sm font-medium">
            An independent solo studio engineering high-concurrency web systems, autonomous n8n workflows, and interfaces that command attention. We don't just build apps; we architect unfair advantages.
          </p>
        </div>

        {/* Right: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 sm:gap-x-20 gap-y-8">
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Platforms</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li>
                <span className="text-muted-foreground/50 inline-flex items-center gap-1 cursor-default">
                  Upwork <span className="text-[10px] text-muted-foreground/30 ml-1">(soon)</span>
                </span>
              </li>
              <li>
                <a href="https://www.fiverr.com/s/R717Am8" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  Fiverr <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-wider">Socials</h4>
            <ul className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
              <li>
                <span className="text-muted-foreground/50 inline-flex items-center gap-1 cursor-default">
                  X / Twitter <span className="text-[10px] text-muted-foreground/30 ml-1">(soon)</span>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground/50 inline-flex items-center gap-1 cursor-default">
                  LinkedIn <span className="text-[10px] text-muted-foreground/30 ml-1">(soon)</span>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground/50 inline-flex items-center gap-1 cursor-default">
                  GitHub <span className="text-[10px] text-muted-foreground/30 ml-1">(soon)</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Brand Text */}
      <div className="border-t border-border pt-8 overflow-hidden flex flex-col items-center">
        <a href="#top" className="block text-center w-full px-4 hover:opacity-80 transition-opacity">
          <span 
            className="font-display font-black text-[clamp(60px,18vw,280px)] leading-none tracking-tight text-foreground select-none whitespace-nowrap block w-full"
          >
            CYLVOX<span className="text-primary">.</span>
          </span>
        </a>
        
        {/* Copyright Bar */}
        <div className="w-full px-4 sm:px-8 mx-auto max-w-7xl py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-muted-foreground border-t border-border mt-8">
          <p>&copy; {new Date().getFullYear()} Cylvox Solo Studio. All rights reserved.</p>
          <p>Digital systems that move.</p>
        </div>
      </div>
    </footer>
  );
}