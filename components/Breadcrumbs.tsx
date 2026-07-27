import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-1.5 text-xs font-semibold text-gray-500 mb-8"
    >
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="hover:text-[#ccff00] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/70">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="w-3 h-3 text-gray-600" />}
        </span>
      ))}
    </nav>
  );
}
