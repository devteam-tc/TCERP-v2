// "use client";

// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebaseConfig";
// import { useRouter } from "next/navigation";
// import AnimatedSection from "../components/Home/AnimatedSection";
// import styles from "./GalleryTabs.module.css";

// const GalleryTabs = ({ expoDetails }) => {
//   const router = useRouter();
//   const [galleryData, setGalleryData] = useState({});

//   const getMonthIndex = (month) => {
//     const months = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];
//     return months.indexOf(month);
//   };

//   const getSortedDateArray = (dateString) => {
//     return dateString.split(",").map(date => parseInt(date.trim(), 10)).sort((a, b) => b - a);
//   };

//   const sortGalleryItems = (a, b) => {
//     const yearDiff = parseInt(b.year) - parseInt(a.year);
//     if (yearDiff !== 0) return yearDiff;

//     const monthDiff = getMonthIndex(b.month) - getMonthIndex(a.month);
//     if (monthDiff !== 0) return monthDiff;

//     return getSortedDateArray(b.date)[0] - getSortedDateArray(a.date)[0];
//   };

//   useEffect(() => {
//     const fetchGalleryData = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "galleryData"));
//         const gallery = {};

//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           const category = data.category || "uncategorized";

//           if (!gallery[category]) gallery[category] = [];
//           gallery[category].push({ id: doc.id, ...data });
//         });

//         for (const category in gallery) {
//           gallery[category].sort(sortGalleryItems);
//         }

//         setGalleryData(gallery);
//       } catch (error) {
//         console.error("Error fetching gallery data:", error);
//       }
//     };

//     fetchGalleryData();
//   }, []);

//   const handleCardClick = (id) => {
//     router.push(`/gallery/${id}`);
//   };

//   return (
//     <div className={`${styles.galleryContainer} mt-3`}>
//       <Row className="justify-content-center">
//         <h3 className={styles.title}>Exhibition Gallery</h3>
//         <div className={`${styles.description} text-center w-50 p-3`}>
//           Join our nationwide exhibition to experience live demos of advanced ERP solutions, designed to assist your business to flourish. Experience innovative features and discover how we can elevate your business efficiency!
//         </div>
//       </Row>
//       <Container>
//         <Row>
//           {Object.keys(galleryData).map((category) =>
//             galleryData[category].map((item) => (
//               <Col key={item.id} xs={12} md={6} lg={3}>
//                 <AnimatedSection id="hero" className="animated-section">
//                   <div className={styles.cardContainer} onClick={() => handleCardClick(item.id)}>
//                     <div className={styles.cardItem}>
//                       <div className="mb-3">
//                         <img src={item.img} alt={item.alt || "Gallery Image"} className="img-fluid" />
//                       </div>
//                       <p>
//                         <span className="fw-bold text-black">
//                           {category === "festival" ? "Event Name: " : "Location: "}
//                         </span>
//                         {item.location}
//                       </p>
//                       <p>
//                         <span className="fw-bold text-black">Venue:</span> {item.venue}
//                       </p>
//                       <p>
//                         <span className="fw-bold text-black">Date: </span>
//                         {item.date} {item.month} {item.year}
//                       </p>
//                     </div>
//                   </div>
//                 </AnimatedSection>
//               </Col>
//             ))
//           )}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default GalleryTabs;

"use client";

import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import styles from "./GalleryTabs.module.css";

// Lazy load AnimatedSection
const AnimatedSection = dynamic(() => import("../components/Home/AnimatedSection"), { ssr: false });

const getMonthIndex = (month) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months.indexOf(month);
};

const getSortedDateArray = (dateString) => {
  return dateString.split(",").map(date => parseInt(date.trim(), 10)).sort((a, b) => b - a);
};

const sortGalleryItems = (a, b) => {
  const yearDiff = parseInt(b.year) - parseInt(a.year);
  if (yearDiff !== 0) return yearDiff;

  const monthDiff = getMonthIndex(b.month) - getMonthIndex(a.month);
  if (monthDiff !== 0) return monthDiff;

  return getSortedDateArray(b.date)[0] - getSortedDateArray(a.date)[0];
};

const GalleryTabs = () => {
  const router = useRouter();
  const [galleryData, setGalleryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "galleryData"));
        const gallery = {};

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const category = data.category || "uncategorized";
          if (!gallery[category]) gallery[category] = [];
          gallery[category].push({ id: doc.id, ...data });
        });

        for (const category in gallery) {
          gallery[category].sort(sortGalleryItems);
        }

        setGalleryData(gallery);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleCardClick = (id) => {
    router.push(`/gallery/${id}`);
  };

  return (
    <div className={`${styles.galleryContainer} mt-3`}>
      <Row className="justify-content-center">
        <h3 className={styles.title}>Exhibition Gallery</h3>
        <div className={`${styles.description} text-center w-50 p-3`}>
          Join our nationwide exhibition to experience live demos of advanced ERP solutions, designed to assist your business to flourish.
        </div>
      </Row>
      <Container>
        <Row>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            Object.keys(galleryData || {}).map((category) =>
              galleryData[category].map((item) => (
                <Col key={item.id} xs={12} md={6} lg={3}>
                  <Suspense fallback={<Spinner animation="border" />}>
                    <AnimatedSection id="hero">
                      <div className={styles.cardContainer} onClick={() => handleCardClick(item.id)}>
                        <div className={styles.cardItem}>
                          <img src={item.img} alt={item.alt || "Gallery Image"} className="img-fluid" />
                          <p><strong>{category === "festival" ? "Event Name:" : "Location:"}</strong> {item.location}</p>
                          <p><strong>Venue:</strong> {item.venue}</p>
                          <p><strong>Date:</strong> {item.date} {item.month} {item.year}</p>
                        </div>
                      </div>
                    </AnimatedSection>
                  </Suspense>
                </Col>
              ))
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryTabs;
