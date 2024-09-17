// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu_q3OkTCExO5-Nf81GMwOgd0EUrcn9WI",
  authDomain: "project-8189948330705843250.firebaseapp.com",
  projectId: "project-8189948330705843250",
  storageBucket: "project-8189948330705843250.appspot.com",
  messagingSenderId: "480993890178",
  appId: "1:480993890178:web:c902281ff44150cee9899b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);