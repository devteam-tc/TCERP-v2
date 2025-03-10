import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import  WorldMapWithMarkers from './WorldMapWithMarkers' 

export const metadata = {
  title: "Tech Cloud ERP | Serving Businesses Across Regions",
  description: "Tech Cloud ERP ensures seamless business operations across regions with our advanced, cloud-based ERP solutions. Optimize efficiency and scale effortlessly.",
  keywords: "tech cloud erp locations, erp software branches, tech cloud erp offices, erp solutions near me, global erp service providers, erp company branches, cloud erp service locations, best erp providers worldwide, tech cloud erp support centre's  , erp software dealers and partners",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.OurBranches.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.OurBranches.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
      <WorldMapWithMarkers />

        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}