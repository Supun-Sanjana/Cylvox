import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, baseUrl } from "@/lib/seo";

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
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema for the article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Cylvox",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema} />
      
      <article className="pt-32 pb-24 min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-white">
        <header className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-3 mb-6">
            <time className="text-sm font-mono text-muted-foreground">{post.date}</time>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black mb-6 leading-tight text-foreground">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>
        
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  );
}
