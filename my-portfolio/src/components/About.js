import React from 'react';
import '../css/About.css'
import Comments from '../components/Comments'

const About = () => {

  return (
    <div className="AboutMain">
      <div className="aboutSec"> 
        <h1 className="world"> 
          Uduakabasi's World 
        </h1>

        <p className="aboutmepara">
          Bachelors in Criminal Justice with a focus in Intelligence Analysis here to take the tech world by storm and also make it pretty. 
          Fullstack web developer.
          UX/UI and Backend enthusiast.
          Oh, I do photography and talk skincare and advice....
        </p>

      </div>

      <div>
    <p>
      Drop a comment or just cool vibes 
    </p>

      <div className="commentSection"> 
        <Comments/>
      </div>

      </div>


    </div>  
  )
}


export default About;