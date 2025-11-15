import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import ServicesCTA from "@/components/Services/ServicesCTA";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/services");
const pageTitle = "Enterprise Software Solutions & Services";
const pageDescription =
  "From custom web apps to mobile solutions and cloud infrastructure—we offer the full spectrum of enterprise software services. Each project is tailored to your needs, built to scale, and designed to deliver impact.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "enterprise software solutions",
    "custom software development services",
    "digital transformation services",
    "cloud architecture services",
    "mobile app development services",
    "DevOps services",
    "UI/UX design services",
    "quality assurance services",
    "enterprise integration services",
    "data engineering services",
    "SaaS development",
    "IT consulting services"
  ],
  openGraph: {
    title: `${pageTitle} | Cyber Circus`,
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" }
        ]}
      />
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </>
  );
}

