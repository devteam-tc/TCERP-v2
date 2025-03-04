import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getRemoteConfig } from "firebase/remote-config";
import { getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Ln4ByzURA8drIrvka2PYQbPRF_NbVAw",
  authDomain: "tech-cloud-erp-1532582683650.firebaseapp.com",
  databaseURL: "https://tech-cloud-erp-1532582683650.firebaseio.com",
  projectId: "tech-cloud-erp-1532582683650",
  storageBucket: "tech-cloud-erp-1532582683650.appspot.com",
  messagingSenderId: "595044081279",
  appId: "1:595044081279:web:3320af7c412fbc33bb694a",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Initialize Analytics (only in client-side)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { analytics };
