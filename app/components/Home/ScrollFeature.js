"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ScrollFeature.module.css";
import { featuresData } from "../../utils/constants";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Custom Arrow Component
const CustomArrow = ({ onClick, children, className }) => (
  <button className={`${styles.customArrow} ${className}`} onClick={onClick}>
    {children}
  </button>
);

const ScrollFeature = () => {
  const swiperRef = useRef(null);

  return (
    <section className={styles.sliderSection}>
      <h3 className={styles.title}>Unique Features</h3>
      <p className={styles.description}>
        Tech Cloud ERP provides an easy-to-use solution with smooth integration, powerful real-time analytics, and tools to help businesses improve operations, boost productivity, and make smarter decisions.
      </p>
      <div className={styles.sliderWrapper}>
        <CustomArrow className={styles.leftArrow} onClick={() => swiperRef.current?.slidePrev()}>
          <BiChevronLeft size={32} />
        </CustomArrow>
        <div className={styles.sliderContainer}>
        <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={3} // Controls how many slides are visible at once
  slidesPerGroup={1} // Moves only one slide at a time
  loop={true} // Infinite looping
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  navigation={{
    prevEl: `.${styles.leftArrow}`,
    nextEl: `.${styles.rightArrow}`,
  }}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  breakpoints={{
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 1 },
    1024: { slidesPerView: 3, slidesPerGroup: 1 },
  }}
>

            {featuresData.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <img loading="lazy" src={feature.image} alt={feature.title} className={styles.cardImage} />
                  <h5 className={styles.cardTitle}>{feature.title}</h5>
                  <p className={styles.cardText}>{feature.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <CustomArrow className={styles.rightArrow} onClick={() => swiperRef.current?.slideNext()}>
          <BiChevronRight size={32} />
        </CustomArrow>
      </div>
    </section>
  );
};

export default ScrollFeature;
