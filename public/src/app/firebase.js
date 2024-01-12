// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoyXbEsKBmSfYJ43omZxJ7m07oZgpiLnY",
  authDomain: "omemwebsite.firebaseapp.com",
  projectId: "omemwebsite",
  storageBucket: "omemwebsite.appspot.com",
  messagingSenderId: "988708156371",
  appId: "1:988708156371:web:c0d4874b4b977bb6ee7526",
  measurementId: "G-SPZBKBHYTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);