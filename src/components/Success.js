import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router";
function Success() {
     const navigate = useNavigate();
  return (
    <Container>
         <Wrapper>
              <h1>Congratulations!!</h1>
              <p>Your account has successfully been created, kindly click the button below to continue to login</p>
              <button onClick={() => {navigate('/sign_in')}}>Login</button>
         </Wrapper>
    </Container>
  )
}

export default Success

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
     display: flex;
     flex-direction: column;
     align-items: center;
     max-width: 450px;
     padding: 10px 15px;
     h1 {
      font-size: 35px;
      font-weight: 600;
      margin-bottom: 15px;
      text-align: center;
    }
     button{
          width: 100%;
          padding: 16px 16px;
          background-color: red;
          border-radius: 4px;
          outline: none;
          cursor: pointer;
          color: white;
          width: 180px;
          margin: 10px 0;
          align-self: center;
     }
     button:hover{
          background-color: #e50914;
     }
     button:focus{
          outline: none;
     }
`