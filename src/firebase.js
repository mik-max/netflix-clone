
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from "firebase/app";
import { useState, useEffect } from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Y94fvEliRe1gMON8I_JKpqvb1UKU2ck",
  authDomain: "netflix-clone-ae929.firebaseapp.com",
  databaseURL: "https://netflix-clone-ae929-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-ae929",
  storageBucket: "netflix-clone-ae929.appspot.com",
  messagingSenderId: "186998778480",
  appId: "1:186998778480:web:84dee1bb79b29faa3522b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signUp(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}

export function logOut(){
     return signOut(auth);
}
export function login(email, password){
     return signInWithEmailAndPassword(auth, email, password )
}

// custom Hook
export function useAuth(){
     useEffect(() => {
         const unsub = onAuthStateChanged(auth, user => {setCurrentUser(user);})
         return unsub;
     }, [])
     const[currentUser, setCurrentUser] = useState();
     return currentUser;
}