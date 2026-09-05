import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, articleSchema, baseUrl } from "@/lib/seo";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} | Cylvox Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: "Cylvox",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      images: [{ url: post.image?.startsWith('http') ? post.image : `${baseUrl}${post.image || '/og-image.jpg'}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image?.startsWith('http') ? post.image : `${baseUrl}${post.image || '/og-image.jpg'}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Use the new articleSchema helper
  const schema = articleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.date,
    dateModified: post.dateModified,
    tags: post.tags,
  });

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={schema} />
      
      <article className="pt-32 pb-16 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-foreground">
        <header className="mb-10 border-b border-border pb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <time className="text-sm font-mono text-muted-foreground">{post.date}</time>
            {post.readingTime && (
              <>
                <span className="text-muted-foreground/30">•</span>
                <span className="text-sm font-mono text-muted-foreground">{post.readingTime}</span>
              </>
            )}
            <div className="flex gap-2 ml-auto flex-wrap">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-surface text-muted-foreground px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black mb-6 leading-tight text-foreground">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          {/* Author Byline (EEAT) */}
          <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20 shrink-0">
              SS
            </div>
            <div>
              <div className="font-bold text-foreground text-sm">
                Written by <Link href="/about" className="hover:text-primary transition-colors">Supun Sanjana</Link>
              </div>
              <div className="text-xs text-muted-foreground">
                Lead Web Engineer & Technical SEO Specialist
              </div>
            </div>
          </div>
        </header>

        {post.image && (
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-border mb-16 shadow-2xl bg-surface">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority 
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        )}
        
        <div 
          className="mx-auto max-w-3xl prose prose-invert prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-pre:bg-surface prose-pre:border prose-pre:border-border prose-table:w-full prose-table:border-collapse prose-th:border prose-th:border-border prose-th:bg-surface prose-th:p-3 prose-td:border prose-td:border-border prose-td:p-3"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Contextual CTA */}
        <div className="mt-16 mx-auto max-w-3xl bg-gradient-to-br from-[#ccff00]/10 to-transparent border border-[#ccff00]/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-display font-bold mb-3 text-foreground">Need this implemented?</h3>
          <p className="text-muted-foreground mb-6">
            Stop losing traffic to poor site architecture. We engineer Next.js websites that dominate search results.
          </p>
          <Link
            href="/services/technical-seo"
            className="inline-flex items-center gap-2 bg-[#ccff00] text-[#09080e] font-bold rounded-full px-6 py-3 hover:bg-[#a3cc00] transition-colors"
          >
            <span>View Technical SEO Services</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      <div className="border-t border-border bg-surface/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-8 text-foreground uppercase tracking-widest text-sm">Related Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {relatedPosts.map((rp) => (
              <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group flex flex-col sm:flex-row bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors overflow-hidden h-full">
                {rp.image && (
                  <div className="relative w-full sm:w-2/5 aspect-[16/9] sm:aspect-auto border-b sm:border-b-0 sm:border-r border-border bg-surface shrink-0">
                    <Image 
                      src={rp.image} 
                      alt={rp.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      sizes="(max-width: 640px) 100vw, 400px"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col justify-center">
                  <div className="text-xs font-mono text-muted-foreground mb-2">{rp.date}</div>
                  <h4 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {rp.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">{rp.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
