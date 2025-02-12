// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebaseConfig'; // Adjust path as needed
// import AnimatedSection from '../components/Home/AnimatedSection';
// import styles from './Testimonials.module.css';

// const Testimonials = () => {
//   const [testimonialsData, setTestimonialsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'testimonials'));
//         const testimonials = querySnapshot.docs.map((doc) => doc.data());
//         setTestimonialsData(testimonials);
//       } catch (error) {
//         console.error('Error fetching testimonials:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTestimonials();
//   }, []);

//   const handleSelect = (selectedIndex) => {
//     const lastIndex = testimonialsData.length - 1;
//     if (selectedIndex < 0) {
//       setIndex(lastIndex);
//     } else if (selectedIndex > lastIndex) {
//       setIndex(0);
//     } else {
//       setIndex(selectedIndex);
//     }
//   };

//   if (loading) return <p>Loading testimonials...</p>;

//   return (
//     <Container className="text-center w-100 w-md-50 p-md-5">
//       <AnimatedSection id="hero" className="animated-section">
//         <h3 className={styles.title}>Testimonials</h3>
//         <div className={styles.gradientContainer}>
//           <Card className={styles.styledCard}>
//             <Card.Body className={styles.styledCardBody}>
//               <div className={styles.carouselWrapper}>
//                 <Carousel
//                   activeIndex={index}
//                   onSelect={handleSelect}
//                   indicators={false}
//                   controls={false}
//                   variant="dark"
//                 >
//                   {testimonialsData.map((testimonial, idx) => (
//                     <Carousel.Item key={idx} className={styles.styledCarouselItem}>
//                       <Row className="d-flex justify-content-center">
//                         <Col md={12} className={styles.testimonialBox}>
//                           <p className={styles.testimonialText}>{testimonial.testimonial}</p>
//                           <div className={styles.carouselControls}>
//                             <button onClick={() => handleSelect(index - 1)} disabled={index === 0}>
//                               &#8592;
//                             </button>
//                             <div className={styles.testimonialAuthor}>
//                               <h4>{testimonial.name}</h4>
//                             </div>
//                             <button
//                               onClick={() => handleSelect(index + 1)}
//                               disabled={index === testimonialsData.length - 1}
//                             >
//                               &#8594;
//                             </button>
//                           </div>
//                         </Col>
//                       </Row>
//                     </Carousel.Item>
//                   ))}
//                 </Carousel>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </AnimatedSection>
//     </Container>
//   );
// };

// export default Testimonials;


'use client';

import React, { useState, useEffect } from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Adjust path as needed
import AnimatedSection from '../components/Home/AnimatedSection';
import styles from './Testimonials.module.css';

const Shimmer = () => (
  <div className={styles.shimmerWrapper}>
    <div className={styles.shimmerBox}></div>
    <div className={styles.shimmerText}></div>
    <div className={styles.shimmerText}></div>
  </div>
);

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        const testimonials = querySnapshot.docs.map((doc) => doc.data());
        setTestimonialsData(testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <Container className="text-center w-100 w-md-50 p-md-5">
      <AnimatedSection id="hero" className="animated-section">
        <h3 className={styles.title}>Testimonials</h3>
        <div className={styles.gradientContainer}>
          <Card className={styles.styledCard}>
            <Card.Body className={styles.styledCardBody}>
              <div className={styles.carouselWrapper}>
                {loading ? (
                  <Shimmer />
                ) : (
                  <Carousel
                    activeIndex={index}
                    onSelect={(selectedIndex) => setIndex(selectedIndex)}
                    indicators={false}
                    controls={false}
                    variant="dark"
                  >
                    {testimonialsData.map((testimonial, idx) => (
                      <Carousel.Item key={idx} className={styles.styledCarouselItem}>
                        <Row className="d-flex justify-content-center">
                          <Col md={12} className={styles.testimonialBox}>
                            <p className={styles.testimonialText}>{testimonial.testimonial}</p>
                            <div className={styles.carouselControls}>
                              <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
                                &#8592;
                              </button>
                              <div className={styles.testimonialAuthor}>
                                <h4>{testimonial.name}</h4>
                              </div>
                              <button
                                onClick={() => setIndex(index + 1)}
                                disabled={index === testimonialsData.length - 1}
                              >
                                &#8594;
                              </button>
                            </div>
                          </Col>
                        </Row>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      </AnimatedSection>
    </Container>
  );
};

export default Testimonials;
