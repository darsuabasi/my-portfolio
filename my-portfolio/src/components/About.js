import React from 'react';
import '../css/About.css'
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import AboutBG from '../assets/AboutBG.mp4';
import mePic from '../assets/mePic.jpg';
// import { Link } from 'react-router-dom';

const About = () => {
  const backgroundCss = {
    position: "relative",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: 'hidden',
  };

  return (
    <div className="AboutMain">


      <div className="videoContain">

      <video className="videoBox"
          autoPlay={false}
          // muted
          loop={false}
          id="background-video"
          style={{ 
            // position: "absolute", 
            width: "100%",
            height: "100%",
            // left: 0,
            // top: 0,
            ...backgroundCss 
            }}
          >

      <source src={AboutBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      </div>
      

<div className="subMainDiv"> 

      <div className="navInAbout">
        <NavBar/> 
      </div>

      <div className="aboutSec"> 
          {/* <p className="aboutInfoHead"> GET TO KNOW ME</p> */}
      </div>



    <div className="divForExtras">
        <div className="aboutParaDiv">
          <p style={{color:"#cb0000", fontSize:'24px', marginBottom: '1rem', textDecoration: 'none', textAlign: 'center'}} className="aboutmepara"> 
            You've entered the coolest portal thus far created by moi.
          </p>

          <Typing className="typingComp">
            <h1 className="miniBio"> Coder by day, judoka by night,</h1>
            <h2 className="miniBio"> baddie on the weekends... </h2>
            <h3 className="miniBio"> sometimes </h3>
          </Typing>

            <img className="picOfMe" style={{width:"450px"}} alt="uduakabasi" src={mePic}/>
       

            <p className="aboutmepara"> 
            Born in Nigeria, raised in the hustle capital of the world, NYC. 
            Two years ago, I graduted with a Bachelors of Science in Criminal Justice with a focus in Intelligence Analyis. 
            A year into graduting, I came across a Microsoft sponsored Hackathon by Enza Academy. I can't lie, I attended because 
            I thought it meant they would teach you how to hack things but boy was I wrong. I spent 48 hours forging new friendships, 
            building my confidence but most importantly, learning how to translate the skills I already had to something I virtually had 
            no knowledge of. I was fortunate enough to be a part of a team who trusted me when it came to research, design and business 
            architecture. Our app, PANTRY DJ won 3rd place. I was in the clouds and thinking to myself, not bad for a first time "hacker".
            </p>

            <p className="aboutmepara">
            From that moment, I knew coding was for me. In a few months, I began my new journey at Pursuit, an intensive 12-month 
            Google-funded software engineering fellowship with a 9% acceptance rate. It wasn't an easy one. I hit some of my 
            lowest lows but with the help and support of my amazing instructor, program manager, mentors, family and friends, I made it through and I'm only 
            getting started.
            </p>
            
            <p className="aboutmepara">
            I hope to show women and young girls that look like me that the sky is the limit, that it's okay to not know what's next, 
            that it's okay to make that career change, that it's okay to have to jump on a different path. After all, the only thing 
            we can be certain of is uncertainty. 
            </p>

            <p className="aboutmepara">
            As a software developer, my goal is to create advancements in the intelligence and medical community through technology 
            and research. Next up, Law School... after the LSAT's of course. Oh and my green belt <span role="img" alt="judo gi"> 🥋 </span> 
            </p> 


            <p className="aboutmepara">
            So now that you've dived super deep, what else is there to know? Well, hopefully once you take the journey through 
            this work of art, you'll feel my love for UX/UI design, animation and graphics. I can also bet that you woudln't guess that I 
            actully love working on the backend of web development but don't feel bad, it's a pretty playful design here.
            </p> 

            <p className="aboutmepara">
            With that being said, do check out the photography page and get into some of the cool views I've been able to capture.
            </p>

            <p className="aboutmepara">
            Random Facts: Skincare and Manga enthusiast here. I also write stories on Wattpad, occasionaly. City girl but I love the water. 
            </p>
          
          
      </div>   
    </div>

    </div>

    </div>  
  )
}


export default About;