// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_API_KEY,
//   authDomain: process.env.NEXT_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PROJECT_ID,
//   storageBucket: process.env.NEXT_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_APP_ID,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_API_KEY,
  authDomain: process.env.NEXT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
