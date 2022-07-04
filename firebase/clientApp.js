// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZCOOWJZl7O4JeOXZU6fOuxDZ-L9Pxwc4",
  authDomain: "code-test-9525a.firebaseapp.com",
  projectId: "code-test-9525a",
  storageBucket: "code-test-9525a.appspot.com",
  messagingSenderId: "124903919118",
  appId: "1:124903919118:web:a66967d0cf748fc0e3765f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
