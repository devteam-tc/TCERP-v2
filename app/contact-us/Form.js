'use client';  // Add this at the top of the file

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Form.module.css'; // Importing the CSS module
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../utils/constants';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', 'defer');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container className={`my-md-5 ${styles.styledContainer}`}>
      <Row>
        <Col md={6} className="m-auto">
          <h6 className={styles.letsGetInTouch}>Let's Get in Touch</h6>
          <h3>Drop a Message.<br /> Let's Engage..!</h3>

          <ul className='list-unstyled'>
            <h5 className={styles.sectionTitle}>Corporate Office</h5>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaMapMarkerAlt className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Address</span>
                <span className={styles.details}>{contactData.corporateOffice.address}</span>
              </div>
            </li>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaPhoneAlt className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Phone Number</span>
                <span className={styles.details}>{contactData.corporateOffice.phoneNumber}</span>
              </div>
            </li>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaEnvelope className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Email</span>
                <span className={styles.details}>{contactData.corporateOffice.email}</span>
              </div>
            </li>
          </ul>

          <ul className='list-unstyled'>
            <h5 className={styles.sectionTitle}>Headquarters</h5>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaMapMarkerAlt className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Address</span>
                <span className={styles.details}>{contactData.headquarters.address}</span>
              </div>
            </li>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaPhoneAlt className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Phone Number</span>
                <span className={styles.details}>{contactData.headquarters.phoneNumber}</span>
              </div>
            </li>
            <li className={styles.iconContainer}>
              <div className={styles.icon}>
                <FaEnvelope className='fs-3'/>
              </div>
              <div className={styles.textContainer}>
                <span className={styles.label}>Email</span>
                <span className={styles.details}>{contactData.headquarters.email}</span>
              </div>
            </li>
          </ul>
          {/* <ul className='list-unstyled'>
            <SectionTitle>Follow Us</SectionTitle>
            <SocialMediaIcons />
          </ul> */}
        </Col>

        <Col md={6}>
          <div className={styles.contactFormContainer}>
            <div className='elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1' data-elfsight-app-lazy></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
