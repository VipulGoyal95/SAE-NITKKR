// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDofWRe9YtXqbu2oHqNtn19BX9pqhh0Rvo",
  authDomain: "sae-nitkkr.firebaseapp.com",
  projectId: "sae-nitkkr",
  storageBucket: "sae-nitkkr.firebasestorage.app",
  messagingSenderId: "586724534462",
  appId: "1:586724534462:web:5d99b13d00e555c3f2d6ef",
  measurementId: "G-22YB9Y5DGZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;
