"use client";
import { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { db } from '../firebaseConfig'; // Firebase setup
import { getDocs, collection, addDoc } from 'firebase/firestore'; 
// import { Section } from '../IndustryPage';
// import Perks from './Perks';
import industryStyles from '../industries/[slug]/industry.module.css';
import styles from './CareersList.module.css';
import Navigation from '../components/Header/navigation';
import Footer from '../components/footer';
import Perks from './[id]/Perks';

const CareersList = () => {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [alertData, setAlertData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null,
  });
  const router = useRouter();

  // Fetching jobs from Firestore
  useEffect(() => {
    const fetchJobs = async () => {
      const jobCollection = collection(db, 'jobOpenings');
      const jobSnapshot = await getDocs(jobCollection);
      const jobs = jobSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobOpenings(jobs);
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (jobId) => {
    router.push(`/careers/${jobId}`);
  };

  const handleAlertChange = (e) => {
    const { name, value, files } = e.target;
    setAlertData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleAlertSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add alert data to Firestore
      const jobAlertCollection = collection(db, 'jobAlerts');
      await addDoc(jobAlertCollection, {
        name: alertData.name,
        email: alertData.email,
        phone: alertData.phone,
        position: alertData.position,
        resume: alertData.resume ? alertData.resume.name : '', // Optional: handle file storage separately if needed
      });

      alert('Job alert created successfully!');
      setAlertData({ name: '', email: '', phone: '', position: '', resume: null });
    } catch (error) {
      console.error("Error adding job alert: ", error);
      alert('Error creating job alert. Please try again.');
    }
  };

  return (
    <>
    <Navigation/>
    <div>
      <div className={industryStyles.section}>
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Join Our Team</h1>
              <p>Join Our Dynamic Team And Be Part Of An Innovative Company. Shape The Future, Grow Professionally, And Inspire Success!</p>
            </Col>
          </Row>
        </Container>
      </div>

      <section className={styles.currentOpeningsSection}>
        <Container>
          <h2 className='m-5'>Current Openings</h2>
          <Row>
            {jobOpenings.map((job) => (
              <Col md={6} xl={4} key={job.id}>
                <div className={styles.jobCard}>
                  <div className='d-flex align-items-center'>
                    <img src={job.imageURL} height="100" alt={`${job.title} Icon`} />
                    <h5>{job.title}</h5>
                  </div>
                  <div className='text-start'>
                  <p className='fs-6'><strong>Experience:</strong> {job.experience}</p>
                  <p className='fs-6'><strong>Location:</strong> {job.location}</p>
                  <p className='fs-6'><strong>Work Mode:</strong> {job.workMode}</p>
                  </div>
                  <Button style={{backgroundColor: '#ef5226', border: 'none'}} onClick={() => handleApplyNow(job.id)}>Apply Now</Button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* <Perks/> */}
      <section className={styles.customJobAlertSection}>
        <Container>
          <Row style={{boxShadow:'rgba(173, 216, 230, 0.5) 0px 10px 20px, rgba(173, 216, 230, 0.7) 0px 6px 6px', borderRadius: '10px'}}>
            <Col md={5} className='p-0'>
              <img className={styles.styledImage} src="https://storage.googleapis.com/a1aa/image/StViV5aM4pLiCNRrd1IiukR76pZRTzpUnZefOsfX0Nz8W0bnA.jpg" alt="People walking in business attire"/>
            </Col>
            <Col md={7} style={{padding: '20px', marginTop: '2vh'}}> 
              <h1>Seeking A New Role? <br/><span>Create A Custom </span> <br/> <span>Job Alert Now!</span></h1>
              <Form onSubmit={handleAlertSubmit} >
                <Form.Control
                  type="text"
                  placeholder="Name *"
                  name="name"
                  value={alertData.name}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="email"
                  placeholder="E-mail *"
                  name="email"
                  value={alertData.email}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Phone number *"
                  name="phone"
                  value={alertData.phone}
                  onChange={handleAlertChange}
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="Applying for Position (optional)"
                  name="position"
                  value={alertData.position}
                  onChange={handleAlertChange}
                />
                <Button type="submit" style={{backgroundColor: '#EF5226', border: 'none'}}>Apply Now</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* PerksSection as before */}
    </div>
    <Perks/>
    <Footer/>
    </>
  );
};

export default CareersList;