"use client"; // Add this at the top

import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimatedSection.module.css"; // Import the CSS Module

const AnimatedSection = ({ children, className, ...props }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${className} ${isVisible ? styles.visible : ""}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
