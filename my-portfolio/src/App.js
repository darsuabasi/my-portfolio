import React from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom'
import './App.css';
import { AnimatePresence } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';

import Error from './components2/Error';
import NewAbout from './components2/NewAbout';
import NavBar2 from './components2/NavBar2';
import NewProjects from './components2/NewProjects';
import NewSkills from './components2/NewSkills';
import NewPhotography from './components2/NewPhotography';
import NewContact from './components2/NewContact';
import NewLanding from './components2/NewLanding';


function App({ Component, pageProps, router, location }) {
  // const location = useLocation();

  return (
    <div className="my-portfolio">
      <BrowserRouter> 
        <Switch>
          <Route exact path={"/"}>
            <NewLanding/>
          </Route>
          <div className="mainApp">
            <NavBar2/>
              <AnimatePresence exitBeforeEnter>
                <Switch>
                  <Route exact path={"/about"}>
                    <NewAbout/>
                  </Route>

                  <Route exact path={"/projects"}>
                    <NewProjects/>
                  </Route>

                  <Route exact path={"/skills"}>
                    <NewSkills/>
                  </Route>
        
                  <Route excat path={"/photography"}>
                    <NewPhotography/>
                  </Route>
        
                  <Route exact path={"/contact"}>
                    <NewContact/>
                  </Route>
        
                  <Route exact path={"*"}>
                    <Error/>
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>

            {/* <Route
                  path={[
                    "/about",
                    "/projects",
                    "/blog",
                    "/photography",
                    "/contact",
                  ]}
                >

                </Route> */}
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;












{/* <Navbar expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar> */}




    // <div
    //     className="navbar-collapse collapse justify-content-end"
    //     id="navbarSupportedContent"
    //   >
    //     <ul className="navbar-nav justify-content-end">

    //     <li className="nav-item">
    //         <NavLink className="nav-link nav-selected" exact to="/">
    //           Home
    //         </NavLink>
    //       </li>


    //       <li className="nav-item">
    //         <NavLink className="nav-link nav-selected" exact to="/about">
    //           About Me
    //         </NavLink>
    //       </li>
          
    //       <li className="nav-item">
    //         <NavLink className="nav-link nav-selected" exact to="/projects">
    //           Projects
    //         </NavLink>
    //       </li>

    //       <li className="nav-item">
    //         <NavLink className="nav-link nav-selected" exact to="/skills">
    //           Skills
    //         </NavLink>
    //       </li>

    //       <li className="nav-item">
    //         <NavLink id="photography" className="nav-link nav-selected" exact to="/photography">
    //           Photography
    //         </NavLink>
    //       </li>

    //       <li className="nav-item">
    //         <NavLink
    //           id="contact" className="nav-link nav-selected" exact to="/contact">
    //           Contact
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>