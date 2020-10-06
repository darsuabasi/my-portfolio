import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import "../css2/Footer.css"

const Footer = () => {
    return (
        <Navbar fixed="bottom">     

            <div className="mySocials">
        {/* <div className="socialOptionUL2"> */}

            {/* <div lassName="socialOption"> */}
                <a href="https://www.instagram.com/darsu.chats/">
                <img id="insta" className="logos4contact logoOne" src={instagram} alt="instagram" />
                </a>
            {/* </div> */}

            {/* <div lassName="socialOption"> */}
                <a href="https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/">
                <img id="linkd" className="logos4contact logoTwo" src={linkedin} alt="linkedin" />
                </a>
            {/* </div> */}

            {/* <div lassName="socialOption"> */}
                <a href="https://github.com/darsuabasi">
                <img id="insta" className="logos4contact logoThree" src={github} alt="github" />
                </a>
            {/* </div> */}
            
            {/* <div className="socialOption"> */}
                <a href="https://twitter.com/darsucodes">
                <img id="tweets" className="logos4contact logoFour" src={twitter} alt="twitter" />
                </a>
            {/* </div> */}

            </div>
        </Navbar>
    )
}


export default Footer