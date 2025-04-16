import CareersList from "./CareersList";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const metadata = {
  title: "Careers - Join Our Team | Tech Cloud ERP",
  description: "Explore exciting career opportunities at Tech Cloud ERP. Join our team and grow your career with us.",
  keywords: "careers, job openings, employment, hiring, work opportunities, Tech Cloud ERP jobs",
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
      "name": "Tech Cloud ERP",
      "sameAs": "https://www.techclouderp.com/",
      "logo": "https://www.techclouderp.com/static/media/tcerplogo.3b11ab040b09729a98e9.webp"
    },
    "datePosted": "2025-02-13",
    "validThrough": "2025-12-31", // Set an expiration date or remove this key if not needed
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No. 241, 3rd Floor, VVG Elite Developers, Kavuri Hills, Phase - 2",
        "addressLocality": "Hyderabad",
        "postalCode": "500081",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      {/* Inject Structured Data */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      {/* Careers List Component */}
      <CareersList />
    </>
  );
}
