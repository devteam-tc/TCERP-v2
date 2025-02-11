import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { featuresData, aboutus_data } from "../utils/constants";
import styles from "./FeatureCard.module.css";

const FeaturePage = () => {
  const { heading, description } = aboutus_data.featurescontent;

  return (
    <>
     
      <Container className="mt-5">
        <Row>
          <Title className="text-center mt-3 mb-3">Unique Features</Title>
          <p className={styles.subTitle}>
            Tech Cloud ERP offers a cutting-edge solution with seamless integration, 
            intuitive design, and robust real-time analytics. It empowers businesses 
            to streamline operations, enhance productivity, and drive informed decision-making effortlessly.
          </p>
          {featuresData.map((feature, index) => (
            <Col key={index} md={4} className="mb-5">
              <Card className={styles.styledCard}>
                <Card.Img
                  variant="top"
                  src={feature.imgSrc}
                  alt="card__image"
                  className={styles.cardImage}
                />
                <Card.Body className={styles.cardBody}>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default FeaturePage;
