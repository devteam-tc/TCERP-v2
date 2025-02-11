"use client"; 

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { sliderData } from "../utils/constants";
import { FaArrowRight } from "react-icons/fa";
import styles from "./BusinessSlider.module.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const BusinessSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // ✅ Prevents SSR crash

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.sectionBackground}>
      <div className="container mt-5">
        <h2 className={styles.title}>
          Complete your business intelligence solution with products from across the Customer 360°
        </h2>
        <Slider {...settings} className={styles.carouselContainer}>
          {sliderData.map((item, index) => (
            <div key={index}>
              <Card className={styles.styledCard}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link href={item.link} className={styles.exploreLink}>
                    {item.linkText} <FaArrowRight className={styles.exploreArrow} />
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BusinessSlider;
