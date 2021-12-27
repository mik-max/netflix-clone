import React from 'react'
import styled from 'styled-components'
function Loader() {
     return (
          <>
             <Spiner></Spiner>
          </>
     )
}

export default Loader

const Spiner = styled.div`
     border: 16px solid #f3f3f3; /* Light grey */
     border-top: 16px solid #090b13; /* dark */
     border-radius: 50%;
     width: 100px;
     height: 100px;
     animation: spin 2s linear infinite;
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);

     @keyframes spin {
     0% { transform: rotate(0deg); }
     100% { transform: rotate(360deg); }
     
     }

     @media(max-width: 480px){
          width: 100px;
          height: 100px;
          position: absolute;
          top: 50%;
          left: 40%;
          
     }
`
