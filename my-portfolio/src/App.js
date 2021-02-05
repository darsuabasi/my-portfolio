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
import Lifetrest from './components2/NewSingleProjects/Lifetrest';
import Zoovio from './components2/NewSingleProjects/Zoovio';
import Aatg from './components2/NewSingleProjects/Aatg';




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

                  <Route exact path={"/projects/lifetrest"}>
                    <Lifetrest/>
                  </Route>

                  <Route exact path={"/projects/zoovio"}>
                    <Zoovio/>
                  </Route>

                  <Route exact path={"/projects/all-about-the-green"}>
                    <Aatg/>
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








