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
      <NavBar/>
        <div className="projectsSec">
            <h1 className="styleProj"> 
                Uduakabasi Codes
            </h1>

            <p className="skillsList"> Knowledgable in 
                  [Node.js, 
                  Express, 
                  PostgresSQL, 
                  React, 
                  Postman, 
                  PSequel, 
                  CSS, 
                  Firebase + Firestore]
            </p>

            <div className="projectDiv">
              <div className="mostRecentProjects">
                  
                <h1> Most Recent Projects: 3 months - current</h1>
                <div className="projectOne">
                  <h2> ZooVio</h2>
                  <img className="appScreenshots" style={{width:"450px"}} src={zoovioApp}/>
                  <a href="https://zoovio.netlify.app/">Keep Track of Your Pets!</a>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>

                </div>

                <div className="projectTwo">
                  <h2> All About the Green </h2>
                  <img className="appScreenshots" style={{width:"450px", height:"250px"}} src={aatgApp}/>
                  <a href="https://github.com/darsuabasi/AllAboutTheGreen ">Check out the code.</a>
                </div>

                <div className="projectThree">
                  <h2> Pinterest Clone</h2>
                </div>
              </div> 

              <div className="olderProjects">
                    
              <h1> Older Projects: 4 months - 1 year</h1>
                <div className="projectFour">
                  <h2> Let's Go</h2>
                  <a href="https://github.com/darsuabasi/Pursuit-Core-Web-React-Group-Project">Check out the code.</a>
                </div>

                <div className="projectFive">
                  <h2> Pokemon!</h2>
                </div>

                <div className="projectSix">
                  <h2> Clout</h2>
                  <img className="appScreenshots" style={{width:"450px", height:"250px"}} src={cloutApp}/>
                </div>

              </div>     
                    

                    
            </div>
        </div>
    </div>  
  )
}


export default Projects;

