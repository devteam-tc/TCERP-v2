import React from 'react';
import { partnerData } from '../../utils/constants'; // Adjust the path as needed
import { Col } from 'react-bootstrap';
import Link from 'next/link'; // Use Next.js Link
import styles from './OurPartnerSection.module.css'; // Import CSS module

const OurPartnerSection = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slideTrack}>
        {partnerData.map((partner, index) => (
          <div key={index} className={styles.slide}>
            <Col xs={6} sm={4} md={3} lg={2} className={styles.partnerItem}>
              <Link href={partner.link}>
                <img src={partner.imgSrc} alt={partner.alt} />
              </Link>
            </Col>
          </div>
        ))}
        {/* Duplicate for infinite scrolling effect */}
        {partnerData.map((partner, index) => (
          <div key={index + partnerData.length} className={styles.slide}>
            <Col xs={6} sm={4} md={3} lg={2} className={styles.partnerItem}>
              <Link href={partner.link}>
                <img src={partner.imgSrc} alt={partner.alt} />
              </Link>
            </Col>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnerSection;
