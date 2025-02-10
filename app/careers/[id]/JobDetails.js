"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Container, Row, Col } from "react-bootstrap";
import { FaBook, FaBriefcase,  FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa6";
import JobApplicationForm from "./JobApplicationForm";
import { FaMapMarkerAlt } from "react-icons/fa";
import industryStyles from "../../industries/[slug]/industry.module.css";

import styles from "./JobDetails.module.css";
import Navigation from "../../components/Header/navigation";
import Footer from "../../components/Footer";

const JobDetails = ({ jobId }) => {
  const [job, setJob] = useState(null);

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
        <Row>
          <Col md={4}>
            <FaBriefcase className={styles.icon} />
            <strong>Work mode:</strong> {job.workMode}
          </Col>
          <Col md={4}>
            <FaMapMarkerAlt className={styles.icon} />
            {job.location}
          </Col>
          <Col md={4}>
            <FaBook className={styles.icon} />
            <strong>Preferred Candidates:</strong> {job.preferredCandidates}
          </Col>
        </Row>
        <div className={styles.shareSection}>
          <p>Share this job:</p>
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
