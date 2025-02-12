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
import CareersList from "./CareersList";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export const metadata = {
  title: "Careers - Join Our Team | Tech Cloud ERP",
  description: "Explore exciting career opportunities at Tech Cloud ERP. Join our team and grow your career with us.",
  keywords: "careers, job openings, employment, hiring, work opportunities, tech cloud erp jobs",
};

export async function generateStaticParams() {
  const jobCollection = collection(db, "jobOpenings");
  const jobSnapshot = await getDocs(jobCollection);
  return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
}

export default function CareersPage() {
  return <CareersList />;
}
