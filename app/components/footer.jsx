"use client";

import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import SocialMediaIcons from "./Header/socialmedia-icons";
import Counter from './Counter';

const obfuscateEmail = (user, domain, tld) => `${user}@${domain}.${tld}`;

export default function Footer() {
  const corporateEmail = obfuscateEmail("info", "techclouderp", "com");
  const headquartersEmail = obfuscateEmail("contact", "techclouderp", "com");

  
  return (
    <>
      <footer className={styles.footerSection}>
        <Container>
          <Row>
            <Col md={8} xl={3} sm={12}>
              <img
                src="/logo.webp"
                alt="Tech Cloud ERP Logo"
                width={180}
                height={80}
                className={styles.logo}
              />
              <p className={`${styles.footerText} pt-3`}>
                Tech Cloud ERP delivers top-notch solutions tailored for any business, combining advanced technology, intuitive design, and comprehensive features.
              </p>
              <SocialMediaIcons />
              <Counter />
            </Col>
            <Col md={4} xl={2} sm={6}>
              <h5 className={styles.footerHeading}>Useful Links</h5>
              <ul className={styles.footerLinkList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/features">Our Features</Link></li>
                <li><Link href="/">Our Blogs</Link></li>
                <li><Link href="/ourbranches">Our Branches</Link></li>
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </Col>
            <Col md={4} xl={2} sm={6}>
              <h5 className={styles.footerHeading}>Industries</h5>
              <ul className={styles.footerLinkList}>
                <li><Link href="/industries">All Industries</Link></li>
                <li><Link href="/industries/jewellery-industry">Jewellery</Link></li>
                <li><Link href="/industries/pharma-industry">Pharma</Link></li>
                <li><Link href="/industries/agriculture-industry">Agriculture</Link></li>
                <li><Link href="/industries/beverage-industry">Beverage</Link></li>
                <li><Link href="/industries/leather-industry">Leather</Link></li>
                <li><Link href="/industries/textiles-industry">Textile</Link></li>
                <li><Link href="/industries/food-industry">Food</Link></li>
                <li><Link href="/products/trading-software">Tech Cloud Trading</Link></li>
              </ul>
            </Col>
            <Col md={4} xl={2} sm={6}>
              <h5 className={styles.footerHeading}>Services</h5>
              <ul className={styles.footerLinkList}>
                <li><Link href="/services">All Services</Link></li>
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/">E-Commerce Website</Link></li>
                <li><Link href="/services/mobile-application-development">Mobile App Development</Link></li>
                <li><Link href="/services/digital-marketing">Digital Marketing</Link></li>
                <li><Link href="/">Whatsapp Business</Link></li>
                <li><Link href="/business-intelligence">Business Intelligence</Link></li>
                <li><Link href="/">Web Hosting</Link></li>
              </ul>
            </Col>
            <Col md={4} xl={3}>
              <h5 className={styles.footerHeading}>Get in Touch</h5>
              <div className={styles.contactInfo}>
                <h5 className={styles.footerHeader}>Corporate Office</h5>
                <p><FaMapMarkerAlt /> Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Madhapur, Hyderabad, Telangana - 500081</p>
                <p><FaEnvelope /> <a href={`mailto:${corporateEmail}`}>{corporateEmail}</a></p>
                <p><FaPhoneAlt /> +91 8919439603 , +91 7032082300</p>
              </div>
              <div className={styles.contactInfo}>
                <h5 className={styles.footerHeader}>Headquarters</h5>
                <p><FaMapMarkerAlt /> 1101, E Bell Street, Suite-E, Bloomington, IL - 61701.</p>
                <p><FaEnvelope /> <a href={`mailto:${headquartersEmail}`}>{headquartersEmail}</a></p>
                <p><FaPhoneAlt /> +1 (312) 766-3390</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={styles.copyrightText}>
          &copy; 2025 Tech Cloud ERP. <Link href="/terms-and-conditions">Terms & Conditions</Link> | <Link href="/privacypolicy">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
};
