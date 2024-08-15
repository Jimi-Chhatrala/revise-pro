// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWaxzX70ty4dwXQXpAYFXQ3teIpx_iDmQ",
  authDomain: "revise-pro.firebaseapp.com",
  projectId: "revise-pro",
  storageBucket: "revise-pro.appspot.com",
  messagingSenderId: "1024657840921",
  appId: "1:1024657840921:web:1e5fe75b58cca0f972c388",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
