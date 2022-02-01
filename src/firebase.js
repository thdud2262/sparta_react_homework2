// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEMkPaat-cZmzkJcbqTpni_wa6j1RoMOQ",
  authDomain: "homepj2-3919b.firebaseapp.com",
  projectId: "homepj2-3919b",
  storageBucket: "homepj2-3919b.appspot.com",
  messagingSenderId: "229024218893",
  appId: "1:229024218893:web:9dc73990682be5a96f7a44",
  measurementId: "G-G4XNLN0S6Q"
};

// Initialize Firebase 
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const db = getFirestore();


export { db }
