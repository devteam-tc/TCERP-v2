"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SchemaMarkup = () => {
  const pathname = usePathname();
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    if (!pathname.startsWith("/industries/")) return;

    const slug = pathname.split("/").pop();

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What is ERP for ${slug.replace(/-/g, " ")}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `ERP for ${slug.replace(/-/g, " ")} helps streamline business processes and improve efficiency.`,
          },
        },
        {
          "@type": "Question",
          "name": "Why choose Tech Cloud ERP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tech Cloud ERP provides a scalable and user-friendly ERP solution tailored to your industry.",
          },
        },
      ],
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.techclouderp.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://www.techclouderp.com/industries/",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": slug.replace(/-/g, " ").toUpperCase(),
          "item": `https://www.techclouderp.com/industries/${slug}/`,
        },
      ],
    };

    // Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": `Best ERP Software for ${slug.replace(/-/g, " ")}`,
      "description": `Discover the benefits of using Tech Cloud ERP for ${slug.replace(/-/g, " ")} businesses.`,
      "url": `https://www.techclouderp.com/industries/${slug}/`,
      "image": "https://www.techclouderp.com/industry-image.webp",
      "author": {
        "@type": "Organization",
        "name": "Tech Cloud ERP",
        "url": "https://www.techclouderp.com/",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Tech Cloud ERP",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.techclouderp.com/logo.webp",
        },
      },
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
    };

    setSchema([faqSchema, breadcrumbSchema, articleSchema]);
  }, [pathname]);

  if (!schema) return null;

  return schema.map((data, index) => (
    <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  ));
};

export default SchemaMarkup;
