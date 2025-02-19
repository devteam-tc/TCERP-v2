// "use client";
// import { useParams, notFound } from "next/navigation"; // Import useParams
// import { sectionsData } from "../../utils/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import OurPartnerSection from "../../components/OurPartnerSection";
// import AnimatedColumn from "../../components/Home/AnimatedColumn";
// import styles from "./IndustryPage.module.css";
// import Navigation from "../../components/Header/navigation";
// import ElfsightScript from "./ElfsightScript";
// import Footer from "../../components/Footer";
// import PartnershipSection from "../../components/PartnershipSection";

// const IndustryPage = () => {
//   const { slug } = useParams(); // Get slug from useParams
//   const data = sectionsData[slug];

//   if (!data) {
//     return notFound();
//   }

//   return (
//     <>
//       <Navigation />
//       <section className={styles.section}>
//         <div className="container">
//           <AnimatedColumn direction="left">
//             <div>
//               <h2 className={styles.heading}>{data.heading}</h2>
//               <div className={styles.divider}></div>
//               <p className={styles.description}>{data.description}</p>
//             </div>
//           </AnimatedColumn>
//         </div>
//       </section>

//       <div className={styles.bodySection}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8">
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3">
//                 <Image
//                   src={data.top_img}
//                   alt={data.alt_text1}
//                   width={600}
//                   height={400}
//                   className={styles.image}
//                 />
//                 <h1 className={styles.industryTitle}>{data.heading}</h1>
//                 <p className={styles.industryText}>{data.top_description}</p>
//               </div>
//               <div className="border border-1 rounded-3 bg-dark-50 p-3">
//                 <Image
//                   src={data.bottom_img}
//                   alt={data.alt_text2}
//                   width={600}
//                   height={400}
//                   className={styles.image}
//                 />
//                 <h1 className={styles.industryTitle}>{data.subheading}</h1>
//                 <p className={styles.industryText}>{data.bottom_description}</p>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
//                 <h1 className={styles.subTitle}>Similar Industries</h1>
//                 <ul className={styles.similarIndustriesList}>
//                   {data.similar_industries && data.similar_industries.length > 0 ? (
//                     data.similar_industries.map((industry, index) => (
//                       <li key={index} className={styles.similarIndustryItem}>
//                         {/* <Link href={industry.link}>
//                           {industry.title} <FaExternalLinkAlt />
//                         </Link> */}
//                         <Link href={`/industries/${industry.link}`}>
//                           {industry.title} <FaExternalLinkAlt />
//                         </Link>
//                       </li>
//                     ))
//                   ) : (
//                     <p>No similar industries available.</p>
//                   )}
//                 </ul>
//               </div>
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
//                 <div className={styles.contactForm}>
//                   <ElfsightScript />
//                   <div className="elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1" data-elfsight-app-lazy></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="py-3">
//           <PartnershipSection />
//         </div>
//         <div className="py-3">
//           <OurPartnerSection />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default IndustryPage;


// "use client";
// import { useParams, notFound } from "next/navigation"; // Import useParams
// import { sectionsData } from "../../utils/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import OurPartnerSection from "../../components/OurPartnerSection";
// import AnimatedColumn from "../../components/Home/AnimatedColumn";
// import styles from "./industry.module.css";
// import Navigation from "../../components/Header/navigation";
// import ElfsightScript from "./ElfsightScript";
// import Footer from "../../components/Footer";
// import PartnershipSection from "../../components/PartnershipSection";

// const IndustryPage = () => {
//   const { slug } = useParams(); // Get slug from useParams
//   const data = sectionsData[slug];

//   if (!data) {
//     return notFound();
//   }

//   return (
//     <>
//       <Navigation />

//       <section className={styles.section}>
//         <div className="container">
//           <AnimatedColumn direction="left">
//             <div>
//               <h2 className={styles.heading}>{data.heading}</h2>
//               <div className={styles.divider}></div>
//               <p className={styles.description}>{data.description}</p>
//             </div>
//           </AnimatedColumn>
//         </div>
//       </section>

