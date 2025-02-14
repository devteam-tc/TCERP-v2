// components/Industries/IndustryList.js

"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import styles from './industryList.module.css'

export default function IndustryList({ industryList, index }) {
  const router = useRouter();

  const handleArrowClick = (link) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(link);
  };

  return (
    <Container className={`${styles.styledContainer} mt-5 mb-5`}>
      <Row className=" align-items-center">
        <Col>
          <h2 className={styles.header}>
            {index === 0
              ? "Agriculture to Electronic Industries"
              : index === 1
              ? "FMCG to Metal Fabrication Industry"
              : "Oil and Gas Industry"}
          </h2>
        </Col>
        
      </Row>
      <Row>
      <Col className="d-flex justify-content-end">
          <a href="#" className={styles.industryCount}>
            {industryList.length} Industries
          </a>
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
                <p className="mb-1 text-justify">{industry.description}</p>
              </div>
              <div className={styles.arrow} onClick={() => handleArrowClick(industry.link)}>
                <FaArrowRight />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
