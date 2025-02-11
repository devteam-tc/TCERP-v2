import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from './PricingCard.module.css';
import { pricingDataContent } from '../utils/constants';

const PricingCard = () => {
  return (
    <section className={styles.pricingSection + ' mt-3 mb-3'}>
      <Container>
        <div className={styles.title}>
          <span className={styles.subTitle}>Discover Our Tailored Pricing Sheet</span>
        </div>
        <Row>
          {pricingDataContent?.modules?.length ? (
            pricingDataContent.modules.map((module, index) => (
              <Col lg={6} key={index} className="mt-3 mb-3">
                <div className={styles.pricingItem}>
                  <h4 className={styles.titleHeading}>{module.title}</h4>
                  <ul className={styles.pricingList}>
                    {module.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <Button href="/pricing" className={styles.styledButton}>
                    Choose Package <i className="fas fa-angle-double-right"></i>
                  </Button>
                </div>
              </Col>
            ))
          ) : (
            <p>No pricing data available at the moment.</p>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default PricingCard;
