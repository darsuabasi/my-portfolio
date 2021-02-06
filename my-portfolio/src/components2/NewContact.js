import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Typing from 'react-typing-animation';
import resume from '../resume/UduakabasiAbasiurua_Resume.pdf';
import Footer from './Footer';
import '../css2/NewContact.css';

const NewContact = () => {
    return (
        <Container fluid className="contactContainer">
            {/* <div className="div4Intro">
                <Typing>
                    <h1 className="styleContact"> 
                        Need My Skills? 
                        <div> 
                            <h1 className="styleContact2"> 
                                Want To Chat? </h1>
                        </div>
                    </h1>
                </Typing>
            </div> */}

            <div className="contactMainDiv">
                <CardDeck className="allTheCardsContact">
                    <Card style={{ width: '18rem', height: '18rem' }} className="lessTrivialCard">
                        <Card.Body>
                            <Card.Text style={{textAlign: 'center'}}>
                                If you want to chat about less trivial things like skincare, 
                                anime or maybe get some adivce, follow me on   
                                <a className="linksInContact" href="https://www.instagram.com/darsu.chats/" target="_blank"> Instagram </a>
                                and send me a DM.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '22rem', height: '30rem' }} className="bookMeCard">
                        <Card.Body>
                            <Card.Title className="servicesTitle">Services Provided</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="serviceItem">Fullstack Web Apps</ListGroupItem>
                            <ListGroupItem className="serviceItem">Design Consultations</ListGroupItem>
                            <ListGroupItem className="serviceItem">UX/UI Design</ListGroupItem>
                            <ListGroupItem className="serviceItem">Photography</ListGroupItem>
                            <ListGroupItem className="serviceItem">Logos</ListGroupItem>
                        </ListGroup>
                        <Card.Text style={{textAlign: 'center'}}>
                            Feel free to reach out and I'll get back to you as soon as possble.
                        </Card.Text>
                        <Card.Body className="resumeBody">
                            <Card.Link className="linksInContact" href="mailto:uduakabasiabasiurua@pursuit.org"> Email</Card.Link>
                            <Card.Link className="linksInContact" href={resume} target="_blank">Resume</Card.Link>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '18rem', height: '18rem' }} className="randomOnTwitterCard">
                        <Card.Body>
                            <Card.Text style={{textAlign: 'center'}}>
                                Maybe you want to check out the random thoughts I'm having? Check me out 
                                on <a className="linksInContact" href="https://twitter.com/darsucodes" target="_blank"> Twitter</a>. Happy Tweeting!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
            <Footer className="importedFooter"/>
        </Container>
    )
}

export default NewContact