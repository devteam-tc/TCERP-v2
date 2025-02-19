"use client";
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import {  } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig'; // Adjust the path as needed
import styles from './HomeVideoLanding.module.css'; // Import the CSS Module

const HomeVideoLanding = () => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const docRef = doc(db, 'videos', 'backgroundVideo'); // Adjust collection/document names
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setVideoUrl(docSnap.data().url); // Replace 'url' with the actual field name
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching video URL from Firebase:', error);
      }
    };

    fetchVideoUrl();
  }, []);

  return (
    <div className={styles.bannerWrapper}>
      {videoUrl && (
        <video className={styles.videoBackground} autoPlay loop muted>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <Container>
        {/* <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>INNOVATE, INTEGRATE & EXCEL</h1>
          <h2 className={styles.bannerSubtitle}>the era of ERP solution.</h2>
          <Row className='justify-content-center'>
            <h6 className={`${styles.bannerText} text-center w-75 md-0`}>
              Tech Cloud ERP is a customizable solution that streamlines operations, boosts productivity, and offers real-time insights, driving growth and efficiency across industries.
            </h6>
          </Row>
        </div> */}
      </Container>
    </div>
  );
};

export default HomeVideoLanding;
