import React from 'react';
// import Typical from 'react-typical';
import '../css/Projects.css'
import NavBar from './NavBar';
import Typing from 'react-typing-animation'

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

                <div className="projectOne">
                  <h2> ZooVio</h2>
                </div>

                <div className="projectTwo">
                  <h2> All About the Green </h2>
                </div>

                <div className="projectThree">
                  <h2> Pinterest Clone</h2>
                </div>
              </div> 

              <div className="olderProjects">

                <div className="projectFour">
                  <h2> Let's Go</h2>
                </div>

                <div className="projectFive">
                  <h2> Pokemon!</h2>
                </div>

                <div className="projectSix">
                  <h2> Clout</h2>
                </div>

              </div>     
                    

                    
            </div>
        </div>
    </div>  
  )
}


export default Projects;

