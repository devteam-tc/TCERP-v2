// app/careers/page.js (Main Careers Page)
// import CareersList from "./CareersList";
// import { db } from "../firebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// export async function generateStaticParams() {
//   const jobCollection = collection(db, "jobOpenings");
//   const jobSnapshot = await getDocs(jobCollection);
//   return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
// }

// export default function CareersPage() {
//   return <CareersList />;
// }

// app/careers/page.js (Main Careers Page)


// import CareersList from "./CareersList";
// import { db } from "../firebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// export const metadata = {
//   title: "Careers - Join Our Team | Tech Cloud ERP",
//   description: "Explore exciting career opportunities at Tech Cloud ERP. Join our team and grow your career with us.",
//   keywords: "careers, job openings, employment, hiring, work opportunities, tech cloud erp jobs",
// };

// export async function generateStaticParams() {
//   const jobCollection = collection(db, "jobOpenings");
//   const jobSnapshot = await getDocs(jobCollection);
//   return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
// }

// export default function CareersPage() {
//   return <CareersList />;
// }


// import CareersList from "./CareersList";
// import { db } from "../firebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// export const metadata = {
//   title: "Careers - Join Our Team | Tech Cloud ERP",
//   description: "Explore exciting career opportunities at Tech Cloud ERP. Join our team and grow your career with us.",
//   keywords: "careers, job openings, employment, hiring, work opportunities, tech cloud erp jobs",
// };

// export async function generateStaticParams() {
//   const jobCollection = collection(db, "jobOpenings");
//   const jobSnapshot = await getDocs(jobCollection);
//   return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
// }

// export default function CareersPage() {
//   const structuredData = {
//     "@context": "https://schema.org/",
//     "@type": "JobPosting",
//     "title": "Careers",
//     "description": "Join Our Dynamic Team And Be Part Of An Innovative Company. Shape The Future, Grow Professionally, And Inspire Success!",
//     "hiringOrganization": {
//       "@type": "Organization",
//       "name": "Tech Cloud ERP",
//       "sameAs": "https://techclouderp.com/",
//       "logo": "https://techclouderp.com/static/media/tcerplogo.3b11ab040b09729a98e9.webp"
//     },
//     "datePosted": "2025-02-13",
//     "validThrough": "",
//     "jobLocation": {
//       "@type": "Place",
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, Madhapur, VIP Hills",
//         "addressLocality": "Hyderabad",
//         "postalCode": "500081",
//         "addressCountry": "IN"
//       }
//     }
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//       />
//       <CareersList />
//     </>
//   );
// }



import CareersList from "./CareersList";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const metadata = {
  title: "Careers - Join Our Team | Nadisastra",
  description: "Explore exciting career opportunities at Nadisastra. Join our team and grow your career with us.",
  keywords: "careers, job openings, employment, hiring, work opportunities, Nadisastra jobs",
};

export async function generateStaticParams() {
  const jobCollection = collection(db, "jobOpenings");
  const jobSnapshot = await getDocs(jobCollection);
  return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
}

export default function CareersPage() {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "Careers",
    "description": "Join Our Dynamic Team And Be Part Of An Innovative Company. Shape The Future, Grow Professionally, And Inspire Success!",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Nadisastra",
      "sameAs": "https://nadisastra.in/",
      "logo": "https://nadisastra.in/static/media/logo.webp"
    },
    "datePosted": "2025-02-13",
    "validThrough": "",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office Unit No. 705, Jain Sadguru Capital Park, Image Gardens Road, Madhapur, VIP Hills",
        "addressLocality": "Hyderabad",
        "postalCode": "500081",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CareersList />
    </>
  );
}
