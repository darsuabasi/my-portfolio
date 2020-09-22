import React from 'react';
// import Typical from 'react-typical';
import '../css/Projects.css';
import { Link } from 'react-router-dom'
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import zoovioApp from '../assets/zoovioApp.png';
import cloutApp from '../assets/cloutApp.png';
import aatgApp from '../assets/aatgApp.png';


const Projects = () => {

  return (
    <div className="ProjectMain"> 
      <div className="navInProjects">
        <NavBar/> 
      </div>

      <div>
        <h1 className="styleProj"> 
          Uduakabasi Codes
        </h1>
        <div>
          <h1> Portfolio</h1>
        </div>
      </div>

      <div className="projectsSec">
            <div className="projectDiv">
              <div className="allProjects">

                <div className="projectOne">
                  <img className="appScreenshots" style={{width:"350px"}} src={zoovioApp}/>
                  <h2 className="projectName top"> ZooVio</h2>
                  <a href="https://zoovio.netlify.app/">Keep Track of Your Pets!</a>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>
                  {/* <p className="bioForTheProject"> 
                  Fullstack React web application where users can log in using Google Firebase, create and manage tasks 
                  for their pets and view in calendar. Pet owners can search for vetenarians by using the app's search 
                  bar feature [powered by Yelp's API]. 
                  With Covoid restrictions still in place, pet owners can also instan message vetenarians [Google Firestore] 
                  as well having virtual appointments [WebRTC + SimplePeer].
                  Vetenarians can also log in utilizing the vet's portal. 
                  However, due to security reasons, doctor's can not sign up at the momment.
                  </p> */}
                </div>

                <div className="projectTwo">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={aatgApp}/>
                  <h2 className="projectName top"> All About the Green </h2>
                  <a href="https://github.com/darsuabasi/AllAboutTheGreen"> Check out the code.</a>
                </div>

                <div className="projectThree">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={aatgApp}/>
                  <h2 className="projectName top"> Pinterest Clone</h2>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>
                </div>

                <div className="projectFour">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={zoovioApp}/>
                  <h2 className="projectName bottom"> Let's Go</h2>
                  <a href="https://github.com/darsuabasi/Pursuit-Core-Web-React-Group-Project">Check out the code.</a>
                </div>

                <div className="projectFive">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={zoovioApp}/>
                    <div className="divForProjName">
                      <h2 className="projectName bottom"> Pokemon!</h2>
                    </div>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>
                </div>

                <div className="projectSix">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={cloutApp}/>
                  <h2 className="projectName bottom"> Clout</h2>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>
                </div>
              </div>                     
            </div>
        </div>
    </div>  
  )
}


export default Projects;

