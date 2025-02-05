"use client"; // Ensure this runs on the client side

import React from "react";
import { useRouter } from "next/navigation"; // Next.js router
import { Button, Container, Row, Col } from "react-bootstrap";
import { BsCalendar, BsPeople, BsPerson, BsBriefcase } from "react-icons/bs";
import styles from "../../components/Home/CTA.module.css"; // Import CSS module

const CTA = () => {
  const router = useRouter(); // Initialize router

  const handleDemoClick = () => {
    router.push("/scheduledemo"); // Navigate to demo page
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid="md" className={styles.sectionWrapper}>
      <Row>
        <Col md={8} className={styles.textSection}>
          <h1>Progress Through Partnership</h1>
          <p>
            Our expert team is committed to building tailored solutions that meet your specific needs and budget. With Tech Cloud ERP, you can trust that your construction business is in safe hands.
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
};

export default CTA;
