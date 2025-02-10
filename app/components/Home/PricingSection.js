import React from "react";
import Link from "next/link";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoCheckCircleFill } from "react-icons/go";
import AnimatedSection from "../../components/Home/AnimatedSection";
import styles from "./PricingSection.module.css"; // Import module CSS
import { pricingPlans } from "../../utils/constants";

const PricingSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Tech Cloud ERP Pricing</h2>
      <div className={styles.cardContainer}>
        {pricingPlans.map((pkg, index) => (
          <AnimatedSection key={index} className="animated-section">
            <div
              className={styles.card}
              style={{ background: pkg.background, color: pkg.color }}
            >
              {index === 1 && <div className={styles.badge}>Popular</div>}

              {index !== 1 && <h3 className={styles.planTitle}>{pkg.title || ""}</h3>}

              {index === 1 && <button className={styles.popularButton}>Enterprise</button>}

              {pkg.note && <p className={styles.description}>{pkg.note}</p>}

              <h3 className={styles.price}>
                <FaIndianRupeeSign className={styles.rupeeIcon} />
                {pkg.price}
              </h3>
              <p className={styles.description}>{pkg.description}</p>

              <ul className={styles.coverageList}>
                {pkg.coverages.map((coverage, i) => (
                  <li key={i} className={styles.coverageItem}>
                    <GoCheckCircleFill className={styles.checkIcon} />
                    {coverage}
                  </li>
                ))}
              </ul>

              {/* ✅ Removed scrollToTop function */}
              <Link href="/contact-us" aria-label="Buy Now">
                <button className={styles.button}>Buy Now</button>
              </Link>

              <p className={styles.creditCardText}>{pkg.creditCardRequired}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
