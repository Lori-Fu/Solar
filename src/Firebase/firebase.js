// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_PJRNBK6oqlRyIbvwFk7WpwKjTumlO6U",
  authDomain: "solar-ea50f.firebaseapp.com",
  projectId: "solar-ea50f",
  storageBucket: "solar-ea50f.appspot.com",
  messagingSenderId: "199998535095",
  appId: "1:199998535095:web:b7924349d2f60c786b2432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Userinfodb = getFirestore(app);
