"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedColumn.module.css";

const AnimatedColumn = ({ direction = "left", children, ...props }) => {
  const ref = useRef(null);
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

    const element = ref.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.animatedColumn} ${styles[direction]} ${isVisible ? styles.visible : ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedColumn;
