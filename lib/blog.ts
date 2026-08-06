export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "Why We Use n8n for High-Concurrency Workflow Automation",
    slug: "why-n8n-for-automation",
    excerpt: "Discover how moving from Zapier to n8n reduced our automation latency by 80% and improved reliability for enterprise clients.",
    content: `
      <h2>The Problem with Traditional iPaaS</h2>
      <p>When you're scaling operations, traditional integration platforms like Zapier or Make.com start to show their limits. Not only do costs scale exponentially with task volume, but the black-box nature of execution means debugging complex data pipelines becomes a nightmare.</p>
      
      <h2>Enter n8n: The Engineer's Automation Tool</h2>
      <p>n8n flips the script by offering a source-available, highly extensible automation engine. Here is why we deploy it for all our clients:</p>
      <ul>
        <li><strong>Fair-code model:</strong> Self-host it for complete data privacy and fixed costs, no matter how many executions you run.</li>
        <li><strong>Code when you need it:</strong> You aren't limited to visual nodes. Write raw JavaScript or execute shell scripts directly in your workflows.</li>
        <li><strong>Version Control:</strong> Workflows are just JSON. You can back them up to GitHub and manage them like real infrastructure.</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>By migrating a recent client's lead enrichment pipeline to a self-hosted n8n instance, we cut their monthly automation overhead by $1,200 while reducing end-to-end latency from 15 seconds to under 2 seconds. In the world of instant sales outreach, those 13 seconds are the difference between a closed deal and a lost lead.</p>
    `,
    date: "2026-08-01",
    author: "Cylvox Solo Studio",
    tags: ["Automation", "n8n", "Engineering"]
  },
  {
    title: "Next.js App Router: Maximizing Technical SEO",
    slug: "nextjs-app-router-seo",
    excerpt: "A deep dive into server components, dynamic metadata, and how we achieve 99/100 Lighthouse scores consistently.",
    content: `
      <h2>The Evolution of Next.js SEO</h2>
      <p>With the introduction of the App Router, Next.js fundamentally changed how we approach technical SEO. Server Components aren't just a performance optimization—they're an SEO superpower.</p>

      <h2>Zero Client-Side JavaScript for Critical Content</h2>
      <p>By utilizing React Server Components (RSC), we can guarantee that all critical content, navigation links, and structured data are shipped in the initial HTML payload. Googlebot doesn't have to wait for JavaScript to execute; the content is just <em>there</em>.</p>
      
      <h2>Dynamic Metadata Generation</h2>
      <p>The <code>generateMetadata</code> API allows us to fetch data from our CMS (like Sanity) and dynamically construct title tags, canonical URLs, and OpenGraph images on the server before the page even reaches the browser. This eliminates the dreaded "metadata flicker" that plagued older SPA architectures.</p>

      <h2>Core Web Vitals as a Ranking Factor</h2>
      <p>We consistently hit 99+ Lighthouse scores by ruthlessly eliminating client-side JavaScript, leveraging Next.js Image optimization, and utilizing aggressive edge caching. When your Time to First Byte (TTFB) is measured in milliseconds, search engines take notice.</p>
    `,
    date: "2026-08-05",
    author: "Cylvox Solo Studio",
    tags: ["Next.js", "SEO", "Performance"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
