import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import FeaturePage from './FeaturePage';

export const metadata = {
  title: "Smart ERP Features | Streamline Operations with Ease",
  description: "Enhance efficiency with smart ERP features. Automate processes, optimize resources, and streamline operations for seamless business management.",
  keywords: "Cloud ERP Features,Best ERP Software,ERP System for Businesses,Cloud-Based ERP Solutions,ERP Software ModulesERP for Manufacturing, Inventory Management ERP, Finance and Accounting ERP, Production Planning Software,CRM and Sales Management ERP",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.featurescontent.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.featurescontent.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
      <FeaturePage />
        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}