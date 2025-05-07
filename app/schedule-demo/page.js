import CalendlyScript from "../components/CalendlyScript";
import styles from "./demo.module.css";
import { Container, Row, Col } from "react-bootstrap";

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
      <CalendlyScript /> {/* Loads Calendly script separately */}
      
      
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
    </>
  );
}
