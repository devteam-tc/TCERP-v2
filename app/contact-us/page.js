import Navigation from '../components/Header/navigation'
import Form from '../contact-us/Form'
import Footer from '../components/Footer';
import MapSection from './MapSection'
import { Col, Container, Row } from "react-bootstrap";
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Head from 'next/head';  // Import Head component for setting meta tags

export default function Page() {
  // Meta information for the page
  const metadata = {
    title: "Expert ERP Solutions Tailored for Your Business",
    description: "Contact Tech Cloud ERP today to learn how our innovative ERP solutions can optimize your business operations. Our expert team is here to support you every step of the way.",
    keywords: "Contact Us ERP",
  };

  return (
    <div className="min-h-screen">
      {/* Set meta tags using Next.js Head component */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
      </Head>

      <Navigation />
      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{aboutus_data.ContactUs_content.heading}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{aboutus_data.ContactUs_content.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <Form />
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}
