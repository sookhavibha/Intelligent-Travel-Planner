// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_l0kLBGhJSlolLHfHAdH53Q8ULbp6FeQ",
  authDomain: "ai-travel-planner-5e0ed.firebaseapp.com",
  projectId: "ai-travel-planner-5e0ed",
  storageBucket: "ai-travel-planner-5e0ed.firebasestorage.app",
  messagingSenderId: "123864385198",
  appId: "1:123864385198:web:46ba8fedbeaf5321a10f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);