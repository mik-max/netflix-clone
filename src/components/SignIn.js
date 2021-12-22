import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { signUp, useAuth, logOut, login } from '../firebase';
import styled from 'styled-components';
function SignIn({className, onCancle}) {
     const emailRef = useRef();
     const passwordRef = useRef();
     const [loading, setLoading] = useState(false);
     const currentUser = useAuth();
     async function handleLogin(){
          setLoading(true);
          try {
               await login(emailRef.current.value, passwordRef.current.value);
          } catch (error) {
               alert(error)
          }
          setLoading(false);
          clearForm();
     }
     function clearForm(){
          emailRef.current.value = '';
          passwordRef.current.value = '';
     }
     return (
          <Wrapper className = {className}>
          
               <form>
                    <h1>Sign In</h1>
                    <input type = 'email' placeholder = 'Email Address' ref = {emailRef} required id = 'email' />
                    <input type = 'password' placeholder = 'Password' ref = {passwordRef} required id = 'password' />
                    <button type = 'submit' disabled = {loading} onClick  = {handleLogin}>Sign In</button>
                    <label className="form-check-label">
                         <input className="form-check-input remember" type="checkbox" id="check"  required />Remember me
                    </label>
               </form>
               <p>Dont have an account yet? <a href = '#' onClick = {onCancle}>Sign Up</a></p>
               <p>Currently signed in as : {currentUser?.email}</p>
         </Wrapper>
     )
}

export default SignIn

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
