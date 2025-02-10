import ExpoDetails from "../ExpoDetail";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function generateStaticParams() {
  const expoCollection = collection(db, "expoDetails");
  const expoDocs = await getDocs(expoCollection);

  return expoDocs.docs.map((doc) => ({
    id: doc.id,
  }));
}

const ExpoPage = ({ params }) => {
  return <ExpoDetails expoId={params.id} />;
};

export default ExpoPage;