//       <div className={styles.bodySection}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-8">
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3">
//                 <Image
//                   src={data.top_img}
//                   alt={data.alt_text1}
//                   width={600}
//                   height={400}
//                   className={styles.image}
//                 />
//                 <h1 className={styles.industryTitle}>{data.heading}</h1>
//                 <p className={styles.industryText}>{data.top_description}</p>
//               </div>
//               <div className="border border-1 rounded-3 bg-dark-50 p-3">
//                 <Image
//                   src={data.bottom_img}
//                   alt={data.alt_text2}
//                   width={600}
//                   height={400}
//                   className={styles.image}
//                 />
//                 <h1 className={styles.industryTitle}>{data.subheading}</h1>
//                 <p className={styles.industryText}>{data.bottom_description}</p>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
//                 <h1 className={styles.subTitle}>Similar Industries</h1>
//                 <ul className={styles.similarIndustriesList}>
//                   {data.similar_industries && data.similar_industries.length > 0 ? (
//                     data.similar_industries.map((industry, index) => (
//                       <li key={index} className={styles.similarIndustryItem}>
//                         <Link href={industry.link}>
//                           {industry.title} <FaExternalLinkAlt />
//                         </Link>
//                       </li>
//                     ))
//                   ) : (
//                     <p>No similar industries available.</p>
//                   )}
//                 </ul>
//               </div>
//               <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
//                 <div className={styles.contactForm}>
//                   <ElfsightScript />
//                   <div className="elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1" data-elfsight-app-lazy></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="py-3">
//           <PartnershipSection />
//         </div>
//         <div className="py-3">
//           <OurPartnerSection />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default IndustryPage;

import IndustrySchema from "./IndustrySchema";
import { sectionsData } from "../../utils/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import OurPartnerSection from "../../components/OurPartnerSection";
import AnimatedColumn from "../../components/Home/AnimatedColumn";
import styles from "./industry.module.css";
import Navigation from "../../components/Header/navigation";
import metaInfo from "../../utils/metaInfo.json";
import ElfsightScript from "./ElfsightScript";
import Footer from "../../components/Footer";
import PartnershipSection from "../../components/PartnershipSection";

// ✅ Generate Static Paths
export function generateStaticParams() {
  return Object.keys(sectionsData).map((slug) => ({
    slug,
  }));
}

// ✅ Generate Metadata (Only Meta Tags)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const metadata = metaInfo.industries[slug];

  if (!metadata) {
    return {
      title: "Industry Not Found",
      description: "This industry page does not exist.",
      keywords: "not found, industry, missing page",
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://www.techclouderp.com/industries/${slug}`,
      images: [{ url: metadata.imageUrl }],
    },
  };
}

// ✅ Server Component (Static)
export default function IndustryPage({ params }) {
  const { slug } = params;
  const data = sectionsData[slug];

  if (!data) {
    return notFound();
  }

  return (
    <>
      <Navigation />
      <IndustrySchema slug={slug} /> {/* ✅ Load JSON-LD Client Component */}
      <section className={styles.section}>
        <div className="container">
          <AnimatedColumn direction="left">
            <div>
              <h2 className={styles.heading}>{data.heading}</h2>
              <div className={styles.divider}></div>
              <p className={styles.description}>{data.description}</p>
            </div>
          </AnimatedColumn>
        </div>
      </section>

      <div className={styles.bodySection}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3">
                <Image
                  src={data.top_img}
                  alt={data.alt_text1}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <h1 className={styles.industryTitle}>{data.heading}</h1>
                <p className={styles.industryText}>{data.top_description}</p>
              </div>
              <div className="border border-1 rounded-3 bg-dark-50 p-3">
                <Image
                  src={data.bottom_img}
                  alt={data.alt_text2}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <h1 className={styles.industryTitle}>{data.subheading}</h1>
                <p className={styles.industryText}>{data.bottom_description}</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
                <h1 className={styles.subTitle}>Similar Industries</h1>
                <ul className={styles.similarIndustriesList}>
                  {data.similar_industries && data.similar_industries.length > 0 ? (
                    data.similar_industries.map((industry, index) => (
                      <li key={index} className={styles.similarIndustryItem}>
                        <Link href={industry.link}>
                          {industry.title} <FaExternalLinkAlt />
                        </Link>
                      </li>
                    ))
                  ) : (
                    <p>No similar industries available.</p>
                  )}
                </ul>
              </div>
              <div className="border border-1 rounded-3 bg-dark-50 p-3 my-3 shadow-sm">
                <div className={styles.contactForm}>
                  <ElfsightScript />
                  <div className="elfsight-app-781289d2-3d2a-4085-8436-a5eb3b9bf3c1" data-elfsight-app-lazy></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-3">
          <PartnershipSection />
        </div>
        <div className="py-3">
          <OurPartnerSection />
        </div>
      </div>

      <Footer />
    </>
  );
}
