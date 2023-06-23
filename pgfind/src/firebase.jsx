// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByrkNecKIpGd7q5swIgfysgBcdVhYRa0s",
  authDomain: "nightscholar-bba3d.firebaseapp.com",
  projectId: "nightscholar-bba3d",
  storageBucket: "nightscholar-bba3d.appspot.com",
  messagingSenderId: "998211092175",
  appId: "1:998211092175:web:b8a4f4fa8aceac1f39c1ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const database = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase();