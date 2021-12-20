import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB78ivCQbBNwvq09h13HpCVLo0ZN7oyGwQ",
    authDomain: "twitter-clone-94a77.firebaseapp.com",
    projectId: "twitter-clone-94a77",
    storageBucket: "twitter-clone-94a77.appspot.com",
    messagingSenderId: "1097616227965",
    appId: "1:1097616227965:web:9c436a6bccbb5d57c23b14"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };