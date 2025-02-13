
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  try {
    const expoCollection = collection(db, "expoDetails");
    const expoDocs = await getDocs(expoCollection);

    return expoDocs.docs.map((doc) => ({
      id: doc.id, // Ensure the ID is correctly formatted
    }));
  } catch (error) {
    console.error("Error fetching expo details:", error);
    return [];
  }
}

// Lazy load ExpoDetail
const ExpoDetail = dynamic(() => import("../ExpoDetail"));


const ExpoPage = ({ params }) => {
  return <ExpoDetail id={params.id} />; // Ensure ExpoDetail receives the id prop correctly
};

export default ExpoPage;
