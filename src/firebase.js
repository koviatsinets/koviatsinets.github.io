import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFrZiCcp3XAbpgVpcTDsyKR9P-sHh6lg0",
  authDomain: "react-lego-store.firebaseapp.com",
  databaseURL: "https://react-lego-store-default-rtdb.firebaseio.com",
  projectId: "react-lego-store",
  storageBucket: "react-lego-store.appspot.com",
  messagingSenderId: "668704915915",
  appId: "1:668704915915:web:49070a1d4b585a37d2b64e",
  measurementId: "G-GP510SLHEM"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

