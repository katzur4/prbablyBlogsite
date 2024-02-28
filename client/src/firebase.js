// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "probablyblogging.firebaseapp.com",
  projectId: "probablyblogging",
  storageBucket: "probablyblogging.appspot.com",
  messagingSenderId: "848120306643",
  appId: "1:848120306643:web:dca4ad3e199ad516ed2d26",
  measurementId: "G-3F84ZSQVJK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

