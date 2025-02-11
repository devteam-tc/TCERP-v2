import React from 'react';
import { termsAndConditionsData, aboutus_data } from '../utils/constants';
import { Container, Row } from 'react-bootstrap';
import styles from './TermsPage.module.css';

const TermsAndConditions = () => {
  const { heading, description } = aboutus_data.termsAndConditionscontent;

  return (
    <>
     
      <Container className={`${styles.styledContainer} privacy-policy`}>
        <h2 className={styles.styledHeading}>{termsAndConditionsData.title}</h2>
        <p>
          <em>{termsAndConditionsData.introduction}</em>
        </p>
        <h2 className={styles.styledListHeading}>
          Surfing this website is subject to the following terms of use:
        </h2>
        <ul>
          {termsAndConditionsData.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default TermsAndConditions;
