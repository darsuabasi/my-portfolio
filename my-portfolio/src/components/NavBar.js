import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
      return(
        
          <div className="navbar">    
              <button className="menuIcon dropbtn"> </button>
              {/* <div className="dropdown"> */}
                <div className="dropdown-content">
                  <NavLink to={"/"} className="nav-selected"> Home </NavLink>
                  <NavLink to={"/about"} className="nav-selected"> About </NavLink>
                  <NavLink to={"/projects"} className="nav-selected"> Projects </NavLink>
                  <NavLink to={"/skills"} className="nav-selected"> Skills </NavLink>
                  <NavLink to={"/photography"} className="nav-selected"> Photography </NavLink>
                  <NavLink to={"/contact"} className="nav-selected"> Contact </NavLink>
                </div>
              {/* </div>  */}
          </div>
       
      )
    }
    
    export default NavBar