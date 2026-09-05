import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { baseUrl } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical SEO, Automation & Web Engineering Blog | Cylvox",
  description: "In-depth technical articles on Next.js architecture, n8n workflow automation, Core Web Vitals optimization, and structured data implementation.",
  alternates: { canonical: `${baseUrl}/blog` },
  openGraph: {
    title: "Technical SEO, Automation & Web Engineering Blog | Cylvox",
    description: "In-depth technical articles on Next.js architecture, n8n workflow automation, Core Web Vitals optimization, and structured data implementation.",
    url: `${baseUrl}/blog`,
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: `${baseUrl}/og-image.jpg`, width: 1200, height: 630, alt: "Cylvox Engineering Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical SEO, Automation & Web Engineering Blog | Cylvox",
    description: "In-depth technical articles on Next.js architecture, n8n workflow automation, Core Web Vitals optimization, and structured data implementation.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <div className="mb-16 max-w-4xl">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Engineering Log
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Notes on <span className="text-primary">building systems.</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, technical deep dives, and case studies on Next.js, automation, and SEO.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col md:flex-row">
              {post.image && (
                <div className="w-full md:w-2/5 lg:w-1/3 shrink-0 relative aspect-[16/9] md:aspect-auto border-b md:border-b-0 md:border-r border-border overflow-hidden bg-background/50">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <time className="text-xs font-mono text-muted-foreground">{post.date}</time>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-background border border-border text-muted-foreground px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0 z-10"></span>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold">
                  Read Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
