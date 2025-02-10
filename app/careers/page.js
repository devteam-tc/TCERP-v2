// app/careers/page.js (Main Careers Page)
import CareersList from "./CareersList";
import { db } from "../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

export async function generateStaticParams() {
  const jobCollection = collection(db, "jobOpenings");
  const jobSnapshot = await getDocs(jobCollection);
  return jobSnapshot.docs.map((doc) => ({ id: doc.id }));
}

export default function CareersPage() {
  return <CareersList />;
}