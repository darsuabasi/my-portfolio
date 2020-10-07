import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../css2/NavBar2.css";

const NavBar2 = () => {
  return (
    <nav class="topHeader" className="navbar navbar-expand-lg  portNav fixed-top navbarMain">
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="navbar-collapse collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav justify-content-end">

        <li className="nav-item">
            <NavLink className="nav-link nav-selected" exact to="/">
              Home
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink className="nav-link nav-selected" exact to="/about">
              About Me
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link nav-selected" exact to="/projects">
              Projects
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link nav-selected" exact to="/skills">
              Skills
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink id="photography" className="nav-link nav-selected" exact to="/photography">
              Photography
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              id="contact" className="nav-link nav-selected" exact to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar2;