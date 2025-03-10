// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Navigation from "../components/Header/navigation";
// import Footer from "../components/Footer";
// import OurModules from './OurModules';
// import industryStyles from "../industries/[slug]/industry.module.css";
// import { aboutus_data } from '../utils/constants';

// const Modules = ({ service }) => {


//   return (
//     <>
//       <Navigation />
//       <section className={industryStyles.section}>
//         <div className="container">
//           <h2 className={industryStyles.heading}>{aboutus_data.allmodules.heading}</h2>
//           <div className={industryStyles.divider}></div>
//           <p className={industryStyles.description}>{aboutus_data.allmodules.description}</p>
//         </div>
//       </section>
// <OurModules />
     

//       <Footer />
//     </>
//   );
// };

// export default Modules;



import React from "react";
import Navigation from "../components/Header/navigation";
import Footer from "../components/Footer";
import OurModules from './OurModules';
import industryStyles from "../industries/[slug]/industry.module.css";
import { aboutus_data } from '../utils/constants';
import CTA from '../components/Home/CTA';
export const metadata = {
  title: " Powerful ERP Modules for Seamless Business Management",
  description: " Boost efficiency with our ERP modules designed for seamless business management, automation, and real-time insights. Scale your operations effortlessly.",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navigation />
    <section className={industryStyles.section}>
    <div className="container">
          <h2 className={industryStyles.heading}>{aboutus_data.allmodules.heading}</h2>
          <div className={industryStyles.divider}></div>
          <p className={industryStyles.description}>{aboutus_data.allmodules.description}</p>
       </div>
       </section>
      <main>
      <OurModules />
        <CTA />
        
      </main>
      <Footer />
    </div>
  )
}
