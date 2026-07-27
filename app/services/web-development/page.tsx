import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata = {
  title: "Next.js & React Web App Development Agency | Cylvox",
  description: "High-performance full-stack web development using modern technologies: Next.js, React, MERN stack, Supabase, Postgres, Java Spring Boot, and more.",
  alternates: { canonical: "/services/web-development" },
};

const TECH_STACK = [
  "Next.js", "React", "Express.js", "MongoDB", "Mongoose ODM", 
  "Supabase", "Prisma ORM", "Java", "Spring Boot", "PostgreSQL", 
  "MySQL", "Postman", "Vercel", "Cloudflare", "WordPress", 
  "Elementor", "NestJS", "AWS", "Docker", "CI/CD", 
  "GitHub Actions", "Tailwind CSS", "SCSS", "TanStack Query (React Query)"
];

export default function WebDevelopmentPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Next.js & React Web App Development",
          description:
            "High-performance full-stack web development using modern technologies: Next.js, React, MERN stack, Supabase, Postgres, Java Spring Boot, and more.",
          path: "/services/web-development",
          serviceType: "Web Application Development",
        })}
      />
      <div className="max-w-4xl">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Web Development" },
          ]}
        />
        <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase bg-[#ccff00]/10 text-[#ccff00] rounded-full border border-[#ccff00]/20">
          Next.js & React Engineering
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          High-Performance <span className="text-[#ccff00]">Web Development</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-16 leading-relaxed max-w-3xl">
          We build scalable, fast, and secure digital products. From powerful B2B SaaS platforms to high-converting marketing sites, our engineering team leverages the best tools in the industry to deliver excellence.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-white/10 pt-12">
          {/* Why You Need This */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> Why You Need This
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Sub-Second Load Times:</strong> Slow apps lose users. We engineer for speed, ensuring your LCP (Largest Contentful Paint) is always in the green, maximizing conversions.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Enterprise Scalability:</strong> Stop worrying about traffic spikes. Our modern stacks (Next.js, Serverless, Edge computing) scale infinitely without breaking a sweat.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Future-Proof Architecture:</strong> We don't use legacy bloated frameworks. You get clean, type-safe, maintainable code that your future developers will thank you for.</p>
              </li>
            </ul>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#ccff00]">/</span> What We Deliver
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Custom Web Applications:</strong> Full-stack MERN & Next.js applications tailored to your exact business logic.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">API & Backend Engineering:</strong> Secure, robust REST and GraphQL APIs using Express.js, NestJS, or Spring Boot.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#ccff00] shrink-0" />
                <p><strong className="text-white">Database Architecture:</strong> Optimized data modeling using PostgreSQL, MongoDB, Prisma, and Supabase.</p>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">Our Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/90 shadow-sm hover:border-[#ccff00]/50 hover:bg-[#ccff00]/5 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>

        <div className="bg-[#ccff00]/5 border border-[#ccff00]/20 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-black mb-4">Ready to build something exceptional?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Stop settling for mediocre web apps. Let's architect a digital system that gives your business an unfair advantage.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-black rounded-full
                       px-8 py-4 shadow-[0_4px_20px_rgba(204,255,0,0.3)]
                       hover:bg-[#a3cc00] transition-all duration-200"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
