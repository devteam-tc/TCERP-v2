import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/footer';
import PricingCard from './PricingCard';
import PricingTable from './PricingTable';

export const metadata = {
  title: "Choose the right plan for you",
  description: "Compare the pricing and pick the best service plan of techclouerp based on your Business needs!",
  keywords: "software price, erp software price in india, enterprise erp Pricing, erp cost for small businesses,erp subscription plans",
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