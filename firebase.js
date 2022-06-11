import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAu4yKFp8RhDE3YH4bQaMZZMb26x3kk6eU",
  authDomain: "photos-736ed.firebaseapp.com",
  projectId: "photos-736ed",
  storageBucket: "photos-736ed.appspot.com",
  messagingSenderId: "663190572527",
  appId: "1:663190572527:web:a59db5bf45b846140eba1a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
