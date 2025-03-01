"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ServicePage.module.css";
import Navigation from "../../components/Header/navigation";
import industrystyles from "../../industries/[slug]/industry.module.css";
import Footer from "../../components/footer";
import { FaPlus, FaMinus } from "react-icons/fa";
import ServiceSchema from "./ServiceSchema";

const ServicePage = ({ service }) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);
// Function to generate FAQ structured data
const generateFAQSchema = (faqs) => {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
};
  const handleReadMoreClick = (serviceTitle) => {
    const link = `/services/${serviceTitle.replace(/\s+/g, "-").toLowerCase()}`;
    router.push(link);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqSchema = generateFAQSchema(service.faqs); // Assuming FAQs are inside `data.faqs`
  // const breadcrumbSchema = generateBreadcrumbSchema(slug, data.heading);
  // const articleSchema = generateArticleSchema(data.heading, data.description, data.top_img, slug);
  return (
    <>
      <Navigation />
      <ServiceSchema  />
      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{service.title}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{service.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className={styles.descriptionContainer}>
        <Container>
          <Row className="align-items-center mt-md-5">
            <Col md={6} className="p-4">
              <h3 className={styles.title}>{service.title}</h3>
              {service.servicedescription?.map((paragraph, index) => (
                <p key={index} className={styles.text}>
                  {paragraph}
                </p>
              ))}
            </Col>
            <Col md={6} className="text-center text-md-end p-0">
              <img
                src={service.image}
                alt={service.altText}
                className={styles.animatedImage}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {service.services?.length > 0 && (
        <section className={styles.sectionWrapper}>
          <Container>
            <h3 className={styles.mainTitle}>{service.mainTitle}</h3>
            <p className={styles.sectionSubtitle}>{service.sectionSubtitle}</p>
            <Row>
              {service.services.map((srv, index) => (
                <Col md={6} key={index}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.cardHeader}>
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className={styles.cardImage}
                      />
                      <h4 className={styles.cardTitle}>{srv.title}</h4>
                    </div>
                    <p className={styles.cardText}>{srv.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {service.faq?.length > 0 && (
        <div className={styles.FAQContainer}>
          <Container>
            <h1 className={styles.Title}>FAQ</h1>
            <h2 className={styles.Subtitle}>
              Have any questions? <span className={styles.spanpara} >Read popular answers below</span>
            </h2>
            {service.faq.map((item, index) => (
              <div key={index} className={styles.FAQItem}>
                <div
                  className={styles.QuestionContainer}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={styles.Question}>{item.question}</span>
                  <span className={`${styles.Icon} ${activeIndex === index ? styles.Open : ""}`}>
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                {activeIndex === index && <p className={styles.Answer}>{item.answer}</p>}
              </div>
            ))}
          </Container>
        </div>
      )}

      <Footer />
       {/* Inject Structured Data */}
  {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {/* {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />} */}
      {/* {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />} */}
    </>
  );
};

export default ServicePage;
