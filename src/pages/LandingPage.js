import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import '../components/Landing.css'
import { useNavigate } from "react-router";
import { Logo, Nav } from '../components/Navigation';
import { Fade } from 'react-awesome-reveal';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';
import Contexts from '../components/Context';
function LandingPage() {
     const emailRef = useRef("");
     const [signUp, setSignUp] = useState(false);
     const [signIn, setSignIn] = useState(false);
     const [isLoggedIn, setIsLoggedIn] = useState(false)
     const [landing, setLanding] = useState(true);
     const navigate = useNavigate();
     let email_value = emailRef.current.value;
     function clearForm(){
          emailRef.current.value = '';
     }
     function handleGetStarted(event){
          event.preventDefault();
          if(emailRef.current.value == ""){
               setSignUp(false); setLanding(true);
          }else{
               setSignUp(true); setLanding(false);
          }
     }
     return (
          <>
               <Container >
                    <div>
                         <Nav>
                              <Logo src ='/images/netflix_logo.png' />
                              <LoginButton onClick = {() => { navigate('/sign_in');}}>Sign in</LoginButton>
                         </Nav>
                    </div>
                    <div className ={landing ? "showcase-content" : "hide"}>
                         <h1>Unlimited movies, Tv shows, and more. </h1>
                         <h4>Watch anywhere. Cancel anytime.</h4>
                         <p>Ready to watch? Enter your email to create or restart your membership</p>
                         <SignUpWrapper>
                              <input type = 'email' className = 'input' required placeholder = 'Email Address' ref = {emailRef} />
                              <button className = 'signUp_button' onClick = {handleGetStarted}>Get Started <span><i className="fa fa-angle-right" aria-hidden="true" ></i></span></button>

                         </SignUpWrapper>
                         {/* <Link to= '/netflix-show' className = 'btn btn-xl btn-header'>Watch Free For 30 Days</Link> */}
                    </div>
                    <SignUp className = {signUp ? 'display' : 'hide'} onCancle = {() => {setSignUp(false); setSignIn(true)}} email_value = {email_value} onError = {() => {setSignUp(false); setLanding(true)}} />
                    
               </Container>
               <Wrap>
                    <Content>
                         <div className = 'card-text'>
                              <h1 className = 'text-center'>Enjoy On Your TV</h1>
                              <h2 className = 'text-center'>Watch on smart TVs, Playstations, Xbox, Chromcast, Apple TV, Blue Ray Players and more</h2>
                         </div>
                         <Fade duration = '3000' fraction = '0.3'>
                              <div className = 'card-image'>
                                   <img src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' />
                                   <div className = 'video-div' >
                                        <video autoPlay muted loop>
                                             <source src = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"></source>
                                        </video>
                                   </div>
                              </div>
                         </Fade>
                    </Content>
               </Wrap>
               <Wrap>
                    <Content reverse = 'reverse'>
                        <Fade duration = '3000' fraction = '0.3'>
                              <div className = 'card-image'>
                                   <img src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' />
                                   <div className = 'phone_image_animation' >
                                        <div class=""><img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"/></div>
                                        <div ><div id=""  data-uia="">Stranger Things</div><div id="" className="text-1" data-uia="">Downloading...</div></div>
                                   </div>
                              </div>
                        </Fade>
                         <div className = 'card-text'>
                              <h1 className = 'text-center'>Download Your Shows To Watch Offline</h1>
                              <h2 className = 'text-center'>Save your favourites easily and always have something o watch</h2>
                         </div>
                    </Content>
               </Wrap>
               <Wrap>
                    <Content>
                         <div className = 'card-text'>
                              <h1 className = 'text-center'>Create profiles for kids</h1>
                              <h2 className = 'text-center'>Send kids on adventures with their favourite characters in a space made just for them</h2>
                         </div>
                         <Fade duration = '3000' fraction = '0.3'>
                              <div className = 'card-image'>
                                   <img src="https://occ-0-1799-2705.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"/>
                              </div>
                         </Fade>
                    </Content>
               </Wrap>
               <Footer/>
          </>
     )
}

