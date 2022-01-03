import React from 'react'
import { useRef, useState, useContext} from 'react';
import { useNavigate } from "react-router";
import { useAuth, login, logOut } from '../firebase';
import styled from 'styled-components';
import Contexts from './Context';
function SignIn(){
     const emailRef = useRef();
     const passwordRef = useRef();
     const [loading, setLoading] = useState(false);
     const [errorAlert, setErrorAlert] = useState(false);
     const [alertText, setAlertText] = useState('');
     const currentUser = useAuth();
     const navigate = useNavigate();

     const userStatus = useContext(Contexts);
     async function handleLogin(e){
          setLoading(true);
          e.preventDefault();
          if(passwordRef.current.value == ''){
               setErrorAlert(true);
               setAlertText('Input password');
          }else if(emailRef.current.value == ''){
               setErrorAlert(true);
               setAlertText('Input email address');
          }else{
               await login(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/home');
                    userStatus.signIn();
               }).catch(err => {
                    if(err.message == 'Firebase: Error (auth/user-not-found).'){
                         setErrorAlert(true);
                         setAlertText('Email does not exist');
                    }
                    else if(err.message == 'Firebase: Error (auth/invalid-email).'){
                         setErrorAlert(true);
                         setAlertText('Invalid email address')
                    }
                    else if (err.message == 'Firebase: Error (auth/wrong-password).'){
                         setErrorAlert(true);
                         setAlertText('wrong password');
                    }
                   else{
                    setAlertText(err.message);
                   }
               });
          }
         
          setLoading(false);
          clearForm();
     }
     function clearForm(){
          emailRef.current.value = null;
          passwordRef.current.value = null;
     }
     async function handleSignOut(){
          setLoading(true);
          try {
               await logOut();
          } catch (error) {
              alert(error);
          }
          setLoading(false);
     }
     return (
         <Container>
               <Wrapper>
                    <div className= {errorAlert? 'alert alert-danger alert-dismissible display' : "hide"}>
                         <button type="button" className="close" data-dismiss="alert" onClick= {() => {setErrorAlert(false); setAlertText('')}}>&times;</button>
                         {alertText}
                    </div>
                    <form>
                         <h1>Sign In</h1>
                         <input type = 'email' placeholder = 'Email Address' ref = {emailRef} required id = 'email' />
                         <input type = 'password' placeholder = 'Password' ref = {passwordRef} required id = 'password' />
                         <button type = 'submit' disabled = {loading} onClick  = {handleLogin}>Sign In</button>
                         <label className="form-check-label">
                              <input className="form-check-input remember" type="checkbox" id="check"  required />Remember me
                         </label>
                    </form>
                    <p>Dont have an account yet? <a  onClick = {() => {userStatus.signOut(); navigate('/'); handleSignOut();}}>Sign Up</a></p>
               </Wrapper>
         </Container>
     )
}

export default SignIn
const Container = styled.div`
     width: 100%;
     height: 100vh;
     background: url("/images/background.jpg") no-repeat center
     center/cover;
     background-color: rgba(0, 0, 0, 0.5);
     background-blend-mode: soft-light;
     border-bottom: 8px solid #222;
     position: relative;
`
const Wrapper = styled.div`
     background-color: rgba(0, 0, 0, 0.5);
     height: auto;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     width: 100%;
     max-width: 450px;
     padding: 10px 0;
     
     p{
          padding: 0 50px;
          a{
               color: white;
               cursor: pointer
          }
          a:hover{
               text-decoration: none;
               color: #333;
          }
     }
     div{
          margin: 0 10%;
     }
     
     form{
          h1{
               font-size: 35px;
               margin-bottom: 10%;
          }
          margin: 5% auto;
          padding: 10px 50px;
          input#email, input#password{
               padding: 10px 10px;
               width: 100%;
               background-color: #333333;
               border-radius: 4px;
               color: white;
               margin-bottom: 18px;
               outline: none;
          }
          input#email:focus::placeholder, input#password:focus::placeholder{
               font-size: small;
               vertical-align:baseline;
               position:absolute;
               top: 0;
          }
          button{
               width: 100%;
               padding: 16px 16px;
               background-color: red;
               border-radius: 4px;
               outline: none;
               cursor: pointer;
               color: white;
               margin: 10% 0 5%;
          }
          button:hover{
               background-color: #e50914;
          }
          button:focus{
               outline: none;
          }
          label{
               padding: 0px 20px;
          }
          
     }
    
`
