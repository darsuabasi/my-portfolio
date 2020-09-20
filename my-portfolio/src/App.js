import React from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
// import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Photography from './components/Photography'
import Contact from './components/Contact'
import Error from './components/Error'
import Landing from './components/Landing';
import { AnimatePresence } from "framer-motion";



function App() {
  // const location = useLocation();

  return (
    <div className="my-portfolio">
      <BrowserRouter> 
        
        
          <Switch>

            <AnimatePresence>
                  {/* <Switch location={location} key={location.pathname}> */}
                  <Route exact path={"/"}>
                      <Landing/>
                    </Route>
        
                    <Route exact path={"/about"}>
                      <About/>
                    </Route>
                  {/* </Switch> */}
                </AnimatePresence>
        
        
        
                <Route exact path={"/projects"}>
                  <Projects/>
                </Route>
        
                <Route exact path={"/blog"}>
                  <Blog/>
                </Route>
        
                <Route excat path={"/photography"}>
                  <Photography/>
                </Route>
        
                <Route exact path={"/contact"}>
                  <Contact/>
                </Route>
        
                <Route exact path={"*"}>
                  <Error/>
                </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
