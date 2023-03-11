import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkkKHwsqte8FOx-S88xxfm8YoAtIq8ayw",
  authDomain: "loc123-dcc6d.firebaseapp.com",
  projectId: "loc123-dcc6d",
  storageBucket: "loc123-dcc6d.appspot.com",
  messagingSenderId: "235651945577",
  appId: "1:235651945577:web:88ace453265db74499bef8"
};

export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
export const storage=getStorage(app);
