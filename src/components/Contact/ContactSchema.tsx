"use client";

import Script from "next/script";
import { getContactSchema } from "@/lib/seo";

const ContactSchema = () => {
  const contactSchema = getContactSchema();

  return (
    <Script
      id="contact-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(contactSchema)
      }}
    />
  );
};

export default ContactSchema;

