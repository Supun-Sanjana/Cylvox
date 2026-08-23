

import Link from "next/link";


export const NAV_LINKS = [
  { href: "/services/technical-seo", label: "Technical SEO" },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function NavLinks({ className }: { className?: string }) {
  return (
    <div className={className || "flex gap-8 text-sm font-semibold max-md:hidden"}>
      {NAV_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
          {label}
        </Link>
      ))}
    </div>
  );
}
