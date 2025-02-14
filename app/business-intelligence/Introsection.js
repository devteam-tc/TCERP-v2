import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimatedColumn from '../components/Home/AnimatedColumn';
import styles from './IntroSection.module.css'; 
import { BiIntroContent } from '../utils/constants'; // Import from constant.js

const IntroSection = () => {
  const { imageSrc, title, description } = BiIntroContent; 

  return (
    <Container className={styles.whyTechCloudERPContainer}>
      <Row className="align-items-center">
        {/* Image Section */}
        <Col md={6}>
          <AnimatedColumn direction="left">
            <div className={styles.imageContainer}>
              <img src={imageSrc} alt={title} />
            </div>
          </AnimatedColumn>
        </Col>

        {/* Text Section */}
        <Col md={6}>
          <AnimatedColumn direction="right">
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{title}</h2>

              {description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </AnimatedColumn>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroSection;
