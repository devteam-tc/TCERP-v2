import React from "react";
import { Row, Col } from "react-bootstrap";
import { OurModulesCards } from "../utils/constants";
import AnimatedSection from "../components/Home/AnimatedSection";
import styles from './OurModules.module.css';
import Image from "next/image";


export async function generateStaticParams() {
  return OurModulesCards.map((module) => ({
    slug: module.title.replace(/\s+/g, "-").toLowerCase(),
  }));
}

const OurModules = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.container}>
        <Row>
          {OurModulesCards.map((module, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <AnimatedSection>
                <div className={styles.card}>
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={300} // Set appropriate width
                    height={200} // Set appropriate height
                    className={styles.image}
                    priority
                  />
                  <div className={styles.cardBody}>
                    <h5>{module.title}</h5>
                    <p>{module.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default OurModules;
