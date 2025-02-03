import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ctaData } from '../../utils/constants';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.section}>
      <div 
        className={styles.backgroundImage} 
        style={{ backgroundImage: `url(${ctaData.calltoaction_bg_img})` }} 
      />
      <Container>
        <Row>
          <Col>
            <h2 className={styles.heading}>{ctaData.heading}</h2>
            <p className={styles.text}>{ctaData.description}</p>
            <Button 
              href={ctaData.buttonLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
            >
              {ctaData.buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;