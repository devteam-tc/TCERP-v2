import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { uniquefeaturesdata, aboutus_data } from "../utils/constants";
import styles from "./FeaturePage.module.css";
import AnimatedSection from "../components/Home/AnimatedSection";


export const metadata = {
  title: " Advanced ERP Features for Smarter Business Management",
  description:
    "Enhance business efficiency with powerful ERP features like cloud computing, automation, real-time dashboards, and seamless user collaboration.",
};

const FeaturePage = () => {
  const { heading, description } = aboutus_data.featurescontent;

  return (
    <>
     
      <Container className={styles.container}>
        <Row>
          {uniquefeaturesdata.map((feature, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
            <AnimatedSection>
              <div className={styles.styledCard}>
                <img variant="top" 
                src={feature.image} alt={feature.title}  className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FeaturePage;
