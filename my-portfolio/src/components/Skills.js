import React from 'react';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import '../css/Skills.css';
import styled, { keyframes } from "styled-components";
import { bounceOut, bounce, bounceIn, bounceInDown, bounceInLeft, bounceInRight, bounceInUp, bounceOutDown, bounceOutLeft, 
  bounceOutRight, bounceOutUp, fadeIn, fadeInDown, fadeInDownBig, fadeInLeft, fadeInLeftBig, fadeInRight, fadeInRightBig, fadeInUp, 
  fadeInUpBig, fadeOut, fadeOutDown, fadeOutDownBig, fadeOutLeft, fadeOutLeftBig, fadeOutRight, fadeOutRightBig, fadeOutUp, fadeOutUpBig, 
  flash, flip, flipInX, flipInY, flipOutX, flipOutY, headShake, hinge, jello, lightSpeedIn, lightSpeedOut, pulse, rollIn, rollOut, rotateIn, 
  rotateInDownLeft, rotateInDownRight, rotateInUpLeft, rotateInUpRight, rotateOut, rotateOutDownLeft, rotateOutDownRight, rotateOutUpLeft,
  rotateOutUpRight, rubberBand, shake, slideInDown, slideInLeft, slideInRight, slideInUp, slideOutDown, slideOutLeft, slideOutRight, 
  slideOutUp, swing, tada, wobble, zoomIn, zoomInDown, zoomInLeft, zoomInRight, zoomInUp, zoomOut, zoomOutDown, zoomOutLeft, 
  zoomOutRight, zoomOutUp, merge } from "react-animations";

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
    const Flip = styled.div`animation: 5s ${keyframes `${flip}`} infinite`;
    const RotateInDownLeft = styled.div`animation: 5s ${keyframes `${rotateInDownLeft}`} infinite`;
    const RubberBand = styled.div`animation: 5s ${keyframes `${rubberBand}`} infinite`;
    const Tada = styled.div`animation: 5s ${keyframes `${tada}`} infinite`;
    const Hinge = styled.div`animation: 8s ${keyframes `${hinge}`} infinite`;
    const Jello = styled.div`animation: 5s ${keyframes `${jello}`} infinite`;
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
          <img className="ThreeSkills" src={html_css_js}/>
        </Bounce>


        {/* <Bounce> */}
          <img className="nodejsSkill" src={nodejs}/>
        {/* </Bounce> */}

        {/* <Tada> */}
          <img className="expressSkill" src={expressJS}/>
        {/* </Tada> */}

        {/* <Flip> */}
          <img className="reactSkill" src={react}/>
        {/* </Flip> */}

          {/* <li className="skillsListLI"> PostgreSQL </li> */}
          <img className="postgresqlSkill" src={postgresql}/>

          <img className="illustratorSkill" src={illustrator}/>


          {/* <li className="skillsListLI"> React </li> */}
          <img className="gitSkill" src={gitLogo}/>


          {/* <li className="skillsListLI"> Postman </li> */}
        <SlideInRight>
          <img className="postmanSkill" src={postman}/>
        </SlideInRight>

        <RubberBand>
          {/* <li className="skillsListLI"> Redux Toolkit </li> */}
        </RubberBand>


        
        <Hinge>
          {/* <li className="skillsListLI"> Redux </li> */}
          <img className="reduxSkill" src={reduxLogo}/>
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