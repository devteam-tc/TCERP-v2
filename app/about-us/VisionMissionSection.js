import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { visionMissionData } from '../utils/constants';
import AnimatedColumn from '../components/Home/AnimatedColumn'; 
import AnimatedSection from '../components/Home/AnimatedSection';
import styles from './VisionMissionSection.module.css'; // Importing the CSS module

const VisionMissionSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6}>
            <AnimatedColumn direction="left">
              <div className={styles.imageContainer}>
                <img src={visionMissionData.image} alt="Vision for Innovation" />
                <div className={styles.orangeBorder} />
              </div>
            </AnimatedColumn>
          </Col>

          {/* Text Section */}
          <Col md={6}>
            <AnimatedColumn direction="right">
              <div className={styles.textContainer}>
                <AnimatedSection id="hero" className="animated-section">
                  <h2 className={styles.title}>{visionMissionData.vision.title}</h2>
                  <p className={styles.text}>{visionMissionData.vision.text}</p>
                </AnimatedSection>

                <h2 className={styles.title}>{visionMissionData.mission.title}</h2>
                <p className={styles.text}>{visionMissionData.mission.text}</p>
              </div>
            </AnimatedColumn>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VisionMissionSection;
