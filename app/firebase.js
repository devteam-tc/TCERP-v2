// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI4-jOr-1iW-132_HRX48Ou344_8wrmDI",
  authDomain: "tcerp-v2.firebaseapp.com",
  projectId: "tcerp-v2",
  storageBucket: "tcerp-v2.firebasestorage.app",
  messagingSenderId: "940441400124",
  appId: "1:940441400124:web:9967fa2406819f589d2439",
  measurementId: "G-P3K9TP33XY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);