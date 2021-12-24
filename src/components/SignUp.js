import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { signUp, useAuth, logOut, login } from '../firebase';
import styled from 'styled-components';
function SignUp({className, email_value, onCancle, onError}) {
     const emailRef = useRef();
     const passwordRef = useRef();
     const [loading, setLoading] = useState(false);
     const [emailErrAlert, setEmailErrAlert] = useState(false);
     const [pswErrAlert, setPswErrAlert] = useState(false);
     const [successAlert, setSuccessAlert] = useState(false);
     const [alertText, setAlertText] = useState('');
     const currentUser = useAuth();
     const navigate = useNavigate();
    async function handleSignUp(event){
         event.preventDefault();
          setLoading(true);
          await signUp(emailRef.current.value, passwordRef.current.value).then(() => {
               setSuccessAlert(true);
               setEmailErrAlert(false);
               setPswErrAlert(false);
               setAlertText('Account has been successfully created.');
               navigate('/sign_in');
          }).catch(err => {
               if(err.message == 'Firebase: Error (auth/email-already-in-use).'){
                    setEmailErrAlert(true);
                    setPswErrAlert(false)
                    setAlertText('Email Already exists');
               }else if(err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                    setPswErrAlert(true);
                    setEmailErrAlert(false);
                    setAlertText('Password should be at least 6 characters ')
               }
          });
          
          setLoading(false);
          clearForm();
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
    async function handleLogin(){
          setLoading(true);
          try {
               await login(emailRef.current.value, passwordRef.current.value);
          } catch (error) {
               if(error.message = 'Error (auth/email-already-in-use).')
               alert('Email Already exists')
          }
          setLoading(false);
     }
     function clearForm(){
          emailRef.current.value = '';
          passwordRef.current.value = '';
     }
     return (
          <Wrapper className = {className}>
               <div className= {emailErrAlert? 'alert alert-danger alert-dismissible display' : "hide"}>
                    <button type="button" className="close" data-dismiss="alert" onClick= {() => {setEmailErrAlert(false); onError()}}>&times;</button>
                    {alertText}
               </div>
               <div className= {pswErrAlert? 'alert alert-danger alert-dismissible display' : "hide"}>
                    <button type="button" className="close" data-dismiss="alert" onClick= {() => {setPswErrAlert(false);}}>&times;</button>
                    {alertText}
               </div>
               <div className= {successAlert? 'alert alert-success alert-dismissible display' : "hide"}>
                    <button type="button" className="close" data-dismiss="alert" onClick= {() => {setEmailErrAlert(false);}}>&times;</button>
                    {alertText}
               </div>
               <form>
                    <h1>Sign Up</h1>
                    <input type = 'email' placeholder = 'Email Address' ref = {emailRef} required id = 'email' value = {email_value}  />
                    <input type = 'password' placeholder = 'Password' ref = {passwordRef} required id = 'password' />
                    <button type = 'submit' disabled = {loading} onClick  = {handleSignUp}>Sign Up</button>
               </form>
               <p>Already have an account? <a href = '#' onClick = {() => {navigate('/sign_in')}}>Sign In</a></p>
         </Wrapper>
               

     )
}

export default SignUp;
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
{/* <div className = 'container p-3'>
                    <input type = 'email' placeholder = 'Email' className = 'form-control mb-2' ref = {emailRef} /> 
                    <input type = 'password' placeholder = 'Password' className = 'form-control mb-2' ref = {passwordRef} /> 
                    <button disabled = {loading } className = 'btn btn-primary' onClick  = {handleSignUp}>Sign Up</button>
                    <button disabled = {loading || currentUser} className = 'btn btn-primary' onClick  = {handleLogin}>Login </button>
                    <p>Currently signed in as :  {currentUser?.email}</p>

                    <button disabled = {loading || !currentUser} className = 'btn btn-primary' onClick  = {handleSignOut}>Log out</button>
               </div> */}