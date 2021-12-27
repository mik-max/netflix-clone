import { createContext, useState, useEffect } from "react";
import requests from '../request';
const BASE_URL= 'https://api.themoviedb.org/3';
const Contexts = createContext({
     signIn: () => {},
     signOut: () => {},
     result: null,
     netflixOriginals : []
})

export function UserSlice (props){
     const [userActiveStatus, setUserActiveStatus] = useState(false);
     const [netflixOriginalsMovie, setNetflixOriginalsMovie] = useState([]);
     useEffect(() => {
          fetch(`${BASE_URL}${requests.fetchActionMovies}`).then(response =>{return response.json()}).then((data) => {
               const movies = data.results;
               setNetflixOriginalsMovie(movies);
          }) 
      }, [])
     function signedIn(){
          setUserActiveStatus(true);
     }
     function signedOut(){
          setUserActiveStatus(false);
     }
     const value = {
          result : userActiveStatus,
          signIn: signedIn,
          signOut: signedOut,
          netflixOriginals: netflixOriginalsMovie
     }

     return <Contexts.Provider value = {value}>
          {props.children}
     </Contexts.Provider>
}
export default Contexts
