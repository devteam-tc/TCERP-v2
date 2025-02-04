"use client";

import React from "react";
import styles from "./ourPartners.module.css";
import { partnerData } from "../utils/constants"; // Adjust path if needed
import Image from "next/image";
import Link from "next/link";

const OurPartnerSection = () => {
  return (
    <div className={styles.sliderWrapper} style={{ "--partner-count": partnerData.length }}>
      <div className={styles.slideTrack}>
        {partnerData.map((partner, index) => (
          <div key={index} className={styles.slide}>
            <Link href={partner.link}>
              <Image src={partner.imgSrc} alt={partner.alt} width={150} height={100} />
            </Link>
          </div>
        ))}

        {/* Duplicate for infinite scrolling effect */}
        {partnerData.map((partner, index) => (
          <div key={index + partnerData.length} className={styles.slide}>
            <Link href={partner.link}>
              <Image src={partner.imgSrc} alt={partner.alt} width={150} height={100} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnerSection;
