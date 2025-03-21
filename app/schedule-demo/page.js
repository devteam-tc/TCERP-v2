import CalendlyScript from "../components/CalendlyScript";
import styles from "./demo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import industrystyles from "../industries/[slug]/industry.module.css"
import Navigation from "../components/Header/navigation";
import Footer from "../components/Footer";

// Generate Metadata for SEO
// Generate Metadata for SEO
export async function generateMetadata() {
  return {
    title: "Book a Demo | Tech Cloud ERP",
    description:
      "Schedule a live, personalized demo of TechCloud ERP to explore key features, streamline your business processes, and get expert insights.",
    keywords: [
      "TechCloud ERP demo",
      "ERP software demo",
      "Book a demo",
      "Schedule ERP demo",
      "Cloud ERP demo",
      "Manufacturing ERP demo",
      "Business management software demo",
      "ERP solution consultation",
      "TechCloud live demo",
      "Enterprise software demo"
    ],
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
              data-url="https://calendly.com/padmini-techclouderp/demo"
            ></div>
          </Col>
        </Row>
      </Container>
    <Footer/>
    </>
  );
}
