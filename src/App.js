import React from 'react';
import './App.css';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<LandingPage />} />
            <Route path = "/home" element={<Home />} /> 
            <Route path = "/sign_in" element={<SignIn />} /> 
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
