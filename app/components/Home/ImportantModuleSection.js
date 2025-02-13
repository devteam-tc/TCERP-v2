"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ModulecardsData } from "../../utils/constants";
import { Container } from "react-bootstrap";
import AnimatedSection from "../../components/Home/AnimatedSection";
import styles from "./ImportantModuleSection.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
    partialVisibilityGutter: 40, // ✅ Adds gap between cards
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const ImportantModuleSection = () => {
  return (
    <AnimatedSection id="hero" className="animated-section">
      <h1 className={`${styles.title} text-center pt-4 pt-md-0`}>Important Modules</h1>
      <Container className="mb-3">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          containerClass={styles.carouselContainer}
          itemClass={styles.carouselItem} // ✅ Ensures spacing
        >
          {ModulecardsData.map((card) => (
            <div key={card.id} className={styles.cardWrapper}>
              <div className={styles.card}>
                <img
                  src={card.image}
                  alt={card.alt}
                  className={styles.cardImage}
                />
                <h5 className={styles.cardTitle}>{card.title}</h5>
                <p className={styles.cardText}>{card.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </AnimatedSection>
  );
};

export default ImportantModuleSection;
