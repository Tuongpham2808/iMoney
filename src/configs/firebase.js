// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsO57Cp3h4PzabWsF4PM1BSCM1_UKm9P0",
  authDomain: "imoney-f6c37.firebaseapp.com",
  projectId: "imoney-f6c37",
  storageBucket: "imoney-f6c37.appspot.com",
  messagingSenderId: "808629562077",
  appId: "1:808629562077:web:a911d20a3bfb8d145f4934",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectAuth = getAuth(app);
const projectFirestore = getFirestore(app);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectAuth, projectFirestore, timestamp };
