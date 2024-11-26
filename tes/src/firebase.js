// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqO51orcZhwtqx0tkbimN-kY47Dg2qyEI",
  authDomain: "sample-nov-24.firebaseapp.com",
  projectId: "sample-nov-24",
  storageBucket: "sample-nov-24.firebasestorage.app",
  messagingSenderId: "462537260432",
  appId: "1:462537260432:web:d669e620bf48276c438715",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
