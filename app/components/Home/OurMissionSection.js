// components/OurMissionSection.js
"use client"
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TiArrowRight } from 'react-icons/ti';
import { releavant } from '../../utils/constants';
import { useRouter } from 'next/navigation'; // Replace react-router-dom with Next.js's useRouter
import Image from 'next/image'; // Use Next.js's Image component
import AnimatedColumn from './AnimatedColumn';
import styles from './OurMissionSection.module.css'; // Import the CSS Module

const OurMissionSection = () => {
  const router = useRouter(); // Use Next.js's useRouter for navigation

  const { images, content } = releavant.ourMission;

  const handleReadMoreClick = () => {
    router.push('/about-us'); // Use Next.js's router.push for navigation
    window.scrollTo(0, 0);
  };

  return (
    <section className={styles.experienceSection}>
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mt-4">
            <AnimatedColumn direction="left">
              <div className={styles.experienceImageWrapper}>
                <Image
                  src={images.mainImage}
                  alt="Innovate, integrate, excel with Tech Cloud ERP for business transformation"
                  className={styles.experienceImageStyled}
                  width={600} // Set appropriate width
                  height={400} // Set appropriate height
                />
                <Image
                  src={images.experienceIcon}
                  alt="ERP Cloud Solutions"
                  className={styles.overlayImage}
                  width={200} // Set appropriate width
                  height={200} // Set appropriate height
                />
                {/* <div className={styles.text}>
                  <p>
                    <span>{content.experience.years}</span> {content.experience.text}
                  </p>
                </div> */}
              </div>
            </AnimatedColumn>
          </Col>

          <Col lg={7} className="mt-4">
            <AnimatedColumn direction="right">
              <div className={styles.experienceContent}>
                <h3 style={{ color: '#ef5226' }}>{content.companyName}</h3>
                <p>{content.description}</p>
                <div className="experience-text">
                  <div className="mt-4">
                    {/* <h3 style={{ color: '#05A7CC' }}>{content.missionTitle}</h3> */}
                    <p>{content.missionText}</p>
                  </div>
                </div>
                <Button
                  className="mt-4"
                  onClick={handleReadMoreClick}
                  variant="primary"
                  style={{ backgroundColor: '#e93906', borderRadius: '0px', border: 'none' }}
                >
                  Read More
                  <TiArrowRight size={25} />
                </Button>
              </div>
            </AnimatedColumn>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurMissionSection;