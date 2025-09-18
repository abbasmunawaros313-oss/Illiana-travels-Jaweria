// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKCkfz6e5BZjZR3QLN7Eow7XM0nDuKr4U",
  authDomain: "illiana-travels-jaweria.firebaseapp.com",
  projectId: "illiana-travels-jaweria",
  storageBucket: "illiana-travels-jaweria.firebasestorage.app",
  messagingSenderId: "585483485041",
  appId: "1:585483485041:web:3389049b30e7c0d7d500d0",
  measurementId: "G-55739L3TS7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
