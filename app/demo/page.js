import CalendlyScript from "../components/CalendlyScript";
import styles from "./demo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import industrystyles from "../industries/[slug]/industry.module.css"
import Navigation from "../components/Header/navigation";
import Footer from "../components/Footer";

// Generate Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Book a Demo | TechCloud ERP",
    description:
      "Schedule a live, personalized product demonstration to explore key features, ask questions, and see how TechCloud ERP meets your business needs.",
    keywords: "TechCloud ERP demo, ERP software demo, book a demo, schedule demo",
  };
}

// Generate Static Params (for future expansions)
export function generateStaticParams() {
  return [{ slug: "demo" }];
}

export default function DemoPage() {
  return (
    <>
    <Navigation/>
      <CalendlyScript /> {/* Loads Calendly script separately */}
      
      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col>
              <h1 className={industrystyles.heading}>Book A Demo</h1>
              <p className={industrystyles.description}>
                Scheduling a live, personalized product demonstration allows potential customers to explore key features, ask questions, and see firsthand how the solution can meet their unique needs, helping them make confident, informed purchasing decisions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col>
            <div
              className={`calendly-inline-widget ${styles.calendlyWrapper}`}
              data-url="https://calendly.com/dvignesh-techclouderp/demo"
            ></div>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </>
  );
}
