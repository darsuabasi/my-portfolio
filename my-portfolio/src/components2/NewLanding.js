import React from 'react';
import { useHistory } from 'react-router-dom';
import Typing from 'react-typing-animation';
import { pageTransition, pageVariants } from "../util/framerStyles";
import { motion } from "framer-motion";
import Container from 'react-bootstrap/Container';
import NavBar2 from './NavBar2';
import '../css2/NewLanding.css'

const NewLanding = ({ Component, pageProps, router }) => {
    const history = useHistory();
    return (
        <Container fluid className="newLandingDiv">
 
            <div loading="lazy" className="majorDiv"> 
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
                                <p className="landingInfoHead"> Hi, I'm Uduakabasi.</p>
                                <h1 className="landingInfoSub">  Web Engineer,</h1>
                                <h2 className="landingInfoSub"> Fullstack,</h2>
                                <h3 className="landingInfoSub"> && more.</h3>
                            </Typing>

                            <div className="btn-div">
                                <button className="enterWorldBtn" onClick={() => history.push(`/about${history.location.pathname}`)}>Enter </button>
                                <button className="enterContactBtn" onClick={() => history.push(`/contact${history.location.pathname}`)}>Contact</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Container>
    )
}

export default NewLanding;




// .enterWorldBtn {
//     background-image: linear-gradient(to left, #ffffff, #F18E7C, #cb0000) !important;
//     background-size: 200% !important;
//     margin-left: 1rem !important;
//     width: 6rem !important;
// }

// .enterContactBtn {
//     background-image: linear-gradient(to left, #ffffff, #F18E7C, #cb0000) !important;;
//     background-size: 200% !important;
//     width: 7rem !important;
//     align-self: flex-end !important;
// }