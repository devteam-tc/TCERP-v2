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

// Meta information for the About Us page
const metaInfo = {
  title: "About Us | Tech Cloud ERP",
  description: "Learn about Tech Cloud ERP, our mission, our team, and our innovative solutions designed to take your business to the next level.",
  keywords: "about us, tech cloud erp, business solutions, company mission"
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
