

import Navigation from "../components/Header/navigation";
import Form from "../contact-us/Form";
import Footer from "../components/Footer";
import MapSection from "./MapSection";
import { Col, Container, Row } from "react-bootstrap";
import industrystyles from "../industries/[slug]/industry.module.css";
import { aboutus_data } from "../utils/constants";

export const metadata = {
  title: "Contact Us | Tech Cloud ERP - Get in Touch",
  description:
    "Contact Tech Cloud ERP for inquiries, support, and business solutions. Reach out to us for the best cloud-based ERP software solutions.",
  keywords: [
    "Tech Cloud ERP",
    "Contact Tech Cloud ERP",
    "ERP Software Support",
    "Cloud ERP Solutions",
    "Best ERP Software",
    "Enterprise Resource Planning",
    "ERP System Inquiry",
    "Tech Cloud Contact",
    "Business Management Software",
    "Cloud ERP Consultation",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Tech Cloud ERP - Get in Touch",
    description:
      "Contact Tech Cloud ERP for inquiries, support, and business solutions. Reach out to us for the best cloud-based ERP software solutions.",
    url: "https://www.techclouderp.com/contact-us",
    type: "website",
    siteName: "Tech Cloud ERP",
  },
  alternates: {
    canonical: "https://www.techclouderp.com/contact-us",
  },
};

// Contact Page Schema Markup
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://www.techclouderp.com/contact-us",
  "about": {
    "@type": "Organization",
    "name": "Tech Cloud ERP",
    "url": "https://techclouderp.com/",
    "logo": "https://techclouderp.com/static/media/tcerplogo.3b11ab040b09729a98e9.webp",
    "description": "Tech Cloud ERP provides cloud-based enterprise resource planning (ERP) solutions to help businesses manage their operations efficiently.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Phase - 2",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "India",
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 8919439603",
        "contactType": "customer service",
        "email": "info@techclouderp.com",
        "availableLanguage": "English",
        "areaServed": "Global",
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91 8919439603",
        "contactType": "sales",
        "email": "info@techclouderp.com",
        "availableLanguage": "English",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Navigation />

      {/* Inject Schema Markup in Head */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
        />
      </head>

      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{aboutus_data.ContactUs_content.heading}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{aboutus_data.ContactUs_content.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <Form />
        <MapSection />
      </main>

      <Footer />
    </>
  );
}
