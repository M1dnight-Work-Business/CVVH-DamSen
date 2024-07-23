import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvODLtYnR_Jxk1Q70WTJOlfQDgFXeR7Fs",
    authDomain: "damsen-d6f89.firebaseapp.com",
    projectId: "damsen-d6f89",
    storageBucket: "damsen-d6f89.appspot.com",
    messagingSenderId: "26803488336",
    appId: "1:26803488336:web:233bb6365669a8a6ca7355",
    measurementId: "G-ZZGGPP9S3J"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
const storage = getStorage(app);
export {storage};