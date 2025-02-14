import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link"; // Use Next.js Link
import { assetsbrochure } from "../utils/constants"; 
import styles from "./StickyButton.module.css";

const StickyButton = () => (
  <>
    <div className={styles.stickyButtonWrapper}>
      <a 
        href={assetsbrochure.brochureLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Download Brochure"
        className={styles.styledButton}
      >
        Download Brochure
      </a>
    </div>

    <div className={`${styles.stickyButtonWrapper} ${styles.left}`}>
      <Link href="/product-comparison" aria-label="Product Comparison" className={styles.styledButton}>
        Product Comparison
      </Link>
    </div>
  </>
);

export default StickyButton;
