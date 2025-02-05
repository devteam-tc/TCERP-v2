import React from "react";
import { Container } from "react-bootstrap";
import styles from "./TransformingIndustriesSection.module.css"; // Import the CSS module
import { industryData } from "../utils/constants";

const TransformingIndustriesSection = () => {
  const itemsPerRow = 5;

  return (
    <div className={styles.section}>
      <Container>
        <h1 className={`${styles.title} text-center pt-4 pt-md-0`}>
          Transforming Data into Actionable Insights for Industries Worldwide
        </h1>
        <p className={styles.subtitle}>
          Our business intelligence services are tailored to a wide range of
          industries, delivering critical features needed to achieve maximum
          impact.
        </p>
        <div className={`${styles.gridContainer} ${styles["gridContainer--largeTablet"]} ${styles["gridContainer--tablet"]} ${styles["gridContainer--mobile"]} ${styles["gridContainer--smallMobile"]}`}>
          {industryData.map((industry, index) => (
            <div key={index} className={styles.industryItem}>
              <div className={styles.industryIcon}>{industry.icon}</div>
              <h6 className={styles.industryTitle}>{industry.title}</h6>

              {/* Add vertical line except for the last column */}
              {((index + 1) % itemsPerRow !== 0) && <div className={styles.verticalLine} />}

              {/* Add horizontal line except for the last row */}
              {index < industryData.length - itemsPerRow && <div className={styles.horizontalLine} />}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TransformingIndustriesSection;
