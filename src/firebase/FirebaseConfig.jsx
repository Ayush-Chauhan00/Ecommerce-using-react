
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdYm3V2XtGrsySvLvjGXwAVzlJ7AdfRnc",
  authDomain: "myfirstreactpro-10135.firebaseapp.com",
  projectId: "myfirstreactpro-10135",
  storageBucket: "myfirstreactpro-10135.appspot.com",
  messagingSenderId: "715388620960",
  appId: "1:715388620960:web:919693ad160aaec41179c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
export const auth = getAuth(app);
