import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import TermsPage from './TermsPage'

export const metadata = {
  title: "Tech Cloud ERP - Terms and Conditions",
  description: "Review the terms and conditions for using Tech Cloud ERP services, ensuring clarity and transparency in every interaction.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.termsAndConditionscontent.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.termsAndConditionscontent.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
      <TermsPage />
        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}