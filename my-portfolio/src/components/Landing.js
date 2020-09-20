import React from 'react';
import { useHistory, Link, router } from 'react-router-dom';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import Typing from 'react-typing-animation';
import { pageTransition, pageVariants } from "../util/framerStyles";
import { motion } from "framer-motion";
import '../css/Landing.css';



const Landing = ({ Component, pageProps, router }) => {
    const history = useHistory();
    return (
        <div className="majorDiv"> 
        <motion.div
                // key={router.route}
                initial="initial"
                animate="in"
                exit="out"
                transition={pageTransition}
                variants={pageVariants}
                >
                <div {...pageProps} className="landingMain"> 
                    <div className="landingBio">
                        <Typing className="typeingAni">
                            <p className="landingInfoHead"> Hi, I'm Uduakabasi!</p>
                            <h1 className="landingInfoSub">  Web Engineer,</h1>
                            <h2 className="landingInfoSub"> Fullstack,</h2>
                            <h3 className="landingInfoSub"> && more.</h3>
                        </Typing>

                    <div className="btn-div">
                        <button className="enterWorldBtn" onClick={() => history.push(`/about${history.location.pathname}`)}>Enter </button>
                        <button className="enterContactBtn" onClick={() => history.push(`/contact${history.location.pathname}`)}>Contact</button>
                    </div>
                </div>

            


            <div className="footerDiv4Landing"> 
                <ul className="socialOptionUL">

                    <li lassName="socialOption">
                        <a href="https://github.com/darsuabasi">
                            <img id="insta" className="logos4conatct" src={github} alt="github" />
                        </a>
                    </li>

                    <li className="socialOption">
                        <a href="https://twitter.com/darsucodes">
                            <img id="tweets" className="logos4conatct" src={twitter} alt="twitter" />
                            {/* <img src="https://img.icons8.com/fluent/100/000000/twitter.png"/> */}
                        </a>
                    </li>

                    <li lassName="socialOption">
                        <a href="https://www.instagram.com/darsu.chats/">
                            <img id="insta" className="logos4conatct" src={instagram} alt="instagram" />
                        </a>
                    </li>

                    

                    <li lassName="socialOption">
                        <a href="https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/">
                            <img id="linkd" className="logos4conatct" src={linkedin} alt="linkedin" />
                        </a>
                    </li>

                    

                    

                </ul>
            </div>
        </div>
            </motion.div>
            </div>
   )
}

export default Landing














// function App() {
//     // const location = useLocation();
  
//     return (
//       <div className="my-portfolio">
//         <NavBar/>
//         <Switch>
  
//         {/* <AnimatePresence> */}
//             {/* <Switch location={location} key={location.pathname}> */}
//               <Route exact path={"/"}>
//                 <Landing/>
//               </Route>
  
//               <Route exact path to={"/home"}>
//                 <Home/>
//               </Route>
  
//               <Route exact path to={"/about"}>
//                 <About/>
//               </Route>
//             {/* </Switch> */}
//           {/* </AnimatePresence> */}
  
  
  
//           <Route exact path={"/projects"}>
//             <Projects/>
//           </Route>
  
//           <Route exact path to={"/blog"}>
//             <Blog/>
//           </Route>
  
//           <Route excat path to={"/photography"}>
//             <Photography/>
//           </Route>
  
//           <Route exact path to={"/contact"}>
//             <Contact/>
//           </Route>
  
//           <Route exact path to={"*"}>
//             <Error/>
//           </Route>
  
//         </Switch>
  
//       </div>
      
//     );
//   }
  
//   export default App;

















             
        
              
        
              
        
           