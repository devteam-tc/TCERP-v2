import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ReportingSection.module.css";
import { ReportingSectionContent } from "../utils/constants";

const ReportingSection = () => {
  const { subText, items, imageSrc, imageAlt } = ReportingSectionContent;

  return (
    <Container className="pt-5 pb-5">
      <Row className="mt-3 mb-3">
        {/* Left side: Text */}
        <Col md={6} className={styles.textCol}>
          <h2 className={styles.title}>Upgrade your Reporting</h2>
          <p className={styles.subText}>{subText}</p>

          {items.map((item, index) => (
            <div key={index}>
              <h4 className={styles.highlightText}>{item.title}</h4>
              <p className={styles.subText}>{item.description}</p>
            </div>
          ))}
        </Col>

        {/* Right side: Image */}
        <Col md={6} className={styles.imageCol}>
          <img src={imageSrc} alt={imageAlt} className={styles.image} />
        </Col>
      </Row>
    </Container>
  );
};

export default ReportingSection;
