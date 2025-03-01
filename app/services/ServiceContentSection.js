"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { servicesContent } from "../utils/constants";
import AnimatedColumn from "../components/Home/AnimatedColumn";
import styles from "./ServiceContentSection.module.css";
import Navigation from "../components/Header/navigation";
import industryStyles from "../industries/[slug]/industry.module.css";
import { aboutus_data } from "../utils/constants";
import Footer from "../components/footer";
import PartnershipSection from "../components/PartnershipSection";

const ServiceContentSection = () => {
  const router = useRouter();

  const handleReadMoreClick = (serviceTitle) => {
    const link = `/services/${serviceTitle.replace(/\s+/g, "-").toLowerCase()}`;
    router.push(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navigation />
      <section className={industryStyles.section}>
        <div className="container">
          <h2 className={industryStyles.heading}>{aboutus_data.allservices.heading}</h2>
          <div className={industryStyles.divider}></div>
          <p className={industryStyles.description}>{aboutus_data.allservices.description}</p>
        </div>
      </section>
      <Container className={styles.container}>
        {servicesContent.map((service, index) => (
          <div key={index} className={styles.styledContainer}>
            <Row className="align-items-center">
              <Col md={{ span: 6, order: index % 2 !== 0 ? 2 : 1 }}>
                <AnimatedColumn direction="left">
                  <div className={styles.imageWrapper}>
                    <img src={service.imageUrl} alt={service.title} className={styles.image} />
                  </div>
                </AnimatedColumn>
              </Col>
              <Col md={{ span: 6, order: index % 2 !== 0 ? 1 : 2 }}>
                <AnimatedColumn direction="right">
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>{service.title}</h2>
                    <p className={styles.description}>{service.description1}</p>
                    <p className={styles.description}>{service.description2}</p>
                    <Button 
                      className={styles.styledButton} 
                      onClick={() => handleReadMoreClick(service.title)}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                </AnimatedColumn>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
      <PartnershipSection />
      <Footer/>
    </>
  );
};

export default ServiceContentSection;