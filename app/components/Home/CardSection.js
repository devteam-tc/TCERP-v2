// components/CardSection.js
"use client"
import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { cardData } from '../../utils/constants';
import AnimatedSection from './AnimatedSection';
import styles from './CardSection.module.css'; // Import the CSS Module

const CardSection = () => {
  const [visiblePlans, setVisiblePlans] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCards = () => {
    setVisiblePlans(isExpanded ? 3 : cardData.normal.length + cardData['Show More'].length);
    setIsExpanded(!isExpanded);
  };

  const moreCardsToShow = [...cardData.normal, ...cardData['Show More']].slice(0, visiblePlans);

  return (
    <div className="my-md-5" style={{ backgroundColor: '#F5FDFF', padding: '60px 0px' }}>
      <h1 className={`${styles.title} text-center pt-4 pt-md-0`}>
        Discover the Advantages of Tech Cloud ERP
      </h1>
      <Container>
        <Row>
          {moreCardsToShow.map((card, index) => (
            <Col md={4} key={index} className="mb-3">
              <AnimatedSection className="animated-section" style={{ height: '100%' }}>
                <div className={styles.cardContainer}>
                  <div className={`${styles.iconWrapper} icon`}>
                    <card.icon />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardText}>{card.text}</p>
                  <ul className={styles.highlightedText}>
                    {card.highlights.map((highlight, i) => (
                      <li key={i} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
        <Button onClick={toggleCards} className={`${styles.styledButton} fw-bold`}>
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      </Container>
    </div>
  );
};

export default CardSection;