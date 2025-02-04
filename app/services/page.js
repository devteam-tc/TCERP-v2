import React from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js
import { Container, Row, Col, Button } from "react-bootstrap";
import { servicesContent } from '../utils/constants';
import AnimatedColumn from "../components/Home/AnimatedColumn";
import styles from "../components/Services/ServiceContentSection.module.css"; // Correct the import path
import Navigation from "../components/Header/navigation";

const ServiceContentSection = () => {
  const router = useRouter(); // Use Next.js router

  const handleReadMoreClick = (serviceTitle) => {
    const link = `/services/${serviceTitle.replace(/\s+/g, '-').toLowerCase()}`;
    router.push(link); // Use router.push instead of navigate
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navigation />
      {servicesContent.map((service, index) => (
        <div className={styles.styledContainer} key={index}>
          <Row className="align-items-center">
            <Col md={{ span: 6, order: index % 2 !== 0 ? 2 : 1 }}>
              <AnimatedColumn direction="left">
                <div className={styles.imageWrapper}>
                  <img src={service.imageUrl} alt={service.title} />
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
    </>
  );
};

export default ServiceContentSection;
