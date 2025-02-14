// page.js
import ReportingSection from './ReportingSection';  // Correct default import
import Navigation from '../components/Header/navigation';
import Footer from '../components/Footer';
import BusinessSlider from './BusinessSlider';
import { Col, Container, Row } from "react-bootstrap";
import OurPartnerSection from '../components/OurPartnerSection';
import PartnerShipSection from '../components/PartnershipSection'
import TransformingIndustriesSection from './TransformingIndustriesSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import IntroSection from './Introsection';
export const metadata = {
  title: "Tech Cloud ERP | Advanced BI for Smarter Decisions",
  description: "Discover how Tech Cloud ERP's business intelligence tools empower your business with actionable insights. Turn data into your competitive edge today!",
  keywords: "what is business intelligence , business intelligence,top business intelligence software ,ERP and Business Intelligence",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.businessData.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.businessData.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
        <IntroSection />
        <BusinessSlider />
        <ReportingSection /> 
        <TransformingIndustriesSection />
        <OurPartnerSection />
        <PartnerShipSection />
        
      </main>
      <Footer />
    </div>
  )
}
