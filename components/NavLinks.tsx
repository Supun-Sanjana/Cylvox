

import Link from "next/link";


const NAV_LINKS = [
  { href: "/case-studies", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/agency-partners", label: "Agency Partners" },
  { href: "/trust-signal-auditor", label: "Trust Signal Auditor" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-8 text-sm font-semibold max-md:hidden">
      {NAV_LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
          {label}
        </Link>
      ))}
    </div>
  );
}
