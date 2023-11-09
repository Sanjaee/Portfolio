// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjvvFv8PEp3WMsAhLEUiprhqcxVwXQSnY",
  authDomain: "dataportfolio-d9d32.firebaseapp.com",
  projectId: "dataportfolio-d9d32",
  storageBucket: "dataportfolio-d9d32.appspot.com",
  messagingSenderId: "659514239694",
  appId: "1:659514239694:web:77f28a34d1c268a61dbe9f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
