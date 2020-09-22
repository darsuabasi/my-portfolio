import React from 'react';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import '../css/Skills.css'

const Skills = () => {

  return (
    <div className="skillsMain">
      <div className="navInSkills">
        <NavBar/> 
      </div>

      <div className="skillsHeading">
        <Typing>
          <h1 className="styleSkills"> 
            Uduakabasi Works
          </h1>
        </Typing>
      </div>

      <div className="skillsDiv">
        <p className="skillsList"> Knowledgable in 
                  [Node.js, 
                  Express, 
                  PostgreSQL, 
                  React, 
                  Postman, 
                  PSequel, 
                  CSS,
                  Adobe Creative Suites, 
                  Cloud Services: Firebase + Firestore]
            </p>
      </div>
    </div> 
  )
}


export default Skills;