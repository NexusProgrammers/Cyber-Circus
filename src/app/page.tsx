import Home from "@/components/Home/Home";
import { buildCanonicalUrl, createMetadata } from "@/lib/seo";

const pageUrl = buildCanonicalUrl("/");
const pageTitle = "Enterprise Software Development & Digital Transformation Services";
const pageDescription =
  "Build custom software that transforms how your business operates. Cyber Circus partners with enterprises to create scalable solutions, modernize systems, and deliver technology that drives real results. Let's talk about your project.";

export const metadata = createMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "enterprise software development",
    "custom software solutions",
    "digital transformation services",
    "cloud architecture consulting",
    "SaaS development",
    "web application development",
    "mobile app development",
    "enterprise applications",
    "software engineering services",
    "IT consulting"
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

export default function Page() {
  return <Home />;
}

