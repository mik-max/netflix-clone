import React from 'react'
import styled from 'styled-components'
import requests from '../request';
import Row from '../components/Row'
import Banner from '../components/Banner'
import Navigation from '../components/Navigation'
function Home() {
     return (
          <>
               <Navigation/>
               <Banner/>
               <Row title = 'Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
               <Row title = 'Trending Now' fetchUrl={requests.fetchTrending} />
               <Row title = 'Top Rated' fetchUrl={requests.fetchTopRated} />
               <Row title = 'Action Movies' fetchUrl={requests.fetchActionMovies} />
               <Row title = 'Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
               <Row title = 'Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
               <Row title = 'Romance movies' fetchUrl={requests.fetchRomanceMovies} />
               <Row title = 'Documentaries' fetchUrl={requests.fetchDocumentaries} />
          </>
     )
}

export default Home
