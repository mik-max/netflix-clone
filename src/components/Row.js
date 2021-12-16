import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
const BASE_URL= 'https://api.themoviedb.org/3';
function Row({title, fetchUrl, isLargeRow}){
     const [movies, setMovies] = useState([]);
     useEffect(() => {
         fetch(`${BASE_URL}${fetchUrl}`).then(response =>{return response.json()}).then((data) => {
              setMovies(data.results)
              
         }) 
     }, [])
     return (
          <>
               <h2>{title}</h2>
               <Container>
                    {movies.map(movie => <Wrap className = {isLargeRow &&  'large_poster'} key = {movie.id} src = {`https://image.tmdb.org/t/p/w185/${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} />)}
               </Container>
          </>
     )
}

export default Row

const Container = styled.div`
     display: flex;
     overflow-Y : hidden;
     overflow-X: scroll;
     padding: 20px;
     &::-webkit-scrollbar{
          display: none;
     }
     
     h2{
          padding-bottom: 10px;
          @media (max-width: 640px){
               font-size: 16px;
          }
          
     }
     
     
`


const Wrap = styled.img`
     object-fit: cover;
     height: 100px;
     width: 100%;
     margin-bottom: 10px;
     cursor: pointer;
     transition: transform 450ms; 
     margin-right: 10px;
     &:hover{
          transform: scale(1.08);
     }
     &.large_poster{
          height: 250px;
     }
     &.large_poster:hover{
          transform: scale(1.09);
     }
`