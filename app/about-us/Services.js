import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Services.module.css';
import { cardservicesData } from '../utils/constants';

const Services = () => {
  return (
    <section className={styles.serviceSection}>
      <Container>
        <h2 className={styles.title}>All Your Business Needs</h2>
        <Row className="wrap-service-24">
          {cardservicesData.map((service, index) => (
            <Col xs={6} md={2} key={index} data-aos="fade-up" data-aos-delay="100">
              <Card className={`${styles.serviceCard} mb-4 card-shadow border-0`}>
                <div className={styles.cardHover}>
                  <span className={styles.iconSpan}>
                    <img src={service.imgSrc} alt={service.title} className={styles.iconImage} />
                  </span>
                  <h6 className={styles.serviceTitle}>{service.title}</h6>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
