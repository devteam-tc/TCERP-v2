"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation"; // Correct import
import { Col, Container, Row } from "react-bootstrap";
import { servicesData } from "../../utils/constants";
import styles from "./ServicePage.module.css";
import Navigation from "../../components/Header/navigation";
import industrystyles from "../../industries/[slug]/industry.module.css";
import Footer from "../../components/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";

const ServicePage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (slug) {
      console.log("Slug:", slug);
      console.log("Available servicesData keys:", Object.keys(servicesData));

      const selectedService = servicesData[slug] || null;
      setService(selectedService);
      setLoading(false);
    }
  }, [slug]);

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

  if (loading) {
    return (
      <Container className="text-center py-5">
        <h2>Loading...</h2>
      </Container>
    );
  }

  if (!service) {
    return (
      <Container className="text-center py-5">
        <h2>Service Not Found</h2>
        <p>The service you're looking for does not exist.</p>
      </Container>
    );
  }

  return (
    <>
      <Navigation />

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
    </>
  );
};

export default ServicePage;
