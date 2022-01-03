import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const BASE_URL= 'https://api.themoviedb.org/3';
function Row({title, fetchUrl, isLargeRow}){
     const [movies, setMovies] = useState([]);
     const [trailerUrl, setTrailerUrl] = useState('')
     useEffect(() => {
         fetch(`${BASE_URL}${fetchUrl}`).then(response =>{return response.json()}).then((data) => {
              setMovies(data.results)
              
         }) 
     }, [])
     const opts = {
          height: '390',
          width: '100%',
          playerVars:{
               autoplay: 1,
          },
     }
     const handleMovie = (movie) => {
          if(trailerUrl){
               setTrailerUrl('');
          }else{
               movieTrailer(movie?.title || movie?.name || movie?.original_name || "").then(
                    (url) => {
                         const urlParams = new URLSearchParams(new URL(url).search)
                         setTrailerUrl(urlParams.get('v'));
                    }
               ).catch(err => console.log(err))
          }
     }
     return (
          <div>
               <h2 className = 'row_h2'>{title}</h2>
               <Container>
                    {movies.map(movie => <Wrap onClick = {() => handleMovie(movie)} className = {isLargeRow &&  'large_poster'} key = {movie.id} src = {`https://image.tmdb.org/t/p/w185/${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} />)}
               </Container>
               {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
          </div>
     )
} 

export default Row

const Container = styled.div`
     display: flex;
     overflow-Y : hidden;
     overflow-X: scroll;
     padding: 15px 10px;
     &::-webkit-scrollbar{
          display: none;
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