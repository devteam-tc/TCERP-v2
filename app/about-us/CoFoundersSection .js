"use client"; 

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { coFoundersData } from '../utils/constants';
import styles from './CoFoundersSection.module.css';

// ✅ Title Component (Fix for ReferenceError)
const Title = ({ children, className }) => (
    <h2 className={className}>{children}</h2>
);

const CoFoundersSection = () => {
    const handleSocialClick = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className={styles.sectionContainer}>
            <Container>
                <Title className={styles.Title}>Our Management Team</Title>
                <p className={styles.sectionSubtitle}>
                    Our Chairman and Founder are the pillars of our company’s vision and success. Combining extensive expertise with a shared passion for innovation, their leadership drives us to deliver user-centric, high-quality ERP solutions. Their commitment to excellence inspires our team to meet the ever-evolving needs of modern businesses with precision and dedication.
                </p>
                <Row>
                    {coFoundersData.map((coFounder, index) => (
                        <Col md={6} className="mb-4 d-flex" key={index}>
                            <Card className={styles.styledCard}>
                                <Card.Body>
                                    <h4 className={styles.cardTitle}>{coFounder.name}</h4>
                                    <h6 className={styles.cardSubtitle}>{coFounder.title}</h6>

                                    {/* ✅ Social Media Icons */}
                                    <div className={styles.socialIcons}>
                                        {coFounder.socialLinks.facebook && (
                                            <div onClick={() => handleSocialClick(coFounder.socialLinks.facebook)}>
                                                <FaFacebookF />
                                            </div>
                                        )}
                                        {coFounder.socialLinks.linkedin && (
                                            <div onClick={() => handleSocialClick(coFounder.socialLinks.linkedin)}>
                                                <FaLinkedinIn />
                                            </div>
                                        )}
                                        {coFounder.socialLinks.instagram && (
                                            <div onClick={() => handleSocialClick(coFounder.socialLinks.instagram)}>
                                                <FaInstagram />
                                            </div>
                                        )}
                                        {coFounder.socialLinks.twitter && (
                                            <div onClick={() => handleSocialClick(coFounder.socialLinks.twitter)}>
                                                <FaXTwitter />
                                            </div>
                                        )}
                                    </div>

                                    <p className={styles.cardText}>{coFounder.description}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default CoFoundersSection;
