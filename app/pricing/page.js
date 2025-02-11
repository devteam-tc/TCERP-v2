import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import PricingCard from './PricingCard';
import PricingTable from './PricingTable';

export const metadata = {
  title: "About Us - Tech Cloud ERP",
  description: "Learn more about Tech Cloud ERP and our mission.",
  keywords: "About Tech Cloud ERP, ERP Software, Business Management",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.pricingcontent.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.pricingcontent.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
       <PricingCard />
       <PricingTable />
        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}