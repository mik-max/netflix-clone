
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from "firebase/app";
import { useState, useEffect } from 'react';
// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyCeJ4MGrMUxg5MZyraML6zFV-Rvgdz6GP0",
     authDomain: "react-apps-e4b90.firebaseapp.com",
     projectId: "react-apps-e4b90",
     storageBucket: "react-apps-e4b90.appspot.com",
     messagingSenderId: "926204140829",
     appId: "1:926204140829:web:4de6959a56570d6768d5f4"
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