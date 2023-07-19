// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_lTS7qg_ftFfMD_KphkVhEb20L67EqXs",
  authDomain: "react-auth-76a18.firebaseapp.com",
  projectId: "react-auth-76a18",
  storageBucket: "react-auth-76a18.appspot.com",
  messagingSenderId: "753274720234",
  appId: "1:753274720234:web:34c5f17604887852c2ac93",
  measurementId: "G-YRF292GR6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();