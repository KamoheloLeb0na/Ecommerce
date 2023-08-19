// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFIb4SiG_H13RA_pO7cY0ICzvz3jlwo1k",
  authDomain: "lgcsemaths.firebaseapp.com",
  projectId: "lgcsemaths",
  storageBucket: "lgcsemaths.appspot.com",
  messagingSenderId: "397887964574",
  appId: "1:397887964574:web:097dcf805c8053394b828f",
  measurementId: "G-RZX67CBZBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);