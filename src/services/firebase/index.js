import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCfQJIi9FIMLw1THKPEsrcowDWaYPuEIW0",
  authDomain: "ecommercetelefonos.firebaseapp.com",
  projectId: "ecommercetelefonos",
  storageBucket: "ecommercetelefonos.appspot.com",
  messagingSenderId: "63293507490",
  appId: "1:63293507490:web:892f2ced2ddceb10ef94fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDB = getFirestore(app)