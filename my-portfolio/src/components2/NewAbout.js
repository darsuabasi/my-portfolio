import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Typing from 'react-typing-animation';
import mePic from '../assets/mePic.jpg';
import '../css2/NewAbout.css'
import Col from 'react-bootstrap/Col';

// import NavBar2 from './NavBar2';

const NewAbout = () => {
    const backgroundCss = {
        position: "relative",
        right: "0",
        bottom: "0",
        minWidth: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        overflow: 'hidden',
      };

    return (
        <Container className="col-12 aboutMainDiv">
            {/* <NavBar2/> */}

            {/* <div className="videoContain">
                <video className="videoBox"
    autoPlay={false}
    // muted
    loop={false}
    id="background-video"
    style={{ 
      // position: "absolute", 
      width: "100%",
      height: "100%",
      // left: 0,
      // top: 0,
      ...backgroundCss 
      }}
    >

<source src={AboutBG} type="video/mp4" />
  Your browser does not support the video tag.
</video>
            </div> */}

            <div className="row justify-content-center aboutMeParagraphContainer">
                <Col xl={6} lg={6} md={8} sm={8} xs={10} className="aboutSubMain2">
                    <h1 className="welcomeToMyPortal"> You've entered the coolest portal thus far created by moi. </h1>
                    <Typing className="typedUp">
                        <h1 className="myMiniIntro"> Coder by day, judoka by night,</h1>
                        <h2 className="myMiniIntro"> author on weekends... </h2>
                        <h3 className="myMiniIntro"> ..sometimes </h3>
                    </Typing>
                    <img className="picOfMe2" style={{width:"450px"}} alt="uduakabasi" src={mePic}/>

                    <p className="aboutmepara2"> 
                        Born in Nigeria, raised in the hustle capital of the world, NYC. 
                        Two years ago, I graduted with a Bachelors of Science in Criminal Justice with a focus in Intelligence Analyis. 
                        A year into graduting, I came across a Microsoft sponsored Hackathon by Enza Academy. I can't lie, I attended because 
                        I thought it meant they would teach you how to hack things but boy was I wrong. I spent 48 hours forging new friendships, 
                        building my confidence but most importantly, learning how to translate the skills I already had to something I virtually had 
                        no knowledge of. I was fortunate enough to be a part of a team who trusted me when it came to research, design and business 
                        architecture. Our app, PANTRY DJ won 3rd place. I was in the clouds and thinking to myself, not bad for a first time "hacker".
                        </p>

                    <p className="aboutmepara2">
                        From that moment, I knew coding was for me. In a few months, I began my new journey at Pursuit, an intensive 12-month 
                        Google-funded software engineering fellowship with a 9% acceptance rate. It wasn't an easy one. I hit some of my 
                        lowest lows but with the help and support of my amazing instructor, program manager, mentors, family and friends, I made it through and I'm only 
                        getting started.
                        </p>
            
                    <p className="aboutmepara2">
                        I hope to show women and young girls that look like me that the sky is the limit, that it's okay to not know what's next, 
                        that it's okay to make that career change, that it's okay to have to jump on a different path. After all, the only thing 
                        we can be certain of is uncertainty. 
                        </p>

                    <p className="aboutmepara2">
                        As a software developer, my goal is to create advancements in the intelligence and medical community through technology 
                        and research. Next up, Law School... after the LSAT's of course. Oh and my green belt <span role="img" alt="judo gi"> 🥋 </span> 
                        </p> 


                    <p className="aboutmepara2">
                        So now that you've dived super deep, what else is there to know? Well, hopefully once you take the journey through 
                        this work of art, you'll feel my love for UX/UI design, animation and graphics. I can also bet that you woudln't guess that I 
                        actully love working on the backend of web development but don't feel bad, it's a pretty playful design here.
                        </p> 

                    <p className="aboutmepara2">
                        With that being said, do check out the photography page and get into some of the cool views I've been able to capture.
                        </p>

                    <p className="aboutmepara2">
                        Random Facts: Skincare and Manga enthusiast here. I also write stories on Wattpad, occasionaly. City girl but I love the water. 
                        </p>

                </Col>
              </div>
        </Container>
    )
}

export default NewAbout