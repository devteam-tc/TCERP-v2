// import {sectionsData} from "../../utils/constants";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import OurPartnerSection from "../../components/OurPartnerSection";
// import AnimatedColumn from "../../components/Home/AnimatedColumn";
// import styles from "./industry.module.css";  // CSS module for styling
// import Navigation from "../../components/Header/navigation";
// // import { metaInfo } from "../../utils/menuData";
// import metaInfo from "../../utils/metaInfo.json";
// import ElfsightScript from "./ElfsightScript";
// import Footer from "../../components/Footer";
// import PartnershipSection from "../../components/PartnershipSection";

// // Generate Static Params
// export function generateStaticParams() {
//   return Object.keys(sectionsData).map((slug) => ({
//     slug,
//   }));
// }

// // Generate Metadata
// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const metadata = metaInfo.industries[slug];

//   if (!metadata) {
//     return {
//       title: "Industry Not Found",
//       description: "This industry page does not exist.",
//       keywords: "not found, industry, missing page",
//     };
//   }

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

// // Industry Page Component
// export default function IndustryPage({ params }) {
//   const { slug } = params;
//   const data = sectionsData[slug];

//   if (!data) {
//     return notFound();
//   }

//   return (
//     <>
//     <Navigation/>
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
//                 <ElfsightScript /> {/* This loads the script separately */}
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
//     <Footer/>
//     </>
//   );
// }












// import { sectionsData } from '../../utils/constants';
// import metaInfo from '../../utils/metaInfo.json';
// import IndustryPage from './IndustryPage';

// // Ensure generateStaticParams is correctly recognized
// export async function generateStaticParams() {
//   if (!sectionsData || typeof sectionsData !== 'object') {
//     console.error("sectionsData is undefined or not an object");
//     return [];
//   }

//   return Object.keys(sectionsData).map((slug) => ({ slug }));
// }

// // Ensure metadata generation works correctly
// export async function generateMetadata({ params }) {
//   const { slug } = params;
  
//   if (!metaInfo || !metaInfo.industries || !metaInfo.industries[slug]) {
//     console.warn(`Metadata not found for slug: ${slug}`);
//     return {
//       title: "Default Title",
//       description: "Default Description",
//       keywords: "default, keywords",
//     };
//   }

//   const metadata = metaInfo.industries[slug];

//   return {
//     title: metadata.title,
//     description: metadata.description,
//     keywords: metadata.keywords,
//   };
// }

// // Ensure the page correctly receives params
// export default function IndustryPageWrapper({ params }) {
//   if (!params || !params.slug) {
//     console.error("Params are missing or invalid");
//     return <div>Error: Invalid Industry Page</div>;
//   }

//   return <IndustryPage slug={params.slug} />;
// }


import {sectionsData} from "../../utils/constants";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import OurPartnerSection from "../../components/OurPartnerSection";
import AnimatedColumn from "../../components/Home/AnimatedColumn";
import styles from "./industry.module.css";  // CSS module for styling
import Navigation from "../../components/Header/navigation";
// import { metaInfo } from "../../utils/menuData";
import metaInfo from "../../utils/metaInfo.json";
import ElfsightScript from "./ElfsightScript";
import Footer from "../../components/Footer";
import PartnershipSection from "../../components/PartnershipSection";

// Generate Static Params
export function generateStaticParams() {
  return Object.keys(sectionsData).map((slug) => ({
    slug,
  }));
}

// Generate Metadata
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
  };
}

export const dynamic = "error"; // Ensures build-time validation
// Industry Page Component
export default function IndustryPage({ params }) {
  const { slug } = params;
  const data = sectionsData[slug];

  if (!data) {
    return notFound();
  }

  return (
    <>
    <Navigation/>
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
                <ElfsightScript /> {/* This loads the script separately */}
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
    <Footer/>
    </>
  );
}