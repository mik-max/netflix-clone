import { createContext, useState } from "react";

const Contexts = createContext({
     signIn: () => {},
     signOut: () => {},
     result: null
})

export function UserSlice (props){
     const [userActiveStatus, setUserActiveStatus] = useState(false);
     function signedIn(){
          setUserActiveStatus(true);
          if(userActiveStatus == true){
               console.log('yes')
          }else{
               console.log('no')
          }
     }
     function signedOut(){
          setUserActiveStatus(false);
     }
     const value = {
          result : userActiveStatus,
          signIn: signedIn,
          signOut: signedOut
     }

     return <Contexts.Provider value = {value}>
          {props.children}
     </Contexts.Provider>
}
export default Contexts
