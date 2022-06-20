import React, { useContext }  from 'react';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Navigate} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import SignIn from './components/SignIn';
import { useAuth } from './firebase';
import { UserSlice } from './components/Context';
import Contexts from './components/Context';
import Watch from './components/Watch'; 
import Success from './components/Success';

function App() {
  const currentUser = useAuth();
  const userStatus = useContext(Contexts);
  return (
    <div className = "App">
      <UserSlice>
        <MyRoutes/>
      </UserSlice>
    </div>
  );
}

function MyRoutes() {
  const currentUser = useAuth();
  const userStatus = useContext(Contexts);
  return (
    <BrowserRouter>
      <Routes>
        {(!userStatus.result && !currentUser) ? <Route path="/" element={<LandingPage />} /> :
            <Route path="/home" element={<Home />} />}
        //Automatically takes user to the signIn page once signUp is completed
        {!userStatus.result && <Route path = "/sign_in" element = {<SignIn/>}/>}
        {!userStatus.result && <Route path = "/success" element = {<Success/>}/>}

        <Route path = '/watch/:id' element = {<Watch/>} />
        // A fallback route to redirect the user to the right page if authenticated or not 
        <Route path = '*' element={<Navigate to={ (!userStatus.result && !currentUser) ? '/': '/home '} />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App; 
