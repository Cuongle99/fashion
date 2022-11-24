// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQ3yzN9nIF2DNVisudN5zYdqI_evNba4",
  authDomain: "fashion-store-c48a2.firebaseapp.com",
  databaseURL: "https://fashion-store-c48a2-default-rtdb.firebaseio.com",
  projectId: "fashion-store-c48a2",
  storageBucket: "fashion-store-c48a2.appspot.com",
  messagingSenderId: "83068559590",
  appId: "1:83068559590:web:461d7c1972660c84995b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);