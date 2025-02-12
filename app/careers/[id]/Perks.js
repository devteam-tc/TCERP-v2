import { faBirthdayCake, faChartLine, faDollarSign, faHandsHelping, faIdBadge, faMoneyBillWave, faTools, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Perks.module.css';

const perks = [
  { icon: faTrophy, color: '#f7c948', title: 'Performance Appreciation Rewards' },
  { icon: faIdBadge, color: '#a78bfa', title: 'Employee First Policy' },
  { icon: faMoneyBillWave, color: '#a78bfa', title: 'Leave Encashment' },
  { icon: faChartLine, color: '#38bdf8', title: 'Career Growth Opportunity' },
  { icon: faDollarSign, color: '#f87171', title: 'Competitive Salary Package' },
  { icon: faBirthdayCake, color: '#38bdf8', title: 'Festival & Work Anniversary Celebration' },
  { icon: faTools, color: '#a78bfa', title: 'Access to the Latest Tools' },
  { icon: faHandsHelping, color: '#f7c948', title: 'Employee Assistance Programme' },
];

const Perks = () => {
  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.perksTitle}>
          Perks Of Working With <span>Tech Cloud ERP</span>
        </h1>
        <div className={styles.divider}></div>
        <p className={styles.subtitle}>
          At Tech Cloud ERP, we prioritize our employees beliefs and respect their individual decisions. Our platform encourages showcasing individual skills, fostering creativity and innovation. We believe in the unique potential of each team member to contribute to our collective success.
        </p>
        <Row className="justify-content-center">
          {perks.map((perk, index) => (
            <Col key={index} md={6}>
              <div className={styles.perkCard}>
                <FontAwesomeIcon icon={perk.icon} style={{ color: perk.color }} className={styles.icon} />
                <div className={styles.perkTitle}>{perk.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Perks;
