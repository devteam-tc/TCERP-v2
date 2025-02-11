import React from 'react';
import styles from './PrivacyPage.module.css'; // Import module CSS
import { aboutus_data } from '../utils/constants';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { privacyPolicyData } from '../utils/constants';

const PrivacyPage = () => {
  return (
    <Container className={styles.privacyPolicy}>
      <Row>
        <Col>
          <Card>
            <div className="card-body">
              <h2 className={`mt-4 mb-4 ${styles.changetext}`}>{privacyPolicyData.title}</h2>
              <p>
                <em>{privacyPolicyData.introduction}</em>
              </p>
              <strong>{privacyPolicyData.dataCollection.title}</strong>
              <p>{privacyPolicyData.dataCollection.description}</p>
              <ul>
                {privacyPolicyData.dataCollection.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p>{privacyPolicyData.dataSecurity.content}</p>
              <strong>{privacyPolicyData.changesPolicy.title}</strong>
              <p>{privacyPolicyData.changesPolicy.content}</p>
              <strong>{privacyPolicyData.contactDetails.title}</strong>
              <p>{privacyPolicyData.contactDetails.content}</p>
              <strong>{privacyPolicyData.termsConditions.title}</strong>
              <p>{privacyPolicyData.termsConditions.content}</p>
              <p className={styles.note}>
                <strong>{privacyPolicyData.note}</strong>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPage;
