import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Error from './components/Error';
import Landing from './components/Landing';
import { AnimatePresence } from "framer-motion";



function App({ Component, pageProps, router }) {
  // const location = useLocation();

  return (
    <div className="my-portfolio">
      <BrowserRouter> 
        
        
          <Switch>
            <div className="mainApp">
            
              <AnimatePresence exitBeforeEnter>
                <Switch>

                  <Route exact path={"/"}>
                    <Landing/>
                  </Route>
        
                  <Route exact path={"/about"}>
                    <About/>
                  </Route>

                  <Route exact path={"/projects"}>
                    <Projects/>
                  </Route>

                  <Route exact path={"/skills"}>
                    <Skills/>
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
        
        

        
                <Route exact path={"*"}>
                  <Error/>
                </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
