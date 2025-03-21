
// app/industries/page.js
export const dynamic = "force-static"; // Ensures this page is statically generated


import { Container, Row, Col } from "react-bootstrap";
import { aboutus_data, industriesDataList } from "../utils/constants";
import Navigation from "../components/Header/navigation";
import Footer from "../components/Footer";
import IndustryList from "./industryList";
import industryStyles from '../industries/[slug]/industry.module.css'

export const metadata = {
  title: "Tech Cloud ERP Industries | All-in-One Solutions for Business Growth",
  description: "Explore Tech Cloud ERP industries to streamline operations, boost efficiency, and drive business growth effectively.",
  
};

export function generateStaticParams() {
  return Object.values(industriesDataList).flat().map((industry) => ({
    slug: industry.slug,
  }));
}

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      <section className={industryStyles.section}>
        <div className="container">
          <h2 className={industryStyles.heading}>{aboutus_data.allindustries.heading}</h2>
          <div className={industryStyles.divider}></div>
          <p className={industryStyles.description}>{aboutus_data.allindustries.description}</p>
        </div>
      </section>

      {[industriesDataList.agricultureList, industriesDataList.fmcgList, industriesDataList.oilandgasList].map((industryList, index) => (
        <IndustryList key={index} industryList={industryList} index={index} />
      ))}

      <Footer />
    </>
  );
}
