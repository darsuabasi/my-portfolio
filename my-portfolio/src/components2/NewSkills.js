import React from 'react';
import Typing from 'react-typing-animation';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../css2/NewSkills.css';
import styled, { keyframes } from "styled-components";
import { bounce, hinge, rotateInDownLeft, rubberBand, slideInRight } from "react-animations";
import html_css_js from '../assets/html_css_js.png';
import nodejs from '../assets/nodejs.png';
import reduxLogo from '../assets/reduxLogo.png';
import expressJS from '../assets/expressJS.png';
import postman from '../assets/postman.png';
import react from '../assets/react.png';
import postgresql from '../assets/postgresql.webp';
import gitLogo from '../assets/gitLogo.png';
import illustrator from '../assets/illustrator.svg';
import bootstrap from '../assets/bootstrap.png';
import sass from '../assets/sass.png';
import firebase from '../assets/firebase.png'



const NewSkills = () => {
    const Bounce = styled.div`animation: 10s ${keyframes `${bounce}`} infinite`;
    // const Flip = styled.div`animation: 5s ${keyframes `${flip}`} infinite`;
    const RotateInDownLeft = styled.div`animation: 5s ${keyframes `${rotateInDownLeft}`} infinite`;
    const RubberBand = styled.div`animation: 5s ${keyframes `${rubberBand}`} infinite`;
    // const Tada = styled.div`animation: 5s ${keyframes `${tada}`} infinite`;
    const Hinge = styled.div`animation: 8s ${keyframes `${hinge}`} infinite`;
    // const Jello = styled.div`animation: 5s ${keyframes `${jello}`} infinite`;
    const SlideInRight = styled.div`animation: 20s ${keyframes `${slideInRight}`} infinite`;
    // const tadaFlip = merge(tada, flip);

    return (    
        <div className="skillsMain">
            <div className="skillsHeading">
        <Typing>
          <h1 className="styleSkills"> 
            Uduakabasi Works
          </h1>
        </Typing>
      </div>

        
        <Container 
            fluid
            // whileHover={{
            // scale: 1.2, 
            // transition: { duration: 1 },
            // }}
            // whileTap={{ scale: 0.9 }}
            // onPan={{scale: 1.2}}
            className="skillsDiv"
            >

            <Row className="justify-content-sm-center rowUno">
                <Col className="singleCol">
                    <Bounce>
                        <img className="ThreeSkills" alt="html_css_javascript" src={html_css_js}/>
                    </Bounce>
                </Col>

                <Col className="singleCol">
                    <img className="nodejsSkill" alt="node.js" src={nodejs}/>
                </Col>

                <Col className="singleCol">
                    <img className="expressSkill" alt="express" src={expressJS}/>
                </Col>

                <Col className="singleCol">
                    <SlideInRight>
                        <img className="postmanSkill" alt="postman" src={postman}/>
                    </SlideInRight>
                </Col>

            </Row>

            <Row className="rowDos">
                <Col className="singleCol">
                    <img className="illustratorSkill" alt="illustrator" src={illustrator}/>
                </Col>

                <Col className="singleCol">
                    <RubberBand>
                        <img className="firebaseSkill" alt="firebase" src={firebase}/>
                    </RubberBand>
                </Col>

                <Col className="singleCol">
                    <img className="bootstrapSkill" alt="bootstrap" src={bootstrap}/>
                </Col>

                <Col className="singleCol">
                    <img className="sassSkill" alt="sass" src={sass}/>
                </Col>


            </Row>


            <Row className="rowTres">
                <Col className="singleCol">
                    <img className="postgresqlSkill" alt="postgreSQL" src={postgresql}/>
                </Col>


                <Col className="singleCol">
                    <img className="gitSkill" alt="git" src={gitLogo}/>
                </Col>

                <Col className="singleCol">
                    <Hinge>
                        <img className="reduxSkill" alt="redux" src={reduxLogo}/>
                    </Hinge>
                </Col>

                <Col className="singleCol">
                    <img className="reactSkill" alt="react" src={react}/>
                </Col>


            </Row>
        </Container>
        </div>

    )

}

export default NewSkills