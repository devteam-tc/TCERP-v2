"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModulecardsData } from '../../utils/constants';
import { Container } from 'react-bootstrap';
import AnimatedSection from '../../components/Home/AnimatedSection';
import styles from './ImportantModuleSection.module.css'; // Import the CSS module

const ImportantModuleSection = () => {
  const [pauseSlider, setPauseSlider] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: pauseSlider,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <AnimatedSection id="hero" className="animated-section">
      <div>
        <h1 className={`${styles.title} text-center pt-4 pt-md-0`}>
          Important Modules
        </h1>
        <Container className="mb-3">
          <div
            className={styles.sliderWrapper}
            onMouseEnter={() => setPauseSlider(true)}
            onMouseLeave={() => setPauseSlider(false)}
          >
            <Slider {...sliderSettings}>
              {ModulecardsData.map((card) => (
                <div key={card.id} className={styles.slide}>
                  <div className={styles.card}>
                    <img src={card.image} alt={card.alt} className={styles.cardImage} />
                    <h5 className={styles.cardTitle}>{card.title}</h5>
                    <p className={styles.cardText}>{card.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </AnimatedSection>
  );
};

export default ImportantModuleSection;
