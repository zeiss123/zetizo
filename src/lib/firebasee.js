// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgKCNGV48yd0uH9AizELKmwnm7WQhxL4Q",
  authDomain: "zetizo.firebaseapp.com",
  projectId: "zetizo",
  storageBucket: "zetizo.firebasestorage.app",
  messagingSenderId: "979507472726",
  appId: "1:979507472726:web:02520123357e853c060ef7",
  measurementId: "G-KQSE14S6LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);