"use client";  // Add this line at the top

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { recordcount } from '../utils/constants';
import AnimatedSection from '../components/Home/AnimatedSection';
import styles from './RecordSection.module.css'; // Import CSS module

const RecordSection = () => {
  const startCounting = (elementId, end, duration) => {
    const counterElement = document.getElementById(elementId);
    const step = end / (duration / 50);
    let current = 0;

    const intervalId = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(intervalId);
      }
      counterElement.textContent = Math.floor(current) + " +";
    }, 50);
  };

  useEffect(() => {
    const totalDuration = 1500;

    startCounting('counter1', 25, totalDuration);
    startCounting('counter2', 2000, totalDuration);
    startCounting('counter3', 10000, totalDuration);
    startCounting('counter4', 38000, totalDuration);
  }, []);

  return (
    <AnimatedSection id="hero" className="animated-section">
      <section className={styles.statsSection}>
        <Container>
          <Row className={styles.styledRow}>
            {recordcount.map((stat, index) => (
              <Col key={index} xs={12} sm={6} md={3} className={styles.styledCol}>
                <div className={styles.statWrapper}>
                  <div className={styles.iconWrapper}>{stat.icon}</div>
                  <div>
                    <h2 id={`counter${index + 1}`} className={styles.statNumber}>
                      {stat.number}
                    </h2>
                    <p className={styles.statText}>{stat.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </AnimatedSection>
  );
};

export default RecordSection;
