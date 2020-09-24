import React from 'react';
import '../css/Projects.css';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import zoovioApp from '../assets/zoovioApp.png';
import cloutApp from '../assets/cloutApp.png';
import aatgApp from '../assets/aatgApp.png';
import pinterestApp from '../assets/pinterestApp.jpeg';
import pinterestApp2 from '../assets/pinterestApp2.jpeg';
import letsgoApp from '../assets/letsgoApp.png';


const Projects = () => {
  return (
    <div className="ProjectMain"> 
      <div className="navInProjects">
        <NavBar/> 
      </div>

      <div>
        <Typing>
          <h1 className="styleProj"> 
            Uduakabasi Codes
          </h1>
        </Typing>
      </div>

      <div className="projectsSec">
            <div className="projectDiv">
              <div className="allProjects">
                <div className="projectOne">
                  <img  className="appScreenshots" href="https://zoovio.netlify.app/" style={{width:"350px"}} src={zoovioApp}/>
                  <h2 className="projectName top"> ZooVio</h2>
                    <div className="codeDiv">
                      <a className="appLink" href="https://zoovio.netlify.app/">Keep Track of Your Pets!  </a>
                      <a className="checkOutTheCode" href="https://github.com/darsuabasi/zoovio">    Check out the code.</a>
                    </div>
                  <p className="bioForTheProject"> 
                  Fullstack React web app where users can log in using Google Firebase, create and manage tasks 
                  for their pets + view in calendar. Users can search for vetenarians.
                  Also, with Covoid-19 in mind, users can instant message vetenarians or have virtual appointments 
                  Vetenarians can also log in utilizing the vet's portal. However, due to security reasons, 
                  doctor's can not sign up at the momment.
                  </p>

                  <p className="whatsNext">
                  What's Next: 
                  Expanding servives for more than just vetnarians. Looking into more complex verification
                  system for doctor sign-ups. Ending/Declining incoming virtual appointment feature. Document upload
                  for doctor's portal and payment method for services.
                  </p>
                </div>

                <div className="projectTwo">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={aatgApp}/>
                  <h2 className="projectName top"> All About the Green </h2>
                  <div className="codeDiv"> 
                    <a className="checkOutTheCode" href="https://github.com/darsuabasi/AllAboutTheGreen"> Check out the code.</a>
                  </div>
                  <p className="bioForTheProject">
                  Fullstack React app coded for Pursuit's 48 hour Hackathon, sponsored by CodeAcademy.
                  Users can look up plant information by utilizing the search feature. There is also a
                  community forum where users can create posts and leave comments for discussion purposes.
                  Photos can also be uploaded along with the post. Users can also upload photo's of plants 
                  in the plant ID feature to get a list of possibile plants it could be. [Utilizing Plant.id API]
                  Given the MVP Award by Codecademy judges!
                  </p>
                  <p className="whatsNext">
                  What's Next: 
                  Get application deployed. Debug inconsistancies with Plant.Id API as well as cleanining up the 
                  design so that it's mobile friendly.
                  </p>
                </div>

                <div className="projectThree">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={pinterestApp2}/>
                  <h2 className="projectName top"> Pinterest Clone</h2>
                  <div className="codeDiv">
                    <a className="appLink" href="https://mock-trest.netlify.app/"> Happy Pinning 😁 </a>
                    <a className="checkOutTheCode" href="https://github.com/darsuabasi/CTAPintrest">Check out the code.</a>
                  </div>
                  <p className="bioForTheProject">
                  Fullstack React app. Users can signup/login through Google Firebase, create pins and boards with images.
                  Users can view their boards and pins on their profile. New pins can aslo be added to previously created boards.
                  Boards can be deleted which will in turn remove all pins in that board. Modal is utilized so that images are the focus.  
                  </p>
                  <p className="whatsNext">
                  What's Next: 
                  Users will be able to view other users' profiles which will show their pins and boards.
                  Users will be able to search pins by hashtag.
                  Users will have the ability to like pins which will then display in a generated "Likes" board.
                  </p>
                </div>

                {/* <div className="projectFour">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={letsgoApp}/>
                  <h2 className="projectName bottom"> Let's Go</h2>
                  <a href="https://github.com/darsuabasi/Pursuit-Core-Web-React-Group-Project">Check out the code.</a>
                </div> */}

                {/* <div className="projectFive">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={zoovioApp}/>
                    <div className="divForProjName">
                      <h2 className="projectName bottom"> Pokemon!</h2>
                    </div>
                  <a href="https://github.com/darsuabasi/zoovio">Check out the code.</a>
                </div> */}

                

                {/* <div className="projectSix">
                  <img className="appScreenshots" style={{width:"350px", height:"200px"}} src={cloutApp}/>
                  <h2 className="projectName bottom"> Clout</h2>
                  <a href="https://github.com/darsuabasi/Pursuit-Core-Web-Express-Group-Project">Check out the code.</a>
                </div> */}
              </div>                     
            </div>
        </div>
    </div>  
  )
}


export default Projects;

