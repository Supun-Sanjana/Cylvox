export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.cylvox.com";

export function absoluteUrl(path = "/"): string {
  return new URL(path, baseUrl).toString();
}

export const areaServedSchema = [
  {
    "@type": "Country",
    name: "United States",
  },
  {
    "@type": "Country",
    name: "United Kingdom",
  },
  {
    "@type": "Country",
    name: "Australia",
  },
  {
    "@type": "Country",
    name: "Canada",
  },
  {
    "@type": "AdministrativeArea",
    name: "Global",
  },
  {
    "@type": "AdministrativeArea",
    name: "Worldwide",
  },
];

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  name: "Cylvox Solo Studio",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Cylvox is an independent technical SEO studio specializing in crawlability, structured data, Core Web Vitals, and search automation.",
  sameAs: [
    "https://www.fiverr.com/s/R717Am8",
    "https://www.linkedin.com/in/sanjana-supun",
    "https://github.com/Supun-Sanjana",
    "https://www.upwork.com/freelancers/~01070df5b63ecea5bf",
  ],
  knowsAbout: [
    "Technical SEO",
    "Core Web Vitals Optimization",
    "Next.js App Router Architecture",
    "Schema.org Structured Data",
    "IndexNow Search Automation",
    "n8n Workflow Automation",
    "React Server Components",
    "Supabase PostgreSQL",
  ],
  areaServed: areaServedSchema,
  founder: {
    "@type": "Person",
    "@id": `${baseUrl}/about#person`,
    name: "Supun Sanjana",
    url: `${baseUrl}/about`,
    jobTitle: "Lead Web Engineer & Technical SEO Specialist",
    description: "Supun Sanjana is an independent web engineer and technical SEO specialist building high-concurrency websites.",
    sameAs: [
      "https://www.linkedin.com/in/sanjana-supun",
      "https://github.com/Supun-Sanjana",
    ],
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${baseUrl}/#professional-service`,
  name: "Cylvox Solo Studio",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/logo.png`,
  description:
    "Cylvox provides technical SEO architecture, Core Web Vitals optimization, search automation, and high-concurrency web engineering.",
  sameAs: [
    "https://www.fiverr.com/s/R717Am8",
    "https://www.linkedin.com/in/sanjana-supun",
    "https://github.com/Supun-Sanjana",
    "https://www.upwork.com/freelancers/~01070df5b63ecea5bf",
  ],
  knowsAbout: [
    "Technical SEO",
    "Core Web Vitals Optimization",
    "Next.js App Router Architecture",
    "Schema.org Structured Data",
    "IndexNow Search Automation",
    "n8n Workflow Automation",
  ],
  priceRange: "$$",
  areaServed: areaServedSchema,
  founder: {
    "@type": "Person",
    "@id": `${baseUrl}/about#person`,
    name: "Supun Sanjana",
    url: `${baseUrl}/about`,
    jobTitle: "Lead Web Engineer & Technical SEO Specialist",
    description: "Supun Sanjana is an independent web engineer and technical SEO specialist building high-concurrency websites.",
  },
};

type BreadcrumbItem = { name: string; path: string };
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${baseUrl}/#website`,
  url: baseUrl,
  name: "Cylvox",
  description:
    "Technical SEO, Core Web Vitals optimization, structured data, and search automation for complex websites.",
  publisher: {
    "@id": `${baseUrl}/#organization`,
  },
  author: {
    "@type": "Person",
    name: "Supun Sanjana",
    url: `${baseUrl}/about`,
    jobTitle: "Independent Web Engineer",
    description: "Supun Sanjana is an independent web engineer and technical SEO specialist building high-concurrency websites.",
  },
  inLanguage: "en",
};


export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.path || "/")}#breadcrumb`,
    name: "Breadcrumbs",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export function serviceSchema({ name, description, path, serviceType }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    "@id": `${absoluteUrl(path)}#service`,
    url: absoluteUrl(path),
    name,
    description,
    provider: {
      "@id": `${baseUrl}/#professional-service`,
    },
    areaServed: areaServedSchema,
  };
}

type ProductItem = {
  name: string;
  description: string;
  price: string;
  priceCurrency?: string;
};

export function productListSchema(products: ProductItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "n8n Automation Templates by Cylvox",
    description: "Free and premium n8n workflow templates for technical SEO, Core Web Vitals monitoring, and content automation.",
    numberOfItems: products.length,
    itemListElement: products.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        brand: {
          "@type": "Organization",
          name: "Cylvox",
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.priceCurrency || "USD",
          availability: "https://schema.org/InStock",
          url: `${baseUrl}/products/n8n-templates`,
        },
      },
    })),
  };
}

/* ─── FAQ Page Schema (AEO / GEO critical) ─── */

type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/* ─── Article / BlogPosting Schema ─── */

type ArticleSchemaInput = {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  tags?: string[];
};

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  tags,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "TechArticle"],
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    keywords: tags?.join(", "),
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/about#person`,
      name: "Supun Sanjana",
      url: `${baseUrl}/about`,
      jobTitle: "Lead Web Engineer & Technical SEO Specialist",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Cylvox Solo Studio",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`,
    },
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    inLanguage: "en",
  };
}
