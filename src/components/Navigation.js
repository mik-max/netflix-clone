import React, {useState, useEffect, useContext} from 'react';
import { logOut } from '../firebase';
import styled from 'styled-components';
import Contexts from './Context';
import { useNavigate } from 'react-router';
function Navigation() {
     const [showBackground, handleShowBackground] = useState(false);
     const [loading, setLoading] = useState(false);
     useEffect(() => {
          let unmounted = false;
          window.addEventListener('scroll', () => {
               if(window.scrollY > 100){
                    handleShowBackground(true);
               }else{
                    handleShowBackground(false);
               }
          })
          return () => { unmounted = true };
     }, []);
     const userState = useContext(Contexts);
     const navigate = useNavigate();
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
          <div className = 'fixed-top'>
               <Nav className = {showBackground? 'show_background' : 'hide_background'}>
                    <Logo src ='/images/netflix_logo.png' />
                    <UserIcon src ='/images/user_icon.jpg' data-toggle="tooltip" data-placement="bottom" title="Log Out" onClick = {() => {userState.signOut(); handleSignOut(); navigate('/')}} />
               </Nav>
          </div>
     )
}

export default Navigation
export const Nav = styled.nav`
     height: 60px;
     width: 100%;
     display: flex;
     padding: 20px;
     align-items: center;
     justify-content: space-between;
     transition-timing-function: ease-in-out;
     transition: all 0.5s;
`
export const Logo = styled.img`
     width: 80px;
     object-fit: contain;
     &.large_logo{
          width:150px;
     }
`
export const UserIcon = styled.img`
     width: 40px;
     height: 40px;
     object-fit: contain;
     cursor: pointer;
`