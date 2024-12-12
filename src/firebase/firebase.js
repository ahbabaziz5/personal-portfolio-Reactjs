// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkFX0o1ZnDtg_1TaKrAEgggHMOsowRGRk",
    authDomain: "test-d14aa.firebaseapp.com",
    databaseURL: "https://test-d14aa-default-rtdb.firebaseio.com",
    projectId: "test-d14aa",
    storageBucket: "test-d14aa.appspot.com",
    messagingSenderId: "1022392053565",
    appId: "1:1022392053565:web:176465e0d8cb540b629f54"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection };


