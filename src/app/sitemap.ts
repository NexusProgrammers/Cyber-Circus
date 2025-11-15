import type { MetadataRoute } from "next";
import { buildCanonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";
export const revalidate = 3600;

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/career", priority: 0.7, changeFrequency: "weekly" as const }
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDate = new Date();
  const lastModified = baseDate.toISOString();

  return routes.map((route) => ({
    url: buildCanonicalUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}

