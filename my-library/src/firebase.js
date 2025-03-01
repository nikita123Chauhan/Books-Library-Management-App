// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Changed from database to firestore

const firebaseConfig = {
  apiKey: "AIzaSyCJnzGS5RQbF35zKqePs-8iOrlI7ujQErU",
  authDomain: "library-app-1aad2.firebaseapp.com",
  projectId: "library-app-1aad2",
  storageBucket: "library-app-1aad2.appspot.com",
  messagingSenderId: "95599934141",
  appId: "1:95599934141:web:1198683d01807a8047d5d4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Changed from database to firestore
export default app;