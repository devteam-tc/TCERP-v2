import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { featuresData, aboutus_data } from "../utils/constants";
import styles from "./FeaturePage.module.css";
import AnimatedSection from "../components/Home/AnimatedSection";

const FeaturePage = () => {
  const { heading, description } = aboutus_data.featurescontent;

  return (
    <>
     
      <Container className="mt-5">
        <Row>
          <h3 className={styles.title}>Unique Features</h3>

          <p className={styles.subTitle}>
            Tech Cloud ERP offers a cutting-edge solution with seamless integration, 
            intuitive design, and robust real-time analytics. It empowers businesses 
            to streamline operations, enhance productivity, and drive informed decision-making effortlessly.
          </p>
          {featuresData.map((feature, index) => (
          

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
