import Navigation from '../components/Header/navigation'
import { Col, Container, Row } from "react-bootstrap";
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';
import ComparisonTable from './ComparisonTable'

export const metadata = {
  title: "ERP products/ techcloud erp best software company in  india",
  description: "Techcloud erp provide best software solution for manufaturing industries such as CRM, POS, HRM,Accounting Software etc",
  keywords: "erp comparison, erp software comparison,compare erp,choosing the right erp, erp software benefits,choosing the right ERP",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className={industrystyles.section}>
  <Container>
    <Row>
      <Col md={6}>
        <h2 className={industrystyles.heading}>{aboutus_data.productcomparison.heading}</h2>
        <div className={industrystyles.divider}></div>
        <p className={industrystyles.description}>{aboutus_data.productcomparison.description}</p>
      </Col>
    </Row>
  </Container>
</section>
      <main>
        <ComparisonTable />
        <CTA />
        <OurPartnerSection />
        
      </main>
      <Footer />
    </div>
  )
}