import React from 'react';
import '../css/About.css'
import Comments from '../components/Comments';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';

const About = () => {

  return (
    <div className="AboutMain">
      <NavBar/> 
      <div className="aboutSec"> 
        <Typing className="typingComp">
          <p className="aboutInfoHead"> Get To Know Me</p>
          <h1> Coder by day, judoka by night,</h1>
          <h2> baddie on the weekends... </h2>
          <h3> jk I code </h3>
        </Typing>


        <p className="aboutmepara">Currently enrolled at Pursuit, an intensive 12-month, Google-funded software engineering fellowship that has a 9% acceptance rate.</p>

        <p className="aboutmepara"> - Nigerian </p>

        <p className="aboutmepara"> - Bachelor of Science: Criminal Justice </p>
  
        <p className="aboutmepara"> - Concentration in Intelligence Analysis </p>

        <p className="aboutmepara"> - Part-time judoka [pre-covoid]</p>

        <p className="aboutmepara"> - UX/UI and Backend enthusiast</p>

        <p className="aboutmepara"> - I'm a pretty rad photographer</p>

        <p className="aboutmepara"> - Let's talk skincare</p>

        <p className="aboutmepara"> - I occasionaly write stories on Wattpad.</p>

        <p className="aboutmepara"> - Manga over Anime #DontJudge I'm a a reader</p>


      </div>

      <div>
        <p>
          Drop a comment or just cool vibes... 
        </p>

      <div className="commentSection"> 
        {/* <Comments/> */}
      </div>

      </div>


    </div>  
  )
}


export default About;