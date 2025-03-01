import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/footer';
import PrivacyPage from './PrivacyPage'

export const metadata = {
  title: "Tech Cloud ERP - Privacy Policy",
  description: "Understand how Tech Cloud ERP safeguards your data and ensures your privacy through transparent practices and secure systems.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.privacypolicycontent.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.privacypolicycontent.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
    <PrivacyPage />
        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}