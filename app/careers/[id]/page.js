

// import JobDetails from "./JobDetails";
// import { db } from "../../firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

// export async function generateStaticParams() {
//   const jobsCollection = collection(db, "jobOpenings");
//   const jobDocs = await getDocs(jobsCollection);

//   return jobDocs.docs.map((doc) => ({
//     id: doc.id,
//   }));
// }

// const JobPage = ({ params }) => {
//   return <JobDetails jobId={params.id} />;
// };

// export default JobPage;

// app/careers/[id]/page.js
import JobDetails from "./JobDetails";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function generateMetadata({ params }) {
  const jobDocRef = doc(db, "jobOpenings", params.id);
  const jobDoc = await getDoc(jobDocRef);

  if (!jobDoc.exists()) {
    return {
      title: "Job Not Found | Tech Cloud ERP",
      description: "The job listing you are looking for does not exist.",
      keywords: "job not found, careers, tech cloud erp jobs",
    };
  }

  const jobData = jobDoc.data();

  return {
    title: `${jobData.title} - Careers at Tech Cloud ERP`,
    description: `Join Tech Cloud ERP as a ${jobData.title}. ${jobData.description?.slice(0, 150)}...`,
    keywords: `${jobData.title}, careers, job openings, hiring, work opportunities, tech cloud erp jobs`,
  };
}

export async function generateStaticParams() {
  const jobsCollection = collection(db, "jobOpenings");
  const jobDocs = await getDocs(jobsCollection);

  return jobDocs.docs.map((doc) => ({
    id: doc.id,
  }));
}

const JobPage = ({ params }) => {
  return <JobDetails jobId={params.id} />;
};

export default JobPage;

