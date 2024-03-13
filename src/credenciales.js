// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA23YMJeO9Ul-1tKulPj_2sNgHy1UY20E",
  authDomain: "demologin-63a2b.firebaseapp.com",
  projectId: "demologin-63a2b",
  storageBucket: "demologin-63a2b.appspot.com",
  messagingSenderId: "518354703969",
  appId: "1:518354703969:web:b6e7287b8f8766267dfc20"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;