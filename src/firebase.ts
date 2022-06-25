// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Q4rMeULYfncnkkPkpb06-uHpIAJqKLQ",
  authDomain: "augmented-world-cae2b.firebaseapp.com",
  projectId: "augmented-world-cae2b",
  storageBucket: "augmented-world-cae2b.appspot.com",
  messagingSenderId: "715184466036",
  appId: "1:715184466036:web:1f6a81bb6986aa947f8921",
  measurementId: "G-FM78H2XFX3"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;