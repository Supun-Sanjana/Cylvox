import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Engineering Blog | Cylvox Solo Studio",
  description: "Insights, tutorials, and case studies on Next.js development, n8n automation, and technical SEO.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Engineering Blog | Cylvox Solo Studio",
    description: "Insights, tutorials, and case studies on Next.js development, n8n automation, and technical SEO.",
    url: "/blog",
    siteName: "Cylvox",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cylvox Engineering Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Cylvox Solo Studio",
    description: "Insights, tutorials, and case studies on Next.js development, n8n automation, and technical SEO.",
    images: ["/og-image.jpg"],
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
      <div className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-foreground">
        <div className="mb-16">
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
            <article key={post.slug} className="group relative bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <time className="text-xs font-mono text-muted-foreground">{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-surface text-muted-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0"></span>
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary text-sm font-bold">
                Read Article <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
