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
  title: string;
  badge: string;
  icon: LucideIcon;
  text: string;
  link: string;
  /**
   * The raw problems this service exists to remove. Surfaced underneath the
   * hardened card by the cursor scanner on the homepage.
   */
  findings: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Vibe-Coded App Audits",
    badge: "Security & Code",
    icon: ShieldAlert,
    text: "Deep vulnerability scans, logic flaw fixes, auth hardening, and architectural cleanup for apps built with Cursor, v0, Bolt, or Lovable.",
    link: "/services/web-development",
    findings: [
      "Service-role key shipped in the client bundle",
      "Row-level security never enabled on 6 tables",
      "Price and quantity trusted from the request body",
    ],
  },
  {
    number: "02",
    title: "AI Workflows & n8n",
    badge: "Automation",
    icon: Cpu,
    text: "Autonomous n8n pipelines, custom AI agents, and webhook integrations that handle content, leads, and operational tasks 24/7.",
    link: "/services/ai-automation",
    findings: [
      "Four hours a day lost to manual copy-paste",
      "Webhook retries fire twice, duplicating records",
      "No dead-letter queue when a run fails at 3am",
    ],
  },
  {
    number: "03",
    title: "Headless CMS Integration",
    badge: "Sanity & Content",
    icon: Database,
    text: "Structured, editor-friendly content architectures powered by Sanity.io and Next.js for lightning-fast publishing without code updates.",
    link: "/services/web-development",
  },
  {
    number: "04",
    title: "Core Web Vitals & Speed Tuning",
    badge: "Sub-Second LCP",
    icon: Zap,
    text: "Deep frontend remediation, render-blocking JS elimination, edge caching, and guaranteed 90+/95+ PageSpeed Insights and Lighthouse scores.",
    link: "/services/optimization",
  },
  {
    number: "05",
    title: "Technical SEO & Schema Engine",
    badge: "IndexNow & JSON-LD",
    icon: Search,
    text: "Complete 11-phase indexing architecture: automated IndexNow search pings, dynamic XML sitemaps, server-side CMS metadata, and Schema.org rich results.",
    link: "/services/technical-seo",
  },
  {
    number: "06",
    title: "Brand & UI/UX Design",
    badge: "Conversion UI",
    icon: Palette,
    text: "High-end visual design systems, interactive prototypes, and conversion-engineered interfaces built to make brands impossible to ignore.",
    link: "/services/ui-ux-design",
  },
  {
    number: "07",
    title: "Full-Stack Web Engineering",
    badge: "Next.js & React",
    icon: Code2,
    text: "Production-ready, type-safe Next.js applications engineered for high concurrency, robust security, and effortless scalability.",
    link: "/services/web-development",
  },
  {
    number: "08",
    title: "Supabase & Backend Scaling",
    badge: "Postgres & Edge API",
    icon: Server,
    text: "High-concurrency Postgres schema design, database query optimization, automated pagination, and low-latency Serverless Edge infrastructures.",
    link: "/services/web-development",
  },
];
