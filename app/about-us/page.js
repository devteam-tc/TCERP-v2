// import Navigation from '../components/Header/navigation'
// import VisionMissionSection from './VisionMissionSection'
// import CoFoundersSection from './CoFoundersSection '
// import WhyTechCloudERP from './WhyTechCloudERP'
// import { Col, Container, Row } from "react-bootstrap";
// import ExpertiseSection from './ExpertiseSection'
// import Services from './Services'
// import CTA from '../components/Home/CTA'
// import OurPartnerSection from '../components/OurPartnerSection'
// import RecordSection from './RecordSection'
// import industrystyles from "../industries/[slug]/industry.module.css"
// import { aboutus_data } from '../utils/constants'
// import Footer from '../components/Footer';
// export default function Page() {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <section className={industrystyles.section}>
//   <Container>
//     <Row>
//       <Col md={6}>
//         <h2 className={industrystyles.heading}>{aboutus_data.about_content.heading}</h2>
//         <div className={industrystyles.divider}></div>
//         <p className={industrystyles.description}>{aboutus_data.about_content.description}</p>
//       </Col>
//     </Row>
//   </Container>
// </section>
//       <main>
//         <VisionMissionSection />
//         <ExpertiseSection />
//         <WhyTechCloudERP />
//         <RecordSection />
//         <Services />
//         <CoFoundersSection />
//         <CTA />
//         <OurPartnerSection />
        
//       </main>
//       <Footer />
//     </div>
//   )
// }

// import Navigation from '../components/Header/navigation';
// import VisionMissionSection from './VisionMissionSection';
// import CoFoundersSection from './CoFoundersSection';
// import WhyTechCloudERP from './WhyTechCloudERP';
// import { Col, Container, Row } from "react-bootstrap";
// import ExpertiseSection from './ExpertiseSection';
// import Services from './Services';
// import CTA from '../components/Home/CTA';
// import OurPartnerSection from '../components/OurPartnerSection';
// import RecordSection from './RecordSection';
// import industrystyles from "../industries/[slug]/industry.module.css";
// import { aboutus_data } from '../utils/constants';
// import Footer from '../components/Footer';
// import Head from 'next/head'; // Import the Head component

import Navigation from '../components/Header/navigation'
import VisionMissionSection from './VisionMissionSection'
import CoFoundersSection from './CoFoundersSection '
import WhyTechCloudERP from './WhyTechCloudERP'
import { Col, Container, Row } from "react-bootstrap";
import ExpertiseSection from './ExpertiseSection'
import Services from './Services'
import CTA from '../components/Home/CTA'
import OurPartnerSection from '../components/OurPartnerSection'
import RecordSection from './RecordSection'
import industrystyles from "../industries/[slug]/industry.module.css"
import { aboutus_data } from '../utils/constants'
import Footer from '../components/Footer';

export const metadata = {
  title: "About Tech Cloud ERP | Leading Cloud-Based ERP Software in India",
  description: "Discover Tech Cloud ERP, a Hyderabad-based company offering scalable and user-friendly cloud ERP solutions to streamline business operations across industries in India.",
  keywords: "ERP software solution in hyderabad, Best ERP Solutions Provider in India, cloud-based ERP solutions provider in India, Manufacturing ERP, Manufacturing Software, Production ERP, Production Software, Manufacturing ERP software,",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      

      <Navigation />

      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{aboutus_data.about_content.heading}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{aboutus_data.about_content.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <VisionMissionSection />
        <ExpertiseSection />
        <WhyTechCloudERP />
        <RecordSection />
        <Services />
        <CoFoundersSection />
        <CTA />
        <OurPartnerSection />
      </main>

      <Footer />
    </div>
  );
}
