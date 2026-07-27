export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.cylvox.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cylvox",
  url: baseUrl,
  logo: `${baseUrl}/logo.svg`,
  description:
    "Cylvox is an independent digital agency building high-performing experiences.",
  sameAs: ["https://www.fiverr.com/devpress_plus"],
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
      "@type": "Organization",
      name: "Cylvox",
      url: baseUrl,
    },
    areaServed: "Worldwide",
    url: `${baseUrl}${path}`,
  };
}
