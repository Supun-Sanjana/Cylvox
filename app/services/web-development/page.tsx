import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Next.js & React Web App Development Agency | Cylvox",
  description: "High-performance full-stack web development using modern technologies: Next.js, React, MERN stack, Supabase, Postgres, Java Spring Boot, and more.",
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
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          High-Performance <span className="text-[#ccff00]">Web Development</span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
          We build scalable, fast, and secure digital products. From powerful B2B SaaS platforms to high-converting marketing sites, our engineering team leverages the best tools in the industry to deliver excellence.
        </p>

        <h2 className="text-2xl font-bold mb-6">Our Tech Stack</h2>
        <div className="flex flex-wrap gap-3 mb-16">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white/90">
              {tech}
            </span>
          ))}
        </div>

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
  );
}
