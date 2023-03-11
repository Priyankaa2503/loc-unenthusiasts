import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXqOwlBV9_OniO5XTrf8BKAxEaqC9e7s4",
  authDomain: "linesofcode-57faa.firebaseapp.com",
  projectId: "linesofcode-57faa",
  storageBucket: "linesofcode-57faa.appspot.com",
  messagingSenderId: "961556114715",
  appId: "1:961556114715:web:1e1be322141a96feb3f7be"
};

export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
export const storage=getStorage(app);
