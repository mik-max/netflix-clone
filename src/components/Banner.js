import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import requests from '../request';
import {Link} from 'react-router-dom'
const BASE_URL= 'https://api.themoviedb.org/3';
function Banner() {
     const[movies, setMovies] = useState([]);
     useEffect(() => {
          fetch(`${BASE_URL}${requests.fetchActionMovies}`).then(response =>{return response.json()}).then((data) => {
               setMovies(data.results[Math.floor(Math.random() * data.results.length - 1)])   
          })
     }, [])
     function truncate(str, n){
          return str?.length > n ? str.substr(0, n-1) + "..." : str;
     } 
    
     return (
          <Container style= {{
               backgroundImage: 'url(https://image.tmdb.org/t/p/original/'+movies.backdrop_path+')'
          }}>
               <Content> 
                    <div>
                         <h1>{movies?.title || movies?.name || movies?.original_name}</h1>
                         <Controls className = "">
                              {<Link to = {`/watch/${movies.id}`}>
                                   <PlayButton>
                                        <img src = '/images/play-icon-black.png'/>
                                        <span>PLAY</span>
                                   </PlayButton>
                              </Link>}
                              <TrillerButton>
                                   <img src = '/images/play-icon-white.png'/>
                                   <span>Triller</span>
                              </TrillerButton>
                              <AddButton>
                                   <span>+</span>
                              </AddButton>
                              <GroupWatchButton >
                                   <img src = '/images/group-icon.png' />
                              </GroupWatchButton>
                         </Controls>
                         <Description >{truncate(movies?.overview, 300)}</Description>
                    </div>
               </Content>
               <ShadowBottom></ShadowBottom>
          </Container>
     )
}

export default Banner

const Container = styled.div`
     width: 100%;
     height: 90vh;
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     background-color: rgba(0, 0, 0, 0.7);
     background-blend-mode: soft-light;
     margin-bottom: 10px;
     position: relative;
     @media (max-width: 480px){
         height: 100vh;
     }
     @media screen and (min-device-width: 768px) and (max-device-width: 1024px){
          height: 60vh;
     }
     
`
const Content = styled.div`
     position: absolute;
     top: 50%; 
     left: 20%;
     transform: translate(-20%, -50%);
     width: 100%;
     max-width: 950px;
     padding: 10px 15px;
     div {
          h1{
               @media (max-width: 480px){
                    font-size: 20px;
               }
          }
     }
`
const Controls = styled.div`
     display: flex;
     align-items: center;
     @media (max-width: 480px){
          flex-wrap: wrap;
     }
`    
const PlayButton = styled.button`
     border-radius: 4px;
     font-size: 15px;
     display: flex;
     align-items: center;
     height: 56px;
     background-color: rgb(249, 249, 249);
     border: none;
     padding: 0 24px;
     margin-right: 22px;
     letter-spacing: 1.8px;
     cursor: pointer;
     &:hover{
          background-color: rgb(198, 198, 198);
     }
     &:focus{
          outline: none;
     }
     @media (max-width: 480px){
          
          margin-bottom: 15px
     }
     @media screen and (max-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2){
          padding: 0 18px;
          margin-right: 10px;
     }
`
const TrillerButton = styled(PlayButton)`
     background: rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     text-transform: uppercase;
     &:hover{
          background-color: rgb(198, 198, 198);
     }
`
const AddButton = styled.button`
     width:44px;
     height:44px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     border: .5px solid white;
     background-color: rgba(0, 0, 0, 0.4);
     cursor: pointer;
     margin-right: 22px;
     span{
          font-size: 30px;
          color: white
     }
     &:focus{
          outline: none;
     }
     @media (max-width: 480px){
          
     }
     
`
const GroupWatchButton = styled(AddButton)`
     background-color: black;
     @media (max-width: 480px){
          margin-right: 10px;
          margin-left: 0px
     }
`
const Description = styled.div`
     font-size: 20px;
     margin-top: 16px;
     width: 100%;
     max-width: 500px
     line-height: 1.3;
     color: rgb(249, 249, 249);
     @media (max-width: 480px){
          font-size: 16px;
     }
     
`
const ShadowBottom = styled.div`
     position: absolute;
     bottom: 0%;
     left: 0%;
     right: 0%;
     height: 100px;
     background-image: linear-gradient(
          180deg,transparent, rgba(37, 37, 37, 0.61), #111
     )
`