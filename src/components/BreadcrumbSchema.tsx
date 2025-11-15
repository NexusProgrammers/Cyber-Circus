"use client";

import Script from "next/script";
import { buildCanonicalUrl } from "@/lib/seo";

type BreadcrumbSchemaProps = {
  items: Array<{
    name: string;
    url: string;
  }>;
};

const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.url)
    }))
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema)
      }}
    />
  );
};

export default BreadcrumbSchema;

