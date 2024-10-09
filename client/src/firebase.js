// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "project-f9463.firebaseapp.com",
  projectId: "project-f9463",
  storageBucket: "project-f9463.appspot.com",
  messagingSenderId: "232372983110",
  appId: "1:232372983110:web:dbed35a5469281b6ab0147",
  measurementId: "G-995V72NE3G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 