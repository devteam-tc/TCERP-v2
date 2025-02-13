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
