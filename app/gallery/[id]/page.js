import ExpoDetail from "../ExpoDetail";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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

const ExpoPage = ({ params }) => {
  return <ExpoDetail id={params.id} />; // Ensure ExpoDetail receives the id prop correctly
};

export default ExpoPage;
