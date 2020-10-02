import React from 'react';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import '../css/Skills.css';
import styled, { keyframes } from "styled-components";
import { bounce, hinge, rotateInDownLeft, rubberBand, slideInRight } from "react-animations";

  import html_css_js from '../assets/html_css_js.png';
  import nodejs from '../assets/nodejs.png';
  import reduxLogo from '../assets/reduxLogo.png';
  import expressJS from '../assets/expressJS.png';
  import postman from '../assets/postman.png';
  import react from '../assets/react.png';
  import postgresql from '../assets/postgresql.webp';
  import gitLogo from '../assets/gitLogo.png';
  import illustrator from '../assets/illustrator.svg'

  
  const Skills = () => {
    
    const Bounce = styled.div`animation: 10s ${keyframes `${bounce}`} infinite`;
    // const Flip = styled.div`animation: 5s ${keyframes `${flip}`} infinite`;
    const RotateInDownLeft = styled.div`animation: 5s ${keyframes `${rotateInDownLeft}`} infinite`;
    const RubberBand = styled.div`animation: 5s ${keyframes `${rubberBand}`} infinite`;
    // const Tada = styled.div`animation: 5s ${keyframes `${tada}`} infinite`;
    const Hinge = styled.div`animation: 8s ${keyframes `${hinge}`} infinite`;
    // const Jello = styled.div`animation: 5s ${keyframes `${jello}`} infinite`;
    const SlideInRight = styled.div`animation: 20s ${keyframes `${slideInRight}`} infinite`;
    
    // const tadaFlip = merge(tada, flip);


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

      <div 
        whileHover={{
        scale: 1.2, 
        transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        onPan={{scale: 1.2}}
        className="skillsDiv"
        >

        <ul className="skillsListUL">

        <Bounce>
          <img className="ThreeSkills" alt="html_css_javascript" src={html_css_js}/>
        </Bounce>


        {/* <Bounce> */}
          <img className="nodejsSkill" alt="node.js" src={nodejs}/>
        {/* </Bounce> */}

        {/* <Tada> */}
          <img className="expressSkill" alt="express" src={expressJS}/>
        {/* </Tada> */}

        {/* <Flip> */}
          <img className="reactSkill" alt="react" src={react}/>
        {/* </Flip> */}

          {/* <li className="skillsListLI"> PostgreSQL </li> */}
          <img className="postgresqlSkill" alt="postgreSQL" src={postgresql}/>

          <img className="illustratorSkill" alt="illustrator" src={illustrator}/>


          {/* <li className="skillsListLI"> React </li> */}
          <img className="gitSkill" alt="git" src={gitLogo}/>


          {/* <li className="skillsListLI"> Postman </li> */}
        <SlideInRight>
          <img className="postmanSkill" alt="postman" src={postman}/>
        </SlideInRight>

        <RubberBand>
          {/* <li className="skillsListLI"> Redux Toolkit </li> */}
        </RubberBand>


        
        <Hinge>
          {/* <li className="skillsListLI"> Redux </li> */}
          <img className="reduxSkill" alt="redux" src={reduxLogo}/>
        </Hinge>

        <RotateInDownLeft>
          {/* <li className="skillsListLI"> PSequel </li> */}
        </RotateInDownLeft>
        

        <RubberBand>
          {/* <li className="skillsListLI"> Redux Toolkit </li> */}
        </RubberBand>

        {/* <img className="illustratorSkill" src={illustrator}/> */}

        </ul>
      </div>
    </div> 
  )
}


export default Skills;