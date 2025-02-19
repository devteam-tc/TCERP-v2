
import Navigation from '../components/Header/navigation'
import VisionMissionSection from './VisionMissionSection'
import CoFoundersSection from './CoFoundersSection '
import WhyTechCloudERP from './WhyTechCloudERP'
import { Col, Container, Row } from "react-bootstrap";
import ExpertiseSection from './ExpertiseSection'
import Services from './Services'
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import RecordSection from './RecordSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import Script from 'next/script';  // ✅ Use next/script for structured data


export const metadata = {
  title: "About Tech Cloud ERP | Leading Cloud-Based ERP Solutions in India",
  description: "Discover Tech Cloud ERP, a Hyderabad-based company offering scalable and user-friendly cloud ERP solutions to streamline business operations across industries in India.",
  keywords: "ERP software solution in hyderabad, Best ERP Solutions Provider in India, cloud-based ERP solutions provider in India, Manufacturing ERP, Manufacturing Software, Production ERP, Production Software, Manufacturing ERP software,",
};

export default function Page() {
  return (
    <div className="min-h-screen">
    <Navigation />

    {/* ✅ Breadcrumb Schema with next/script */}
    <Script type="application/ld+json" strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 50,
            "name": "About Us",
            "item": "https://techclouderp.com/about-us/"
          }]
        }),
      }}
    />

    <section className={industrystyles.section}>
      <Container>
        <Row>
          <Col md={6}>
            <h2 className={industrystyles.heading}>{aboutus_data.about_content.heading}</h2>
            <div className={industrystyles.divider}></div>
            <p className={industrystyles.description}>{aboutus_data.about_content.description}</p>
          </Col>
        </Row>
      </Container>
    </section>

    <main>
      <VisionMissionSection />
      <ExpertiseSection />
      <WhyTechCloudERP />
      <RecordSection />
      <Services />
      <CoFoundersSection />
      <CTA />
      <OurPartnerSection />
    </main>

    <Footer />
  </div>
  );
}
