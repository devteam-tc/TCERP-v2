// components/ServicesSection.js
'use client'; // Keep this here for the client-side component

import React, { useState } from 'react';
import { notFound } from "next/navigation";
import { ContentColumn, Description, Divider, Heading, Section } from '../page';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './ServicesSection.module.css';
import metaInfo from "../../utils/metaInfo.json";
import { servicesData } from '../../utils/constants';

// Remove this export from the client component
// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const metadata = metaInfo.services[slug];

//   if (!metadata) {
//     return {
//       title: "Services Not Found",
//       description: "This service page does not exist.",
//       keywords: "not found, service, missing page",
//     };
//   }

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServicesPage({ params }) {
  const { slug } = params;
  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderFAQs = () => {
    return service.faq.map((item, index) => (
      <div key={index} className={styles.faqItem}>
        <div className={styles.questionContainer} onClick={() => toggleFAQ(index)}>
          <h3 className={styles.question}>{item.question}</h3>
          <span className={styles.icon} aria-hidden="true">
            {activeIndex === index ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        {activeIndex === index && item.answer && <p className={styles.answer}>{item.answer}</p>}
      </div>
    ));
  };

  return (
    <>
      <Section>
        <Container>
          <Row>
            <ContentColumn md={6}>
              <Heading>{service.title}</Heading>
              <Divider />
              <Description>{service.description}</Description>
            </ContentColumn>
          </Row>
        </Container>
      </Section>

      <div className={styles.descriptionContainer}>
        <Container>
          <Row className="align-items-center mt-md-5">
            <Col md={6} className="p-4">
              <h2 className={styles.title}>{service.title}</h2>
              {service.servicedescription.map((paragraph, index) => (
                <p key={index} className={styles.text}>{paragraph}</p>
              ))}
            </Col>
            <Col md={6} className="text-center text-md-end p-0">
              <img className={styles.animatedImage} src={service.image} alt={service.altText} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.sectionWrapper}>
        <Container>
          <h2 className="text-center pt-4 pt-md-0">{service.mainTitle}</h2>
          <p className={styles.sectionSubtitle}>{service.sectionSubtitle}</p>
          <Row>
            {service.services.map((srv) => (
              <Col md={6} key={srv.id} className="d-flex">
                <div className={styles.cardWrapper}>
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <img className={styles.cardImage} src={srv.image} alt={srv.title} />
                      <h4 className={styles.cardTitle}>{srv.title}</h4>
                    </div>
                    <p className={styles.cardText}>{srv.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className={styles.faqContainer}>
        <Container>
          <h2>FAQ</h2>
          <h3 className={styles.subtitle}>
            Have any questions? <span>Read popular answers below</span>
          </h3>
          {renderFAQs()}
        </Container>
      </div>
    </>
  );
};
