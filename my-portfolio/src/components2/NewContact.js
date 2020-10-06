import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Typing from 'react-typing-animation';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import resume from '../resume/UduakabasiAbasiurua_Resume.pdf'
import '../css2/NewContact.css';

const NewContact = () => {
    return (
        <Container fluid className="contactContainer">
            <div className="contactMainDiv">
                <Row className="rowWithCards">
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    If you want to chat about less trivial things like skincare, 
                                    anime or maybe get some adivce, follow me on  
                                    <a className="linksInContact" href="https://www.instagram.com/darsu.chats/"><h3>Instagram</h3></a>
                                    and send me a DM.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Services Provided</Card.Title>
                                <Card.Text>
                                    Feel free to reach out and I'll get back to you as soon as possble.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Fullstack Web Application Build</ListGroupItem>
                                <ListGroupItem>Design Consultations</ListGroupItem>
                                <ListGroupItem>UX/UI Design</ListGroupItem>
                                <ListGroupItem>Photography</ListGroupItem>
                                <ListGroupItem>Logos</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={resume} target="_blank">Download Resume</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Text>
                                    Maybe you want to check out the random thoughts I'm having? Check me out 
                                    on <a className="linksInContact" href="https://twitter.com/darsucodes"> <h3>Twitter</h3></a> Happy Tweeting!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row xs={12} sm={12} md={12} lg={12} lg={12} className="rowWithSocials">
                    <Col> 
                        <div className="mySocials">
                            {/* <div className="socialOptionUL2"> */}
                                {/* <div lassName="socialOption"> */}
                                    <a href="https://github.com/darsuabasi">
                                    <img id="insta" className="logos4contact" src={github} alt="github" />
                                    </a>
                                {/* </div> */}

                                {/* <div className="socialOption"> */}
                                    <a href="https://twitter.com/darsucodes">
                                    <img id="tweets" className="logos4contact" src={twitter} alt="twitter" />
                                    </a>
                                {/* </div> */}

                                {/* <div lassName="socialOption"> */}
                                    <a href="https://www.instagram.com/darsu.chats/">
                                    <img id="insta" className="logos4contact" src={instagram} alt="instagram" />
                                    </a>
                                {/* </div> */}

                                {/* <div lassName="socialOption"> */}
                                    <a href="https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/">
                                    <img id="linkd" className="logos4contact" src={linkedin} alt="linkedin" />
                                    </a>
                                {/* </div> */}
                                
                            </div>
                        {/* </div> */}
                    {/* <Card>
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
                    </Col>
                </Row>

            </div>
        </Container>

    )
}

export default NewContact