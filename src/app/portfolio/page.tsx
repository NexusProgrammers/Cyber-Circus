import BannerSection from "@/components/Portfolio/BannerSection";
import ProjectSection from "@/components/Portfolio/ProjectSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/portfolio");
const pageTitle = "Portfolio | Cyber Circus Enterprise Software Solutions";
const pageDescription =
  "See how we've helped companies transform their operations. Our portfolio showcases real projects—enterprise platforms, mobile apps, and digital transformation initiatives that deliver results.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "cyber circus portfolio",
    "enterprise software solutions",
    "software development projects",
    "digital transformation case studies",
    "custom software examples",
    "technology projects",
    "web development portfolio",
    "mobile app portfolio"
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl
  },
  twitter: {
    title: pageTitle,
    description: pageDescription
  },
  alternates: {
    canonical: pageUrl
  }
});

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" }
        ]}
      />
      <BannerSection />
      <ProjectSection />
    </>
  );
}

