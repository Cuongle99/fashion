// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfDICxp7oBAuvGTFdBz9B3cnqRKKGbf6c",
  authDomain: "fashion-43836.firebaseapp.com",
  databaseURL: "https://fashion-43836-default-rtdb.firebaseio.com",
  projectId: "fashion-43836",
  storageBucket: "fashion-43836.appspot.com",
  messagingSenderId: "278542018282",
  appId: "1:278542018282:web:54bf69ee3a4337881d5993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);


