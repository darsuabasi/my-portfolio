import React from 'react';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import '../css/Contact.css';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const Contact = () => {

  return (
    <div className="contactMain"> 
      <div className="navInContacts">
        <NavBar/> 
      </div>

      <div className="div4Intro">
        <Typing>
          <h1 className="styleContact"> 
            Want To Chat? 
              <div> 
                <h1 className="styleContact2"> 
                  Need My Skills? </h1>
                    <div> 
                    {/* file:///Users/dylanabasiurua/Downloads/Resume_Uduakabasi%20Abasiurua.pdf */}
                      <a href="https://docs.google.com/document/d/18I_rL7ZO-yweUZFtvAM87RNCOFIO6Wvufd5D4D-_aek/edit?usp=sharing"><h2 className="styleResume">My Resume!</h2></a>
                    </div>
              </div>
            </h1>
        </Typing>
      </div>




      <div className="reachOutDiv">
        <div className="reachOutInsta">
          <p> 
            If you want to chat about less trivial things like skincare, 
            anime or maybe you need adivce, follow me on  
            <a className="linksInContact" href="https://www.instagram.com/darsu.chats/"><h3>Instagram</h3></a>
            or send me a DM. 
          </p>
        </div>

        <div className="reachOutEmail">
          <h3 className="serviceHeading"> Services Provided </h3>
          <ul className="servicesUL">
            <li className="servicesLI"> Fullstack Web Application Build </li>
            <li className="servicesLI"> Frontend Web Applications</li>
            <li className="servicesLI"> Design Consultations </li>
            <li className="servicesLI"> Photography </li>
            <li className="servicesLI"> Logos </li>
          </ul>


          <div className="div4email">
            <p> Feel free to reach out and I'll get back to you as soon as possble.</p>
            <h3 className="emailInContact"> <a className="linksInContact two" href="mailto:uduakabasiabasiurua@pursuit.org">uduakabasiabasiurua@pursuit.org</a>  </h3>
          </div>


        </div>

        <div className="reachOutTweet">
          <p> 
            Maybe you want to check out the random thoughts I'm having? Check me out 
            on <a className="linksInContact" href="https://twitter.com/darsucodes"> <h3>Twitter</h3></a> Happy Tweeting!
          </p>
        </div>


        <div className="mySocials">
          <ul className="socialOptionUL2">
            <li lassName="socialOption">
              <a href="https://github.com/darsuabasi">
                <img id="insta" className="logos4contact" src={github} alt="github" />
              </a>
              </li>

              <li className="socialOption">
                <a href="https://twitter.com/darsucodes">
                  <img id="tweets" className="logos4contact" src={twitter} alt="twitter" />
                    {/* <img src="https://img.icons8.com/fluent/100/000000/twitter.png"/> */}
                </a>
              </li>

              <li lassName="socialOption">
                <a href="https://www.instagram.com/darsu.chats/">
                  <img id="insta" className="logos4contact" src={instagram} alt="instagram" />
                </a>
              </li>

              <li lassName="socialOption">
                <a href="https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/">
                  <img id="linkd" className="logos4contact" src={linkedin} alt="linkedin" />
                </a>
              </li>
            </ul>

          </div>


      </div>

      <div className="footerDiv4Landing"> 
                <ul className="socialOptionUL">

                    <li lassName="socialOption">
                        <a href="https://github.com/darsuabasi">
                            <img id="insta" className="logos4contact" src={github} alt="github" />
                        </a>
                    </li>

                    <li className="socialOption">
                        <a href="https://twitter.com/darsucodes">
                            <img id="tweets" className="logos4contact" src={twitter} alt="twitter" />
                            {/* <img src="https://img.icons8.com/fluent/100/000000/twitter.png"/> */}
                        </a>
                    </li>

                    <li lassName="socialOption">
                        <a href="https://www.instagram.com/darsu.chats/">
                            <img id="insta" className="logos4contact" src={instagram} alt="instagram" />
                        </a>
                    </li>

                    
                    <li lassName="socialOption">
                        <a href="https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/">
                            <img id="linkd" className="logos4contact" src={linkedin} alt="linkedin" />
                        </a>
                    </li>

                </ul>
            </div>

    </div>  
  )
}


export default Contact;