"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label="Main navigation"
      className="fixed top-0 inset-x-0 z-[999999] flex justify-center px-4 pt-4 sm:px-8 pointer-events-none"
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

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-semibold max-md:hidden">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-primary drop-shadow-[0_0_8px_rgba(204,255,0,0.3)]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
          className="shrink-0"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-primary text-[#000] font-bold rounded-full
                       text-xs sm:text-sm px-5 py-2 sm:py-2.5
                       shadow-md hover:opacity-90 transition-opacity"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
