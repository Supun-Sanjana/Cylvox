import {
  ShieldAlert,
  Cpu,
  Database,
  Zap,
  Search,
  Palette,
  Code2,
  Server,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  badge: string;
  icon: LucideIcon;
  text: string;
  link: string;
  findings: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    id: "technical-seo",
    title: "Technical SEO",
    badge: "Crawlability & Core Web Vitals",
    icon: Search,
    text: "Make every important page fast, crawlable, indexable, and eligible for rich results.",
    link: "/services/technical-seo",
    findings: [
      "Four hours a day lost to manual lead qualification",
      "Endless copy-pasting between CRM and spreadsheets",
      "No dead-letter queue when a manual process fails at 3am",
    ],
  },
  {
    number: "02",
    id: "ai-automation",
    title: "AI Automation",
    badge: "n8n & AI Agents",
    icon: Cpu,
    text: "Automate search operations and repetitive business workflows with dependable AI and API orchestration.",
    link: "/services/ai-automation",
    findings: [
      "Service-role key shipped in the client bundle",
      "Row-level security never enabled on database tables",
      "Slow queries bringing down the entire application",
    ],
  },
  {
    number: "03",
    id: "web-engineering",
    title: "Web Engineering",
    badge: "Next.js & Supabase",
    icon: Code2,
    text: "Build resilient web systems that support technical SEO, performance, and reliable business operations.",
    link: "/services/web-development",
    findings: [
      "LCP at 4.8s on a mid-range device losing customers",
      "Zero structured data, meaning no organic rich results",
      "Unstable API integrations failing silently",
    ],
  },
];
