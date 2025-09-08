// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCxT4BPuXat-uTxtngwTN2T80DWB-hBLfU",
  authDomain: "ai-mock-interview-875b3.firebaseapp.com",
  projectId: "ai-mock-interview-875b3",
  storageBucket: "ai-mock-interview-875b3.firebasestorage.app",
  messagingSenderId: "124083891193",
  appId: "1:124083891193:web:9c34eb9b09b58c11eaab28",
  measurementId: "G-QZYKKEEMB4"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);