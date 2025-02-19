"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import metaInfo from "../../utils/metaInfo.json";

export default function IndustrySchema({ slug }) {
  const pathname = usePathname();
  const metadata = metaInfo.industries[slug];

  useEffect(() => {
    if (!metadata) return;

    // ✅ Generate JSON-LD Schema
    const faqSchema = metadata.faqs?.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": metadata.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
          })),
        }
      : null;

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.techclouderp.com/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.techclouderp.com/industries" },
        { "@type": "ListItem", "position": 3, "name": metadata.title, "item": `https://www.techclouderp.com${pathname}` },
      ],
    };

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": metadata.title,
      "description": metadata.description,
      "image": metadata.imageUrl,
      "author": { "@type": "Organization", "name": "Tech Cloud ERP" },
      "publisher": {
        "@type": "Organization",
        "name": "Tech Cloud ERP",
        "logo": { "@type": "ImageObject", "url": "https://www.techclouderp.com/logo.png" },
      },
      "url": `https://www.techclouderp.com${pathname}`,
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01",
    };

    const structuredData = JSON.stringify([faqSchema, breadcrumbSchema, articleSchema].filter(Boolean));

    // ✅ Inject JSON-LD into <head> as <script> tag
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = structuredData;
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, [slug, pathname]);

  return null;
}
