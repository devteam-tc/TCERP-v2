import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ExpertiseData } from '../utils/constants';

import AnimatedSection from '../components/Home/AnimatedColumn';
import styles from './ExpertiseSection.module.css';

const ExpertiseSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <h2 className={styles.title}>Focused Expertise for Your Business</h2>
        <Row>
          {ExpertiseData.map((item, index) => (
            <Col md={4} key={index}>
              <AnimatedSection className={styles.animatedSection}>
                <div className={styles.cardWrapper}>
                  <div className={styles.iconWrapper}>
                    <item.icon />
                  </div>
                  <h5 style={{ textAlign: 'left' }}>{item.title}</h5>
                  <div className={styles.line}></div>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ExpertiseSection;
