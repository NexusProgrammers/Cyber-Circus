import BannerSection from "@/components/About/BannerSection";
import TransformIdeasIntoReality from "@/components/About/TransformIdeasIntoReality";
import ValuesSection from "@/components/About/ValuesSection";
import ContactSection from "@/components/About/ContactSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/about");
const pageTitle = "About Cyber Circus | Enterprise Software Development Experts";
const pageDescription =
  "Learn how Cyber Circus became a trusted partner for businesses seeking better software. We build solutions that teams actually use, solve real problems, and deliver the kind of results that matter.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "about cyber circus",
    "software development company",
    "enterprise software developers",
    "technology consulting company",
    "digital transformation company",
    "custom software solutions",
    "software engineering team",
    "IT consulting services"
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

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" }
        ]}
      />
      <BannerSection />
      <TransformIdeasIntoReality />
      <ValuesSection />
      <ContactSection />
    </>
  );
}

