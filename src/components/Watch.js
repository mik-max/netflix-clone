import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { useParams } from "react-router";
import Contexts from './Context';
import requests from '../request';
import Footer from './Footer';
import Loader from './Loader';
const BASE_URL= 'https://api.themoviedb.org/3';
var movieId, title;
function Watch(props) {
     const [trailerUrl, setTrailerUrl] = useState('')
     const opts = {
          height: '500',
          width: '100%',
          playerVars:{
               autoplay: 1,
          },
     }
     const [isLoading, setIsLoding] = useState(true);
     useEffect(() => {
          setIsLoding(true);
          fetch(`${BASE_URL}${requests.fetchActionMovies}`).then(response =>{return response.json()}).then((data) => {
               const movies = data.results;
               for( let x = 0; x < movies.length; x++){
                    if(id == movies[x].id){
                         movieId = movies[x].id;
                         title = movies[x].title || movies[x].name|| movies[x].original_name;
                         if(trailerUrl){
                              setTrailerUrl('');
                         }else{
                              movieTrailer(title).then(
                                   (url) => {
                                        const urlParams = new URLSearchParams(new URL(url).search)
                                        setTrailerUrl(urlParams.get('v'));
                                   }
                              ).catch(err => console.log(err))
                         }
                    }
               }
          })
          setIsLoding(false);
      }, [])
     const {id} = useParams();
     if(isLoading){
          return (
              <section className = "container">
                  <Loader></Loader>
              </section>
          )
      }else{
          return (
               <Container>
                    {trailerUrl && <YouTube videoId = {trailerUrl} opts = {opts}/>}
                    <Footer/>
               </Container>
          )
      }
}

export default Watch;
const Container = styled.div`
     height: auto;
`
