// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8TlVkLVqM4PxYVLm2jKVex0O9VE61B7k",
  authDomain: "oto-project-ae447.firebaseapp.com",
  projectId: "oto-project-ae447",
  storageBucket: "oto-project-ae447.appspot.com",
  messagingSenderId: "168135842224",
  appId: "1:168135842224:web:76590c60b826b37b2d9e75",
  measurementId: "G-B9BQSXXCZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
