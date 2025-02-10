

import JobDetails from "./JobDetails";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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
