// app/products/[slug]/ProductPage.js

'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import { productData } from '../../utils/constants';
import { BsCheckCircle } from 'react-icons/bs';
import OurPartnerSection from '../../components/OurPartnerSection';
import Typewriter from 'typewriter-effect';
import AnimatedColumn from '../../components/Home/AnimatedColumn';
import AnimatedSection from '../../components/Home/AnimatedSection';
import styles from './ProductPage.module.css';
import industryStyles from '../../industries/[slug]/industry.module.css';
import Navigation from '../../components/Header/navigation';
import Footer from '../../components/footer';

const TabContent = ({ content, image, alt }) => {
  const contentArray = Array.isArray(content) ? content : [];


  return (
    <div className={styles.tabContent}>
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4">
          {contentArray.map((item, index) => (
            <div key={index} className="mb-4">
              <div className='w-100'>
              <p>
                <span className="fw-bold">{item.title}</span> {item.description}
              </p>
            </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img
            src={image || '/default-image.png'}
            alt={alt || 'Default alt text'}
            className={`rounded-md img-fluid ${styles.tabImage}`}
          />
        </div>
      </div>
    </div>
  );
};
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
const ProductPage = () => {
  const { slug } = useParams();
  const product = productData[slug] || {
    heading: 'Product Not Found',
    description: 'The product you are looking for does not exist.',
    tabsHeadings: {},
    tabData: {},
  };

  const firstTab = Object.keys(product.tabsHeadings)[0];
  const [activeTab, setActiveTab] = useState(firstTab);

  useEffect(() => {
    if (!activeTab || !product.tabsHeadings[activeTab]) {
      setActiveTab(firstTab);
    }
  }, [activeTab, product.tabsHeadings, firstTab]);

  const tabContent = product.tabData[activeTab] || { content: [], image: '/default-image.png', alt: 'Default image' };

  const faqSchema = generateFAQSchema(product.faqs); // Assuming FAQs are inside `data.faqs`
  // const breadcrumbSchema = generateBreadcrumbSchema(slug, data.heading);
  // const articleSchema = generateArticleSchema(data.heading, data.description, data.top_img, slug);

  return (
    <>
    <Navigation/>
      <section className={industryStyles.section}>
        <div className="container">
          <AnimatedColumn direction="left">
            <div>
            <h2 className={industryStyles.heading}>
                <Typewriter
                  options={{
                    strings: [product.heading],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h2>
              {/* <h2 className={industryStyles.heading}>{product.heading}</h2> */}
              <div className={industryStyles.divider}></div>
              <p className={industryStyles.description}>{product.description}</p>
            </div>
          </AnimatedColumn>
        </div>
      </section>
      <div className={styles.whyContainer}>
        <Container>
        <Row className="align-items-center">
          <Col md={6}  className="pl-6rem">
            <AnimatedColumn direction="left">
              <div className={styles.imageContainer}>
                <img src={product.imageSrc} alt={product.imageAlt} />
              </div>
            </AnimatedColumn>
          </Col>
          <Col md={6} className="pr-6rem" >
            <AnimatedColumn direction="right" >
              <div className={styles.textContainer}>
              <h1 className={styles.productTitle}>{product.title }</h1>
              {product.productDescription.map((paragraph, index) => (
                  <p className={styles.productPara} key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimatedColumn>
          </Col>
        </Row>
        </Container>
      </div>
      <div className={styles.bodySection}>
        <Container className="my-2">
        <h1 className={styles.mainTitle}>{product.mainTitle}</h1>
        <Row>
            {product.cards.map((card, index) => (
              <Col md={6} lg={4} key={index} className="mb-4 d-flex">
                <AnimatedSection>
                  <div className={styles.cardContainer}>
                    <div className={styles.cardTitleContainer}>
                      {card.image && <img src={card.image} alt={card.title} className={styles.cardImage} />}
                    </div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardText}>{card.text}</p>
                    <ul className={styles.cardList}>
                      {card.items.map((item, idx) => (
                        <li key={idx} className={styles.cardItem}>
                          <BsCheckCircle className={styles.icon} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className={styles.sectionWrapper}>
      <Container>
        <AnimatedSection>
          <div className="my-3">
            {/* Desktop View */}
            <div className="d-none d-md-block">
              <div className={styles.titleContainer}>
                <h1 className={styles.styledProductsHeading} style={{ color: '#000000' }}>
                  {product.productTitle}
                </h1>
                <hr className={styles.divider} style={{ backgroundColor: '#EF5226' }} />
                </div>
              <Row>
                <Col md={3} className="m-auto">
                  <div>
                    {Object.keys(product.tabsHeadings).map((key) => (
                      <div
                        key={key}
                        className={`${styles.styledTabItem} ${activeTab === key ? styles.styledTabItemActive : ''}`}
                        onClick={() => setActiveTab(key)}
                      >
                        {product.tabsHeadings[key]}
                      </div>
                    ))}
                  </div>
                </Col>
                <Col md={9}>
                  <TabContent
                    content={product.tabData[activeTab]?.content || []}
                    image={product.tabData[activeTab]?.image || '/default-image.png'}
                    alt={product.tabData[activeTab]?.alt || 'Default image description'}
                  />
                </Col>
              </Row>
            </div>

            {/* Mobile View (Accordion) */}
            <div className="d-md-none">
              <div className={styles.titleContainer}>
                <h1 className={styles.styledProductsHeading} style={{ color: '#000000' }}>
                  {product.productTitle}
                </h1>
                {/* <Divider style={{ backgroundColor: '#EF5226', marginTop: '10px' }} /> */}
              </div>
              <Accordion defaultActiveKey="0">
                {Object.keys(product.tabsHeadings).map((key, idx) => (
                  <Accordion.Item eventKey={idx.toString()} key={key} className={styles.styledAccordionItem}>
                    <Accordion.Header className={styles.styledAccordionHeader}>
                      {product.tabsHeadings[key]}
                    </Accordion.Header>
                    <Accordion.Body className={styles.styledAccordionBody}>
                      <TabContent
                        content={product.tabData[key]?.content || []}
                        image={product.tabData[key]?.image || '/default-image.png'}
                        alt={product.tabData[key]?.alt || 'Default image description'}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
      <OurPartnerSection className="py-2" />
      <Footer />
  {/* Inject Structured Data */}
  {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      {/* {breadcrumbSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />} */}
      {/* {articleSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />} */}
    </>
  );
};

export default ProductPage;
