import React, { useState } from 'react';
import Typing from 'react-typing-animation';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import '../css2/NewProjects.css';
import zoovioApp from '../assets/zoovioApp.png';
// import cloutApp from '../assets/cloutApp.png';
import aatgApp from '../assets/aatgApp.png';
import lifetrestApp from '../assets/lifetrestApp.png';
import lifetrestLandingpage from '../projectASSETS/lifetrestLandingpage.gif';
import aatgLanding from '../projectASSETS/aatgLanding.png';
import nowThatsCapLanding from '../projectASSETS/nowThatsCapLanding.png';
// import letsgoApp from '../assets/letsgoApp.png';
import { Link, NavLink } from 'react-router-dom'


const NewProject = () => {
    return (
        <Container fluid className="projectMain">
            <Row className="subContain">

                <Col>
                    <Typing className="sheCodes">
                        <h1 className="styleProj"> 
                            Uduakabasi Codes
                        </h1>
                    </Typing>
                </Col>
                <Col>
                    <CardDeck sm={4} className="allTheCards"> 
                        <div className="projectThree">
                            <a href="https://nowthatscap.netlify.app/" target="_blank"> 
                                <img loading="lazy" className="appScreenshots" alt="nowthatscapApp" class="image__img" src={nowThatsCapLanding} />
                            </a>

                            <div class="image__overlay image__overlay--primary">
                                <NavLink class="image__title" className="nav-link nav-selected app-title-yh" exact to="/projects/now-thats-cap">
                                #NowThatsCap
                                </NavLink>
                                <p class="image__description">
                                    Yurrrr, you've officially entered NYC. Welcome to #NowThatsCap. I along with 4 other talented engineers had the pleasure 
                                    of participating in a week long Hackathon during the month of February. Can you tell we were inspiring by the Black NYC culture?
                                    We wanted to created a fun way for people to learn more about Black culture because it is the BLUEPRINT. After winning Crowd Favorite
                                    during Demo Day, the only Award given, we as a team decided to make this bigger than just us. As of now, this game is in Beta Mode as 
                                    we plan on scaling the app so if you catch any bugs, don't hesitate to let us know or follow us on social media to keep up with updates.
                                    Till then, get your knowledge up, NYC style, Beta mode.
                                </p>
                                <p class="image__description">
                                Built with React.js.
                                </p>

                                <a style={{fontVariant:'small-caps', fontSize:'28px'}} className="image__link" href="https://github.com/ashyamanning/now-thats-cap" target="_blank"> The Code </a> 
                                <a style={{fontVariant:'small-caps', fontSize:'24px'}} className="image__link" href="https://nowthatscap.netlify.app/" target="_blank"> Live Site</a>
                                <NavLink style={{fontVariant:'small-caps', fontSize:'20px'}} class="image__title" className="nav-link nav-selected" exact to="/projects/now-thats-cap">
                                Click Me to View More
                                </NavLink>
                            </div>
                        {/* <h2 className="projectName top"> Lifetrest</h2>
                        <div className="codeDiv">
                            <a className="appLink" href="https://lifetrest.netlify.app/" target="_blank"> Happy Pinning <span role="img" alt="smile emoji"> 😁 </span>  </a>
                            <a className="checkOutTheCode" href="https://github.com/darsuabasi/CTAPintrest" target="_blank">Check out the code.</a>
                        </div> */}
                        {/* <p className="bioForTheProject">
                        Fullstack React app. Users can signup/login through Google Firebase, create pins and boards with images.
                        Users can view their boards and pins on their profile. New pins can aslo be added to previously created boards.
                        Boards can be deleted which will in turn remove all pins in that board. Modal is utilized so that images are the focus.  
                        </p> */}
                            {/* <p className="whatsNext">
                                What's Next: 
                                The ability to delete pins.
                    
                                The ability to like pins which will then display in a generated "Likes" board.
                            </p> */}
                        </div>
                    {/* <Card className="fullCard" style={{height: '30rem', width: '24rem'}}>
                        <Card.Img className="projectPic" variant="top" alt="zoovioApp" style={{ width:"350px", height:"200px"}} src={zoovioApp} />
                        <Card.Body>
                            <Card.Title className="projectName">ZooVio</Card.Title>
                            <a className="appLink" href="https://zoovio.netlify.app/">Keep Track of Your Pets! <span role="img" alt="smile emoji"> 😁 </span> </a>
                            <a className="checkOutTheCode" href="https://github.com/darsuabasi/zoovio">    Check out the code.</a>
                            <Card.Text className="projectInfo">
                                Fullstack React web app where users can log in using Google Firebase, create and manage tasks 
                                for their pets + view in calendar. Users can search for vetenarians.
                                Also, with Covoid-19 in mind, users can instant message vetenarians or have virtual appointments 
                                Vetenarians can also log in utilizing the vet's portal. However, due to security reasons, 
                                doctor's can not sign up at the momment.
                            </Card.Text>
                            <Card.Subtitle className="projectNext">
                                What's Next: 
                                Expanding servives for more than just vetnarians. Looking into more complex verification
                                system for doctor sign-ups. Ending/Declining incoming virtual appointment feature. Document upload
                                for doctor's portal and payment method for services.
                            </Card.Subtitle>
                        </Card.Body>
                    </Card> */}




                        <div className="projectThree">
                            <a href="https://lifetrest.netlify.app/" target="_blank"> 
                                <img loading="lazy" className="appScreenshots" alt="pinterestApp" class="image__img" src={lifetrestApp} />
                            </a>

                            <div class="image__overlay image__overlay--primary">
                                <NavLink class="image__title" className="nav-link nav-selected app-title-yh" exact to="/projects/lifetrest">
                                Lifetrest
                                </NavLink>
                                <p class="image__description">
                                    In an alternate universe, Lifetrest would dominate but it's a good thing Pinterest exists
                                    because I don't think this would go public for another year! Ha. I can tell you all the things I love about Pinterest but then we'd be here for a long time... 
                                    so I decided to recreate it as part of my Comprehensive Technical Assessment but even after 
                                    months, I couldn't let it go. Watching it come to life was nothing short of a gritty yet 
                                    beautiful journey.
                                </p>
                                <p class="image__description">
                                Built with React.js, Node.js with Express, and PostgreSQL.
                                </p>

                                <a style={{fontVariant:'small-caps', fontSize:'28px'}} className="image__link" href="https://github.com/darsuabasi/CTAPintrest" target="_blank"> The Code </a> 
                                <a style={{fontVariant:'small-caps', fontSize:'24px'}} className="image__link" href="https://lifetrest.netlify.app/" target="_blank"> Live Site</a>
                                <NavLink style={{fontVariant:'small-caps', fontSize:'20px'}} class="image__title" className="nav-link nav-selected" exact to="/projects/lifetrest">
                                Click Me to View More
                                </NavLink>
                            </div>
                        {/* <h2 className="projectName top"> Lifetrest</h2>
                        <div className="codeDiv">
                            <a className="appLink" href="https://lifetrest.netlify.app/" target="_blank"> Happy Pinning <span role="img" alt="smile emoji"> 😁 </span>  </a>
                            <a className="checkOutTheCode" href="https://github.com/darsuabasi/CTAPintrest" target="_blank">Check out the code.</a>
                        </div> */}
                        {/* <p className="bioForTheProject">
                        Fullstack React app. Users can signup/login through Google Firebase, create pins and boards with images.
                        Users can view their boards and pins on their profile. New pins can aslo be added to previously created boards.
                        Boards can be deleted which will in turn remove all pins in that board. Modal is utilized so that images are the focus.  
                        </p> */}
                            {/* <p className="whatsNext">
                                What's Next: 
                                The ability to delete pins.
                    
                                The ability to like pins which will then display in a generated "Likes" board.
                            </p> */}
                        </div>
                    {/* <Card className="fullCard" style={{height: '30rem', width: '24rem'}}>
                        <Card.Img className="projectPic" variant="top" alt="zoovioApp" style={{ width:"350px", height:"200px"}} src={zoovioApp} />
                        <Card.Body>
                            <Card.Title className="projectName">ZooVio</Card.Title>
                            <a className="appLink" href="https://zoovio.netlify.app/">Keep Track of Your Pets! <span role="img" alt="smile emoji"> 😁 </span> </a>
                            <a className="checkOutTheCode" href="https://github.com/darsuabasi/zoovio">    Check out the code.</a>
                            <Card.Text className="projectInfo">
                                Fullstack React web app where users can log in using Google Firebase, create and manage tasks 
                                for their pets + view in calendar. Users can search for vetenarians.
                                Also, with Covoid-19 in mind, users can instant message vetenarians or have virtual appointments 
                                Vetenarians can also log in utilizing the vet's portal. However, due to security reasons, 
                                doctor's can not sign up at the momment.
                            </Card.Text>
                            <Card.Subtitle className="projectNext">
                                What's Next: 
                                Expanding servives for more than just vetnarians. Looking into more complex verification
                                system for doctor sign-ups. Ending/Declining incoming virtual appointment feature. Document upload
                                for doctor's portal and payment method for services.
                            </Card.Subtitle>
                        </Card.Body>
                    </Card> */}

                    <div className="projectOne">
                        <a href="https://zoovio.netlify.app/" target="_blank"> 
                            <img loading="lazy" className="appScreenshots" alt="zoovioApp" class="image__img" href="https://zoovio.netlify.app/" target="_blank" src={zoovioApp}/>
                        </a>
                  {/* <h2 className="projectName top"> ZooVio</h2> */}
                        <div class="image__overlay image__overlay--primary">
                            <NavLink class="image__title" className="nav-link nav-selected" exact to="/projects/zoovio">
                                ZooVio
                                </NavLink>
                                

                                <p class="image__description">
                                    Too many pets, not enough time. Welcome to ZooVio, you're one stop shop and 
                                    your pets will thank you. Need to create a task? Check and you can view it
                                    in our cute calander. Need to locate a new pet shop because the one 2 blocks 
                                    down shut down? We've got you covered. Still super nervous about setting about 
                                    appointments because, well... Covid? Say no more, set up a virtual appointment 
                                    with your pets' vetenarian today.
                                </p>
                                <p class="image__description"> Built with React, Redux, Node.js + Express.js., PostgreSQL
                                </p>

                                <a style={{fontVariant:'small-caps', fontSize:'28px'}} className="image__link" href="https://github.com/Zoovio-app/zoovio" target="_blank"> The Code </a> 
                                <a style={{fontVariant:'small-caps', fontSize:'24px'}} className="image__link" href="https://zoovio.netlify.app/" target="_blank"> Live Site</a>
                                <NavLink style={{fontVariant:'small-caps', fontSize:'20px'}} class="image__title" className="nav-link nav-selected" exact to="/projects/zoovio">
                                Click Me to View More
                                </NavLink>

                            </div>
                    {/* <div className="codeDiv">
                      <a className="appLink" href="https://zoovio.netlify.app/" target="_blank">Keep Track of Your Pets! <span role="img" alt="smile emoji"> 😁 </span> </a>
                      <a className="checkOutTheCode" href="https://github.com/darsuabasi/zoovio" target="_blank">    Check out the code.</a>
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
                  </p> */}
                </div>


                {/* </Col> */}

                {/* <Col> */}
                    {/* <Card className="fullCard" style={{ height: '30rem', width: '24rem'}}>
                        <Card.Img className="projectPic" variant="top" alt="allAboutTheGreenApp" style={{ width:"350px", height:"200px"}} src={aatgApp} />
                        <Card.Body>
                            <Card.Title className="projectName">All About the Green</Card.Title>
                            <Card.Text className="projectInfo">
                                Fullstack React app coded for Pursuit's 48 hour Hackathon, sponsored by CodeAcademy.
                                Users can look up plant information by utilizing the search feature. There is also a
                                community forum where users can create posts and leave comments for discussion purposes.
                                Photos can also be uploaded along with the post. Users can also upload photo's of plants 
                                in the plant ID feature to get a list of possibile plants it could be. [Utilizing Plant.id API]
                                Given the MVP Award by Codecademy judges!
                            </Card.Text>
                            <Card.Subtitle className="projectNext">
                                What's Next: 
                                Get application deployed. Debug inconsistancies with Plant.Id API as well as cleanining up the 
                                design so that it's mobile friendly.
                            </Card.Subtitle>
                            <button className="linkButtons appLink" href="https://github.com/darsuabasi/AllAboutTheGreen">Check out the code!</button>
                        </Card.Body>
                    </Card> */}
                {/* </Col> */}


                <div className="projectTwo">
                    <a href="https://github.com/Ohidurr/AllAboutTheGreen" target="_blank">
                        <img loading="lazy" className="appScreenshots" alt="allAboutTheGreenApp" class="image__img" src={aatgLanding}/>
                    </a>

                    <div class="image__overlay image__overlay--primary">
                        <div class="image__title">All About the Green</div>
                        <p class="image__description">
                        A beginner friendly plant app created for Pursuit's 48 hour Hackathon, sponsored by CodeAcademy. Users are able to look up information on various plants, upload photos to the community forum and scan plant images to recieve plant identification accuracy report. Won MVP Award from CodeAcademy judges.
                        </p>

                        <a style={{fontVariant:'small-caps', fontSize:'28px'}} className="image__link" href="https://github.com/Ohidurr/AllAboutTheGreen" target="_blank"> The Code </a>
                        <NavLink style={{fontVariant:'small-caps', fontSize:'20px'}} class="image__title" className="nav-link nav-selected" exact to="/projects/all-about-the-green">
                            Click Me to View More
                        </NavLink>
                    </div>
                  {/* <h2 className="projectName top"> All About the Green </h2>
                  <div className="codeDiv"> 
                    <a className="checkOutTheCode" href="https://github.com/darsuabasi/AllAboutTheGreen" target="_blank"> Check out the code.</a>
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
                  </p> */}
                </div>

                {/* <Col> */}
                    {/* <Card className="fullCard" style={{ height: '30rem', width: '24rem' }}>
                        <Card.Img className="projectPic" variant="top" alt="pinterestApp" style={{ width:"350px", height:"200px"}} src={pinterestApp2} />
                        <Card.Body>
                            <Card.Title className="projectName">Pinterest Clone</Card.Title>
                            <Card.Text className="projectInfo">
                                Fullstack React app. Users can signup/login through Google Firebase, create pins and boards with images.
                                Users can view their boards and pins on their profile. New pins can aslo be added to previously created boards.
                                Boards can be deleted which will in turn remove all pins in that board. Modal is utilized so that images are the focus.  
                            </Card.Text> 
                            <Card.Subtitle className="projectNext">
                                What's Next: 
                                Users will be able to view other users' profiles which will show their pins and boards.
                                Users will be able to search pins by hashtag.
                                Users will have the ability to like pins which will then display in a generated "Likes" board.
                            </Card.Subtitle>
                            <button className="linkButtons appLink" href="https://mock-trest.netlify.app/"> Happy Pinning <span role="img" alt="smile emoji"> 😁 </span> </button>
                            <button className="linkButtons appLink" href="https://github.com/darsuabasi/CTAPintrest"> Check out the code! </button>
                        </Card.Body>
                    </Card> */}

                </CardDeck>
                </Col>
            </Row>
      </Container>

    )
}

export default NewProject