export default LandingPage
export const Container = styled.div`
     width: 100%;
     height: 100vh;
     background: url("/images/background.jpg") no-repeat center
     center/cover;
     background-color: rgba(0, 0, 0, 0.5);
     background-blend-mode: soft-light;
     border-bottom: 8px solid #222;
     position: relative;
     @media screen and (min-device-width: 768px) and (max-device-width: 1024px){
          height: 60vh;
     }
`
const LoginButton = styled.button`
     padding: 8px 16px;
     border: 1px solid red;
     outline: none;
     border-radius: 4px;
     background-color: red;
     color: white;
     cursor: pointer;
     text-transform: uppercase;
     transition: all 0.2s ease 0s;
     &:hover{
          background-color: #e50914;
          border: 1px solid #e50914;
     }
     &:focus{
          outline: none;
     }
`
const SignUpWrapper = styled.form`
     display: flex;
     align-items: center;
     margin: 0 auto;
     width: 100%;
     max-width: 500px;
     @media (max-width: 480px){
          flex-wrap: wrap;
          justify-content: center;
     }
`
const Wrap = styled.div`
     width: 100%;
     border-bottom: 8px solid #222;
     margin: 0;
     color: #fff;
     background: #000000;
     z-index: 1;
     
`
const Content = styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 calc(3.5vw + 5px);
     @media (max-width: 960px){
          flex-wrap: wrap;
          flex-direction: ${({reverse}) => reverse === 'reverse' && 'column-reverse'};
          justify-content: center;
     }
     div.card-text{
          flex:52%
          height: 100%;
          padding: 0 3rem 0 0;
          font-size: 1.625rem;
          font-weight: 400;
          h1 {
               display: block;
               font-size: 1.5em;
               font-weight: bold;
               @media (max-width: 640px){
                    font-size: 1.2em;
               }
               @media (max-width: 480px){
                    font-size: 1em;
               }
          }
          h2 {
               display: block;
               font-size: .8em;
               font-weight: bold;
               @media (max-width: 480px){
                    font-size: .6em;

               }
          }
          @media (max-width: 960px){
               flex: 100%
               overflow: hidden;
               margin: auto;
               padding: 0;
          }
     }
     div.card-image{
          flex: 48%
          height: 100%;
          position: relative;
          @media (max-width: 960px){
               flex: 100%
               overflow: hidden;
               margin: auto;
     }
          img{
               margin: 0 auto;
               height: auto;
               max-width: 100%;
               border: none;
               display: block;
          }  
          div.video-div{
               position: absolute;
               top: 50%;
               left: 25%;
               transform: translate(-17%,-52%);
               video{
                    margin: 0 0;
                    height: auto;
                    max-width: 100%;
                    vertical-align: baseline;
                    display: inline-block;
                    object-fit: contain;
               }

          }
          
     }
     div.phone_image_animation{
          position: absolute;
          left: 20%;
          bottom: 8%;
          margin: 0 auto;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 60%;
          min-width: 15em;
          padding: 0.25em 0.65em;
          border: 2px solid rgba(255,255,255,.25);
          box-shadow: 0 0 2em 0 #000;
          border-radius: 0.75em;
          @media (max-width: 480px){
               left: 8%;
          }
     }
     div.phone_image_animation div {
          margin: 0 1em 0 0;
          flex-grow: 0;
          flex-shrink: 0;
          @media (max-width: 480px){
               margin: 0 .8em 0 0;
          }
     }
     div.phone_image_animation div img{
          height: 4.5em;
     }
     div.phone_image_animation div  div.text-1{
          font-size: .9em;
          color: #0071eb;
     }
     div.phone_image_animation:after{
          height: 3.75em;
          width: 3em;
          outline: 2px solid #000;
          outline-offset: -2px;
          display: block;
          background: url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') center center no-repeat;
          background-size: 100%;
          content: '';
          flex-grow: 0;
          flex-shrink: 0;
          @media (max-width: 480px){
               width: 1.6em;
          }
     }
`

