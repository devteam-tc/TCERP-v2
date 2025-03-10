// "use client"; // Mark this as a client component

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation"; // Corrected way to get dynamic ID
// import { Col, Container, Row, Spinner } from "react-bootstrap";
// import { doc, getDoc } from "firebase/firestore";
// import { db, storage } from "../firebaseConfig";
// import { FaMapMarkerAlt, FaCalendar } from "react-icons/fa";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import LightGallery from "lightgallery/react";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";
// import styles from "./ExpoDetail.module.css";
// import Navigation from "../components/Header/navigation";

// const ExpoDetail = () => {
//   const { id } = useParams(); // Corrected way to get the expo ID dynamically
//   const [expo, setExpo] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     if (!id) return;

//     const fetchExpoDetails = async () => {
//       try {
//         const docRef = doc(db, "expoDetails", id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           const data = docSnap.data();
//           setExpo(data);

//           if (data.imagesFolder) {
//             const folderRef = ref(storage, data.imagesFolder);
//             const fileList = await listAll(folderRef);
//             const imageUrls = await Promise.all(
//               fileList.items.map((item) => getDownloadURL(item))
//             );
//             setImages(imageUrls);
//           }
//         } else {
//           console.error("No such document!");
//         }
//       } catch (error) {
//         console.error("Error fetching expo details:", error);
//       }
//     };

//     fetchExpoDetails();
//   }, [id]);

//   if (!expo) {
//     return (
//       <div className={styles.textCenter}>
//         <Spinner animation="border" variant="primary" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//       </div>
//     );
//   }

//   return (
//     <>
//     <Navigation/>
//       <section>
//         <Container>
//           <Row className={styles.responsiveRow}>
//             <h1 className="fw-bold">{expo.title}</h1>
//             <div className="d-flex justify-center align-items-center gap-2 my-2">
//               <div className={styles.responsiveIcon}>
//                 <FaMapMarkerAlt />
//               </div>
//               <p className={styles.responsiveText}>{expo.venue}</p>
//             </div>
//             <div className="d-flex justify-center align-items-center gap-2 my-2">
//               <div className={styles.responsiveIcon}>
//                 <FaCalendar />
//               </div>
//               <p className={styles.responsiveText}>{expo.date}</p>
//             </div>
//           </Row>
//         </Container>
//       </section>

//       <Container>
//         <Row>
//           <Col className={styles.lightGalleryContainer}>
//             <LightGallery
//               speed={500}
//               download={false}
//               plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare, lgRotate]}
//             >
//               {images.map((img, index) => (
//                 <a href={img} key={index}>
//                   <img
//                     src={img}
//                     alt={`${expo.title} Image ${index + 1}`}
//                     className={styles.fixedSizeImage}
//                   />
//                 </a>
//               ))}
//             </LightGallery>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };


// export default ExpoDetail;


"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "../firebaseConfig";
import { FaMapMarkerAlt, FaCalendar, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import styles from "./ExpoDetail.module.css";
import Navigation from "../components/Header/navigation";
import industrystyles from "../industries/[slug]/industry.module.css"
import Footer from "../components/Footer";

const ExpoDetail = () => {
  const { id } = useParams();
  const [expo, setExpo] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      } finally {
        setLoading(false);
      }
    };

    fetchExpoDetails();
  }, [id]);

  // Open Image Viewer
  const openImageViewer = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  // Close Viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  // Navigate to Previous Image
  const showPreviousImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Navigate to Next Image
  const showNextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <Navigation />
{/* 
      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{service.title}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{service.description}</p>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className={industrystyles.section}>
        <Container>
          <Row className={styles.responsiveRow}>
            <h1 className="fw-bold">{expo?.title}</h1>
            <div className="d-flex align-items-center gap-2">
              <div className={styles.responsiveIcon}>
                <FaMapMarkerAlt />
              </div>
              <p className={styles.responsiveText}>{expo?.venue}</p>
            </div>
            <div className="d-flex align-items-center gap-2 my-2">
              <div className={styles.responsiveIcon}>
                <FaCalendar />
              </div>
              <p className={styles.responsiveText}>{expo?.date}</p>
            </div>
          </Row>
        </Container>
      </section>


      <Container>
        <Row className="justify-content-center">
          {loading ? (
            <Spinner animation="border" variant="primary" role="status" className="my-3">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <Row className={styles.galleryGrid}>
              {images.map((img, index) => (
                <Col key={index} xs={12} md={6} lg={4} className={styles.galleryCol}>
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className={styles.galleryImage}
                    onClick={() => openImageViewer(index)}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Row>
      </Container>

      {/* Custom Image Viewer */}
      {selectedImage && (
        <div className={styles.imageViewerOverlay} onClick={closeImageViewer}>
          <div className={styles.imageViewer}>
            <img src={selectedImage} alt="Selected" className={styles.imageViewerImage} />
            <button className={styles.closeButton} onClick={closeImageViewer}>
              <FaTimes />
            </button>
            <button className={styles.prevButton} onClick={(e) => { e.stopPropagation(); showPreviousImage(); }}>
              <FaChevronLeft />
            </button>
            <button className={styles.nextButton} onClick={(e) => { e.stopPropagation(); showNextImage(); }}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default ExpoDetail;
