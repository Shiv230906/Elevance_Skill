// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzH_SOQor9cF-BxjN1d_ihHJgsG6Zx8RQ",
  authDomain: "internarea-22400.firebaseapp.com",
  projectId: "internarea-22400",
  storageBucket: "internarea-22400.firebasestorage.app",
  messagingSenderId: "752686882517",
  appId: "1:752686882517:web:3a84e042a7503c4aac4c5c",
  measurementId: "G-PXP8PBHDZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };