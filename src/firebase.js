import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwfp4WWG9iHcr4khNjXKOLhQFb4dOkxuU",
  authDomain: "react-notes-57301.firebaseapp.com",
  projectId: "react-notes-57301",
  storageBucket: "react-notes-57301.appspot.com",
  messagingSenderId: "242826963175",
  appId: "1:242826963175:web:b3ba8b07eb831fbc301a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")