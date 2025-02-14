"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModulecardsData } from "../../utils/constants";
import { Container } from "react-bootstrap";
import AnimatedSection from "../../components/Home/AnimatedSection";
import styles from "./ImportantModuleSection.module.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true, // ✅ Enables auto sliding
  autoplaySpeed: 3000, // ✅ Adjusts speed (3 seconds)
  arrows: true,
  pauseOnHover: false, // ✅ Ensures autoplay doesn't stop on hover
  responsive: [
    {
      breakpoint: 1200,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

const ImportantModuleSection = () => {
  return (
    <AnimatedSection id="hero" className="animated-section">
      <h1 className={`${styles.title} text-center pt-4 pt-md-0`}>
        Important Modules
      </h1>
      <Container className="mb-3">
        <Slider {...settings} className={styles.carouselContainer}>
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
        </Slider>
      </Container>
    </AnimatedSection>
  );
};

export default ImportantModuleSection;
