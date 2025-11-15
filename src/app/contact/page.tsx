import BannerSection from "@/components/Contact/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import ContactSchema from "@/components/Contact/ContactSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/contact");
const pageTitle = "Contact Cyber Circus | Enterprise Software Development Partner";
const pageDescription =
  "Ready to start your next project? Get in touch with Cyber Circus to discuss your software needs. We'll help you understand your options and create a plan that fits your goals and budget.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "contact cyber circus",
    "software development services",
    "enterprise software consulting",
    "digital transformation consulting",
    "technology consulting",
    "schedule consultation",
    "software development contact",
    "IT consulting contact"
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

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
      />
      <BannerSection />
      <ContactSection />
      <ContactSchema />
    </>
  );
}

