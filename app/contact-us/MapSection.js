import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { regions } from '../utils/constants';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import styles from './MapSection.module.css'; // Import the CSS module

const MapSection = () => {
  return (
    <Container>
      <h2 className={`${styles.styledTitle} text-center pt-4 pt-md-0`}>Our Locations</h2>
      {regions.map((region, regionIndex) => (
        <div key={regionIndex}>
          <Row className="mb-3">
            {region.cities.map((city, index) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={3} key={index} className="mt-3">
                <div className={styles.styledMap}>
                  <iframe
                    title={`Map of ${city.name}`}
                    src={city.mapSrc}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <h5 className='mt-2'>{city.name}</h5>
                  <div className={styles.cityInfo}>
                    <div className={styles.infoItem}>
                      <FaMapMarkerAlt className={styles.icon} /> <span>{city.address}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FaEnvelope className={styles.icon} /> <span>{city.email}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FaPhoneAlt className={styles.icon} /> <span>{city.phone}</span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default MapSection;
