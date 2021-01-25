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
// import pinterestApp from '../assets/pinterestApp.jpeg';
import pinterestApp2 from '../assets/pinterestApp2.png';
// import letsgoApp from '../assets/letsgoApp.png';
import { Link } from 'react-router-dom'


const NewProject = () => {
    return (
        <Container fluid className="projectMain" style={{width: '100vw'}}>

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
                    <a href="https://lifetrest.netlify.app/" target="_blank"> 
                        <img className="appScreenshots" alt="pinterestApp" style={{width:"350px", height:"192px"}} src={pinterestApp2} />
                    </a>
                  <h2 className="projectName top"> Lifetrest</h2>
                  <div className="codeDiv">
                    <a className="appLink" href="https://lifetrest.netlify.app/" target="_blank"> Happy Pinning <span role="img" alt="smile emoji"> 😁 </span>  </a>
                    <a className="checkOutTheCode" href="https://github.com/darsuabasi/CTAPintrest" target="_blank">Check out the code.</a>
                  </div>
                  <p className="bioForTheProject">
                  Fullstack React app. Users can signup/login through Google Firebase, create pins and boards with images.
                  Users can view their boards and pins on their profile. New pins can aslo be added to previously created boards.
                  Boards can be deleted which will in turn remove all pins in that board. Modal is utilized so that images are the focus.  
                  </p>
                  <p className="whatsNext">
                  What's Next: 
                  The ability to delete pins.
                  {/* Users will be able to search pins by hashtag. */}
                  The ability to like pins which will then display in a generated "Likes" board.
                  </p>
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
                            <img className="appScreenshots" alt="zoovioApp" href="https://zoovio.netlify.app/" target="_blank" style={{width:"350px", height:"192px"}} src={zoovioApp}/>
                        </a>
                  <h2 className="projectName top"> ZooVio</h2>
                    <div className="codeDiv">
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
                  </p>
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
                        <img className="appScreenshots" alt="allAboutTheGreenApp" style={{width:"350px", height:"192px"}} src={aatgApp}/>
                    </a>
                  <h2 className="projectName top"> All About the Green </h2>
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
                  </p>
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