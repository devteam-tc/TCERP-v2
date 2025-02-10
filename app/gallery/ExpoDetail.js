"use client"; // Mark this as a client component

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Corrected way to get dynamic ID
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import styles from "./ExpoDetail.module.css";

const ExpoDetail = () => {
  const { id } = useParams(); // Corrected way to get the expo ID dynamically
  const [expo, setExpo] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchExpoDetails = async () => {
      try {
        const docRef = doc(db, "expoDetails", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setExpo(data);

          if (data.imagesFolder) {
            const folderRef = ref(storage, data.imagesFolder);
            const fileList = await listAll(folderRef);
            const imageUrls = await Promise.all(
              fileList.items.map((item) => getDownloadURL(item))
            );
            setImages(imageUrls);
          }
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching expo details:", error);
      }
    };

    fetchExpoDetails();
  }, [id]);

  if (!expo) {
    return (
      <div className={styles.textCenter}>
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <section>
        <Container>
          <Row className={styles.responsiveRow}>
            <h1 className="fw-bold">{expo.title}</h1>
            <div className="d-flex justify-center align-items-center gap-2 my-2">
              <div className={styles.responsiveIcon}>
                <FaMapMarkerAlt />
              </div>
              <p className={styles.responsiveText}>{expo.venue}</p>
            </div>
            <div className="d-flex justify-center align-items-center gap-2 my-2">
              <div className={styles.responsiveIcon}>
                <FaCalendar />
              </div>
              <p className={styles.responsiveText}>{expo.date}</p>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col className={styles.lightGalleryContainer}>
            <LightGallery
              speed={500}
              download={false}
              plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgRotate]}
            >
              {images.map((img, index) => (
                <a href={img} key={index}>
                  <img
                    src={img}
                    alt={`${expo.title} Image ${index + 1}`}
                    className={styles.fixedSizeImage}
                  />
                </a>
              ))}
            </LightGallery>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExpoDetail;
