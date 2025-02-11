import React from 'react';
import WorldMapWithMarkers from '../Aboutus/WorldMapWithMarkers';
import { Container } from 'react-bootstrap';
import CTA from '../CTA';
import styles from './OurBranches.module.css'; // Import CSS module
import WorldMapWithMarkers from './WorldMapWithMarkers'
const OurBranches = () => {
  return (
    <>
     
      <Container className={styles.container}>
        <h2 className={styles.title}>Our Branches</h2>
        <p className={styles.subTitle}>
          At Tech Cloud ERP Software Solutions, we are proud to provide our services across the globe, catering to businesses of all sizes. Our solutions have reached major cities around the world, including extensive coverage across India. We serve key urban centers like Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, and more, ensuring that companies have access to reliable, cutting-edge ERP software regardless of location.
        </p>
      </Container>
      <WorldMapWithMarkers />
      <CTA />
    </>
  );
};

export default OurBranches;
