"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { aboutus_data, industriesDataList } from "../utils/constants";
import AnimatedColumn from "../components/Home/AnimatedColumn";
import AnimatedSection from "../components/Home/AnimatedSection";
import styles from "./industries.module.css";
import industryStyles from '../industries/[slug]/industry.module.css'
import Navigation from "../components/Header/navigation";
import Footer from "../components/Footer";

export default function AllIndustriesSection() {
  const router = useRouter();

  const handleArrowClick = (link) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(link);
  };

  return (
    <>
      <Navigation/>
      <section className={industryStyles.section}>
        <div className="container">
          <AnimatedColumn direction="left">
            <div>
              <h2 className={industryStyles.heading}>{aboutus_data.allindustries.heading}</h2>
              <div className={industryStyles.divider}></div>
              <p className={industryStyles.description}>{aboutus_data.allindustries.description}</p>
            </div>
          </AnimatedColumn>
        </div>
      </section>

      {[industriesDataList.agricultureList, industriesDataList.fmcgList, industriesDataList.oilandgasList].map((industryList, index) => (
        <Container key={index} className={`${styles.styledContainer} mt-5 mb-5`}>
          <AnimatedSection id="hero" className="animated-section">
            <Row className="justify-content-between align-items-center">
              <Col>
                <h2 className={styles.header}>
                  {index === 0
                    ? "Agriculture to Electronic Industries"
                    : index === 1
                    ? "FMCG to Metal Fabrication Industry"
                    : "Oil and Gas Industry"}
                </h2>
              </Col>
              <Col className="d-flex justify-content-end">
                <a href="#" className={styles.industryCount}>{industryList.length} Industries</a>
              </Col>
            </Row>
            <Row>
              {industryList.map((industry) => (
                <Col md={6} key={industry.id}>
                  <div className={styles.industryCard}>
                    <div className={styles.iconWrapper}>
                      <img src={industry.icon} alt={`${industry.title} icon`} className={styles.icon} />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.title}>{industry.title}</h3>
                      <p className="mb-1">{industry.description}</p>
                    </div>
                    <div className={styles.arrow} onClick={() => handleArrowClick(industry.link)}>
                      <FaArrowRight />
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </AnimatedSection>
        </Container>
      ))}

      <Footer/>
    </>
  );
}
