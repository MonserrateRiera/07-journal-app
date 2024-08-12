// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhHyCKBjFs_ya3IdSY5Yk0JAj4R0uaxCM",
  authDomain: "curs-react-7e6e5.firebaseapp.com",
  projectId: "curs-react-7e6e5",
  storageBucket: "curs-react-7e6e5.appspot.com",
  messagingSenderId: "567293267645",
  appId: "1:567293267645:web:8b551e2ce1e62fe764f1d4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore ( FirebaseApp )