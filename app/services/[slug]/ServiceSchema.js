"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import metaInfo from "../../utils/metaInfo.json";

export default function ServiceSchema({ slug }) {
  const pathname = usePathname();
  const metadata = metaInfo?.services?.[slug];

  useEffect(() => {
    if (!metadata) return;

    // ✅ Generate JSON-LD Schema
    const schemaData = [];

    if (metadata.faqs?.length) {
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": metadata.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      });
    }

    schemaData.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.techclouderp.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.techclouderp.com/services" },
        { "@type": "ListItem", "position": 3, "name": metadata.title, "item": `https://www.techclouderp.com${pathname}` },
      ],
    });

    schemaData.push({
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
    });

    const structuredData = JSON.stringify(schemaData);

    // ✅ Inject JSON-LD into <head> as <script> tag
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.textContent = structuredData;
    document.head.appendChild(scriptTag);

    return () => {
      if (document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag);
      }
    };
  }, [slug, pathname]);

  return null;
}
