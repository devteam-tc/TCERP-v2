'use client';


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import styles from './ScrollFeature.module.css';
import { featuresData } from '../../utils/constants';
import { Container } from 'react-bootstrap';

const PrevArrow = ({ onClick }) => (
  <div className={styles.customArrow} style={{ left: '-45px' }} onClick={onClick}>
    <BiChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={styles.customArrow} style={{ right: '-45px' }} onClick={onClick}>
    <BiChevronRight />
  </div>
);

const ScrollFeature = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.animatedBackground}>
      <Container className={styles.styledContainer}>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {featuresData.map((feature, index) => (
              <div key={index} className={styles.card}>
                <img src={feature.imgSrc} alt={feature.title} className={styles.cardImage} />
                <h5 className={styles.cardTitle}>{feature.title}</h5>
                <p className={styles.cardText}>{feature.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default ScrollFeature;
