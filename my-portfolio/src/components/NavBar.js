import React from 'react'
import { NavLink } from 'react-router-dom' 
import '../css/NavBar.css'

const NavBar = () => {
      return(
        
          <div className="navbar"> 
            <ul className="navUl">
              <li className="navLi">
                <NavLink exact to="/" className="nav-selected">
                  Home
                </NavLink>
              </li>
    
              <li className="navLi">
                <NavLink exact to="/about" className="nav-selected">
                  About
                </NavLink>
              </li>
    
              <li className="navLi">
                <NavLink exact to="/projects" className="nav-selected">
                  Projects
                </NavLink>
              </li>

              <li className="navLi">
                <NavLink exact to="/skills" className="nav-selected">
                  Skills
                </NavLink>
              </li>

              <li className="navLi">
                <NavLink exact to="/photography" className="nav-selected">
                  Photography 
                </NavLink>
              </li>


              <li className="navLi">
                <NavLink exact to="/contact" className="nav-selected">
                  Contact
                </NavLink>
              </li>
            </ul>
              
          </div>
       
      )
    }
    
    export default NavBar