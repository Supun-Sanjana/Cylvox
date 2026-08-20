import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-[999999] flex justify-center px-4 pt-4 sm:px-8 pointer-events-none animate-navbar-in"
    >
      <div
        className="pointer-events-auto flex items-center justify-between gap-4 w-full max-w-7xl min-h-14
                   px-5 py-2.5 sm:px-6
                   border border-border/50 rounded-full
                   bg-surface/60 backdrop-blur-3xl saturate-150
                   shadow-sm"
        style={{
          WebkitBackdropFilter: "blur(24px)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-display font-black tracking-tight
                     text-foreground flex items-center gap-0.5 shrink-0"
        >
          <span className="text-primary font-black">C</span> YLVOX
        </Link>

        {/* Navigation Links — client component for active state only */}
        <NavLinks />

        <div className="flex items-center gap-4">
          {/* CTA BUTTON — CSS hover/active replaces framer-motion */}
          <div className="hidden sm:flex shrink-0">
            <Link
              href="/#audit"
              className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground font-bold rounded-full
                         text-xs sm:text-sm px-5 py-2 sm:py-2.5
                         shadow-md hover:opacity-90 transition-all duration-200
                         hover:scale-105 active:scale-95"
            >
              <span>Get Automation Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileMenu>
            <NavLinks className="flex flex-col gap-6 text-2xl font-display" />
          </MobileMenu>
        </div>
      </div>
    </nav>
  );
}
