// import Navigation from '../components/Header/navigation'
// import Form from '../contact-us/Form'
// import Footer from '../components/Footer';
// import MapSection from './MapSection'
// import { Col, Container, Row } from "react-bootstrap";
// import industrystyles from "../industries/[slug]/industry.module.css"
// import { aboutus_data } from '../utils/constants'


// export default function Page() {
//   // Meta information for the page


//   return (
//     <>

//       <Navigation />
//       <section className={industrystyles.section}>
//         <Container>
//           <Row>
//             <Col md={6}>
//               <h2 className={industrystyles.heading}>{aboutus_data.ContactUs_content.heading}</h2>
//               <div className={industrystyles.divider}></div>
//               <p className={industrystyles.description}>{aboutus_data.ContactUs_content.description}</p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <main>
//         <Form />
//         <MapSection />
//       </main>

//       <Footer />
//     </>
//   );
// }


import Navigation from "../components/Header/navigation";
import Form from "../contact-us/Form";
import Footer from "../components/Footer";
import MapSection from "./MapSection";
import { Col, Container, Row } from "react-bootstrap";
import industrystyles from "../industries/[slug]/industry.module.css";
import { aboutus_data } from "../utils/constants";

// Metadata for the Contact Us Page
export const metadata = {
  title: "Contact Us | Tech Cloud ERP - Get in Touch",
  description:
    "Contact Tech Cloud ERP for inquiries, support, and business solutions. Reach out to us for the best cloud-based ERP software solutions.",
  keywords: [
    "Tech Cloud ERP",
    "Contact Tech Cloud ERP",
    "ERP Software Support",
    "Cloud ERP Solutions",
    "Best ERP Software",
    "Enterprise Resource Planning",
    "ERP System Inquiry",
    "Tech Cloud Contact",
    "Business Management Software",
    "Cloud ERP Consultation"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Contact Us | Tech Cloud ERP - Get in Touch",
    description:
      "Contact Tech Cloud ERP for inquiries, support, and business solutions. Reach out to us for the best cloud-based ERP software solutions.",
    url: "https://www.techclouderp.com/contact-us",
    type: "website",
    siteName: "Tech Cloud ERP",
  },
  alternates: {
    canonical: "https://www.techclouderp.com/contact-us",
  },
};

export default function Page() {
  return (
    <>
      <Navigation />
      <section className={industrystyles.section}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className={industrystyles.heading}>{aboutus_data.ContactUs_content.heading}</h2>
              <div className={industrystyles.divider}></div>
              <p className={industrystyles.description}>{aboutus_data.ContactUs_content.description}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <Form />
        <MapSection />
      </main>

      <Footer />
    </>
  );
}
