"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Container, Row, Col } from "react-bootstrap";
import { FaBook, FaBriefcase,  FaLinkedin, FaFacebook, FaWhatsapp, FaClock, FaChair, FaPeopleLine } from "react-icons/fa6";
import JobApplicationForm from "./JobApplicationForm";
import { FaMapMarkerAlt } from "react-icons/fa";
import industryStyles from "../../industries/[slug]/industry.module.css";

import styles from "./JobDetails.module.css";
import Navigation from "../../components/Header/navigation";
import Footer from "../../components/Footer";
import Link from "next/link";

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!jobId) return;
    
    const fetchJobDetails = async () => {
      const jobRef = doc(db, "jobOpenings", jobId);
      const jobSnap = await getDoc(jobRef);
      if (jobSnap.exists()) {
        setJob(jobSnap.data());
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) return <p>Loading job details...</p>;

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`Check out this job: ${currentUrl}`)}`;

  return (
    <>
    <Navigation/>
    <div className={industryStyles.section}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">{job.title}</h1>
              <p>{job.description}</p>
            </Col>
          </Row>
        </Container>
      </div>
    <Container>

      

      <h2 className={styles.sectionTitle}>Roles and Responsibilities</h2>
      <ul className={styles.list}>
        {job.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>

      <div className={styles.qualificationSection}>
        <h2 className={styles.sectionTitle}>Required Qualifications</h2>
        <ul className={styles.list}>
          {job.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>
      </div>

      <div className={styles.jobHighlights}>
        <h2>Job Highlights</h2>
        <Row >


          

          <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaBriefcase className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Work mode: </strong> {job.workMode}
          </div>
          </Col>

          <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
                  {job.location}
          </div>
          </Col>

          <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaPeopleLine className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Preferred Candidates: </strong> {job.prefferedCandidates}
          </div>
          </Col>

          <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaBook className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Experience : </strong> {job.experience}
          </div>
          </Col>
          

          <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaClock className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Working Hours: </strong> 10 AM - 7 PM
          </div>
          </Col>

        <Col md={4} className="d-flex align-items-center mt-4 mb-4">
          <div className={styles.iconContainer}>
            <FaChair className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>No. of Vacancy:</strong> {job.vacancies}
          </div>
        </Col>

          
        </Row>
        <div className="mt-4">
          <button className={styles.CustomButton}>
            
          <Link
            href="/careers"
            style={{
              textDecoration: "none",
              color: hover ? "black" : "#fff",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            View all jobs
          </Link>

          </button>
        </div>
        <div className={styles.shareSection}>
          <p style={{margin: '0px'}}>Share this job:</p>
          <a href={linkedinShare} target="_blank">
            <FaLinkedin className={styles.socialIcon} />
          </a>
          <a href={facebookShare} target="_blank">
            <FaFacebook className={styles.socialIcon} />
          </a>
          <a href={whatsappShare} target="_blank">
            <FaWhatsapp className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={styles.dropCV}>
        <Container>
          <JobApplicationForm jobTitle={job.title} />
        </Container>
      </div>
    </Container>
    <Footer/>
    </>
  );
};

export default JobDetails;
