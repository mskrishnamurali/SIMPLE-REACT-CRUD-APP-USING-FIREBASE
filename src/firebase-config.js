
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB8Jd9Pqmja38MO1GScj4RrU05xiroze00",
  authDomain: "react-crud-20426.firebaseapp.com",
  projectId: "react-crud-20426",
  storageBucket: "react-crud-20426.appspot.com",
  messagingSenderId: "961432725028",
  appId: "1:961432725028:web:49c7d1ec513306aa11dab1",
  measurementId: "G-01K289MQXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
