export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.cylvox.com";

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
  name: "Cylvox",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "Cylvox is an independent solo studio building high-performing experiences.",
  sameAs: ["https://www.fiverr.com/s/R717Am8"],
  areaServed: areaServedSchema,
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cylvox",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/logo.png`,
  description:
    "Cylvox is an independent solo studio building high-performing experiences, scalable web applications, technical SEO, and automated workflows.",
  sameAs: ["https://www.fiverr.com/s/R717Am8"],
  priceRange: "$$",
  areaServed: areaServedSchema,
};

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
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
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: "Cylvox",
      url: baseUrl,
      areaServed: areaServedSchema,
    },
    areaServed: areaServedSchema,
    url: `${baseUrl}${path}`,
  };
}
