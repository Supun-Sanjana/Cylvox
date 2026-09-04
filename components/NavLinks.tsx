"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

type NavChild = { href: string; label: string; description?: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/services/technical-seo", label: "Technical SEO" },
  { href: "/blog", label: "Blog" },
  { href: "/work", label: "Work" },
  {
    href: "/products",
    label: "Products",
    children: [
      {
        href: "/products/n8n-templates",
        label: "n8n Automation Templates",
        description: "Free & premium workflows for technical SEO.",
      },
      {
        href: "/products/trust-signal-auditor",
        label: "Trustlyne",
        description: "WordPress trust-signal & E-E-A-T plugin.",
      },
    ],
  },
  { href: "/about", label: "About" },
];

type NavGroup = NavItem & { children: NavChild[] };

function hasChildren(item: NavItem): item is NavGroup {
  return Array.isArray(item.children) && item.children.length > 0;
}

export default function NavLinks({ className, mobile = false }: { className?: string; mobile?: boolean }) {
  return (
    <div className={className || "flex gap-6 text-sm font-semibold max-md:hidden"}>
      {NAV_LINKS.map((item) =>
        hasChildren(item) ? (
          mobile ? (
            <MobileProductsGroup key={item.label} item={item} />
          ) : (
            <DesktopDropdown key={item.label} item={item} />
          )
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}

function DesktopDropdown({ item }: { item: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        {item.label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      <div
        role="menu"
        className={`absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/[0.06]
                    bg-[#0a0f14]/95 backdrop-blur-3xl saturate-150 p-2 shadow-xl transition-all duration-150
                    ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        {item.children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-4 py-3 hover:bg-white/5 transition-colors"
          >
            <span className="block text-sm font-semibold text-foreground">{child.label}</span>
            {child.description && (
              <span className="block text-xs text-muted-foreground mt-0.5">{child.description}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileProductsGroup({ item }: { item: NavGroup }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground opacity-60">
        {item.label}
      </span>
      <div className="flex flex-col gap-4 pl-1">
        {item.children.map((child) => (
          <Link key={child.href} href={child.href} className="text-foreground">
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
