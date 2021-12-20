import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
function Navigation() {
     const [showBackground, handleShowBackground] = useState(false);
     useEffect(() => {
          window.addEventListener('scroll', () => {
               if(window.scrollY > 100){
                    handleShowBackground(true);
               }else{
                    handleShowBackground(false);
               }
          })
          
     }, [])
     return (
          <div className = 'fixed-top'>
               <Nav className = {showBackground? 'show_background' : 'hide_background'}>
                    <Logo src ='/images/netflix_logo.png' />
                    <UserIcon src ='/images/user_icon.jpg' />
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
`
export const UserIcon = styled.img`
     width: 40px;
     height: 40px;
     object-fit: contain;
`