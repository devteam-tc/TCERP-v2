"use client";

import { Button, Container, Row, Col } from "react-bootstrap";
import { BsCalendar, BsPeople, BsPerson, BsBriefcase } from "react-icons/bs";
import { useRouter } from "next/navigation";
import styles from "./partnership.module.css";

export default function PartnershipSection() {
  const router = useRouter();

  const handleDemoClick = () => {
    router.push("/schedule-demo");
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid="md" className={styles.sectionWrapper}>
      <Row>
        <Col md={8} className={styles.textSection}>
          <h1>Progress Through Partnership</h1>
          <p>
          We offer tailored ERP solutions to improve efficiency, optimize processes, and enhance growth. With Tech Cloud ERP, experience innovation, seamless integration and dedicated support for long-term success.
          </p>
          <Button onClick={handleDemoClick}>Request a demo</Button>
        </Col>
        <Col md={4} className={styles.statsSection}>
          <h2>A Legacy of Innovation with Tech Cloud ERP</h2>
          <ul>
            <li>
              <BsCalendar size={20} /> <span>25+ Years of Experience</span>
            </li>
            <li>
              <BsPeople size={20} /> <span>2,000+ Clients</span>
            </li>
            <li>
              <BsPerson size={20} /> <span>10,000+ Users</span>
            </li>
            <li>
              <BsBriefcase size={20} /> <span>38,000+ Professionals</span>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
