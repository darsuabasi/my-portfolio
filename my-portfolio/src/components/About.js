import React from 'react';
import '../css/About.css'
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import AboutBG from '../assets/AboutBG.mp4';
import mePic from '../assets/mePic.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  const backgroundCss = {
    position: "absolute",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    maxHeight: "950px"
  };

  return (
    <div className="AboutMain">
      {/* <div className="navInAbout">
        <NavBar/> 
      </div> */}
      <div className="videoBox">
        <video
          autoPlay
          muted
          loop
          id="background-video"
          style={{ 
            // position: "absolute", 
            width: "100vw",
            // left: 0,
            // top: 0,
            ...backgroundCss }}
          >

      <source src={AboutBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="nextBttn">
            <Link className="projectButton" exact to="/projects"> Projects</Link>
    </div>

    <div className="divForExtras">
        <div className="aboutParaDiv">
          <p style={{color:"#cb0000", fontSize:'26px', marginBottom: '1rem'}} className="aboutmepara"> Currently enrolled at Pursuit, an intensive 12-month, Google-funded software engineering fellowship that has a 9% acceptance rate.</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Nigerian </p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Bachelor of Science: Criminal Justice </p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Concentration in Intelligence Analysis </p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Part-time judoka [pre-covoid]</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - UX/UI, Backend, Animation enthusiast</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - I'm a pretty rad photographer</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Let's talk skincare</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - I occasionaly write stories on Wattpad.</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Manga over Anime #DontJudge I'm a reader</p>
          <p style={{color:"#ffffff"}} className="aboutmepara"> - Yoga, by the beach </p>
      </div>   
    </div>


      <div className="aboutSec"> 
          <p className="aboutInfoHead"> GET TO KNOW ME</p>
        <Typing className="typingComp">
          <h1 className="miniBio"> Coder by day, judoka by night,</h1>
          <h2 className="miniBio"> baddie on the weekends... </h2>
          <h3 className="miniBio"> sometimes </h3>
        </Typing>

        <div className="div4pic">
          <img className="picOfMe" style={{width:"450px"}} alt="photo of uduakabasi" src={mePic}/>
        </div>
      </div>

    <div className="navInAbout">
      <NavBar/> 
    </div>

    

    


    </div>  
  )
}


export default About;