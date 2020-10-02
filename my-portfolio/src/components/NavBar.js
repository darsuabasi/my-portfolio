import React from 'react';
import '../css/NavBar.css';

const NavBar = () => {
      return(
        
          <div className="navbar">    
              <button className="menuIcon dropbtn"> </button>
              {/* <div className="dropdown"> */}
                <div className="dropdown-content">
                  <a href="/" className="nav-selected"> Home </a>
                  <a href="/about" className="nav-selected"> About </a>
                  <a href="/projects" className="nav-selected"> Projects </a>
                  <a href="/skills" className="nav-selected"> Skills </a>
                  <a href="/photography" className="nav-selected"> Photography </a>
                  <a href="/contact" className="nav-selected"> Contact </a>
                </div>
              {/* </div>  */}
          </div>
       
      )
    }
    
    export default NavBar