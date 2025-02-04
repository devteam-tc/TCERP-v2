import Footer from "../components/Footer";
import Navigation from "../components/Header/navigation";
import styles from '../styles/about.module.css';

export const metadata = {
      title: "About Tech Cloud ERP | Leading Cloud-Based ERP Solutions in India",
      description: "Discover Tech Cloud ERP, a Hyderabad-based company offering scalable and user-friendly cloud ERP solutions to streamline business operations across industries in India.",
      keywords: "ERP software solution in hyderabad, Best ERP Solutions Provider in India, cloud-based ERP solutions provider in India, Manufacturing ERP, Manufacturing Software, Production ERP, Production Software, Manufacturing ERP software, Production ERP software"
}

export default function about() {
    return (
        <main className={styles.main}>
        <Navigation />
        
        <Footer />
    </main>
    );
}