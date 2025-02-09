// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyVpQRBMqsu2J64awi1-l7bwgBNwAKCnE",
  authDomain: "rn-test-61482.firebaseapp.com",
  projectId: "rn-test-61482",
  storageBucket: "rn-test-61482.firebasestorage.app",
  messagingSenderId: "343754057245",
  appId: "1:343754057245:web:270b3a6b6fc88ed18fc8f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);