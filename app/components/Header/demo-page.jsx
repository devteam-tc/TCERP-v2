// Import necessary dependencies
"use client"; 
import { useEffect } from 'react';
import styles from './demopage.module.css';
import { Container, Row, Col } from 'react-bootstrap';


const DemoPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className={styles.section}>
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className={styles.heading}>Book A Demo</h2>
              <p className={styles.description}>
                Scheduling a live, personalized product demonstration allows potential customers to explore key features, ask questions, and see firsthand how the solution can meet their unique needs, helping them make confident, informed purchasing decisions.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <Col>
            <div
              className={`calendly-inline-widget ${styles.calendlyWidget}`}
              data-url="https://calendly.com/dvignesh-techclouderp/demo"
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DemoPage;
