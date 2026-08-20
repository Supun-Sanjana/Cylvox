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
    id: "ai-automation",
    title: "AI Automation",
    badge: "n8n & AI Agents",
    icon: Cpu,
    text: "Automate repetitive business workflows with AI, APIs, and intelligent orchestration. Stop manually copying data.",
    link: "/services/ai-automation",
    findings: [
      "Four hours a day lost to manual lead qualification",
      "Endless copy-pasting between CRM and spreadsheets",
      "No dead-letter queue when a manual process fails at 3am",
    ],
  },
  {
    number: "02",
    id: "ai-product-engineering",
    title: "AI Product Engineering",
    badge: "Next.js & Supabase",
    icon: Code2,
    text: "Turn AI prototypes into reliable, production-ready applications. Architecture, authentication, databases, and APIs.",
    link: "/services/web-development",
    findings: [
      "Service-role key shipped in the client bundle",
      "Row-level security never enabled on database tables",
      "Slow queries bringing down the entire application",
    ],
  },
  {
    number: "03",
    id: "systems-optimization",
    title: "AI Systems & Optimization",
    badge: "Security & Performance",
    icon: Zap,
    text: "Improve the systems you've already built. Deep security audits, workflow optimization, and technical SEO scaling.",
    link: "/services/optimization",
    findings: [
      "LCP at 4.8s on a mid-range device losing customers",
      "Zero structured data, meaning no organic rich results",
      "Unstable API integrations failing silently",
    ],
  },
];
