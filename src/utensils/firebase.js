// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9RapzKI209duyZVS_Ro7SLszn2_oMxQk",
  authDomain: "netflix-gpt-5a4ff.firebaseapp.com",
  projectId: "netflix-gpt-5a4ff",
  storageBucket: "netflix-gpt-5a4ff.firebasestorage.app",
  messagingSenderId: "293207731382",
  appId: "1:293207731382:web:88661033174aa4c79d0a17",
  measurementId: "G-THYB8Q7QLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();