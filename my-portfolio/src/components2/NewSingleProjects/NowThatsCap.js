import React from 'react';
import '../../css2/Lifetrest.css';

import nowthatscapBFELogo from '../../projectASSETS/nowthatscapBFELogo.png';
import nowthatscapLFWFResults from '../../projectASSETS/nowthatscapLFWFResults.jpg';
import nowthatscapLogo from '../../projectASSETS/nowthatscapLogo.png';
import nowthatscapPlayerStart from '../../projectASSETS/nowthatscapPlayerStart.gif';
import nowthatscapResultsPage from '../../projectASSETS/nowthatscapResultsPage.gif';
import nowThatsCapLanding from '../../projectASSETS/nowThatsCapLanding.png';
import nowThatsCapTeam from '../../projectASSETS/nowThatsCapTeam.png';
import nowThatsCapResultsPageIMG from '../../projectASSETS/nowThatsCapResultsPage.png';
import nowThatsCapGameBoard from '../../projectASSETS/nowThatsCapGameBoard.png'
import nowThatsCapQuestion from '../../projectASSETS/nowThatsCapQuestion.png';
import nowThatsCapLFWFGQuestions from '../../projectASSETS/nowThatsCapLFWFGQuestions.jpg';
import nowThatsCapLFWFGameBoard from '../../projectASSETS/nowThatsCapLFWFGameBoard.jpg';
import nowThatsCapLFWFLanding from '../../projectASSETS/nowThatsCapLFWFLanding.jpg';
import nowThatsCapHFWFLanding from '../../projectASSETS/nowThatsCapHFWFLanding.png';
import nowThatsCapColorPalette from '../../projectASSETS/nowThatsCapColorPalette.png';



const NowThatsCap = () => {
    return(
        <div className="soloproject-main">
            <div className="soloproject-sub-main">
                <div className="introDiv">
                    <h1 className="single-proj-title">#NowThatsCap</h1>

                    <div> 
                        <h1 className="style-link-proj-header"> Explore the  <a className="styleLinkInProj" href="https://nowthatscap.netlify.app/" target="_blank"> "live site"</a> or check out the <a className="styleLinkInProj" href="https://github.com/ashyamanning/now-thats-cap" target="_blank"> "code"</a></h1>
                    </div>

                    <p className="single-proj-bio"> A front-end web application inspired by Black New York City culture, is the easy and breezy 
                    solution to accessing all the knowledge you already know, the things you need to know and the things you wouldn’t want to 
                    know but are still equally as important as to not allow the world to re-write history. Africa is the motherland and black 
                    culture is the blueprint and it was our mission to showcase that.     
                    </p>
                </div>

                <div className="imageDiv-singleprojects">

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowthatscapPlayerStart} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Solo Team/Player available for now. Enter your name or your team's name to start the game. After, you'll be naviagted to the categories
                                page where you'll choose from the 6 available categories. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowthatscapResultsPage} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Players have 1 minute and 25 seconds to answer as many questions correctly as they can. When the timer hits "0", players will be navigated 
                                to the results page.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapColorPalette} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Selcted color palette for applcation. Primary colors set to #001524, #15616D and #FF7D00.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapLFWFLanding} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Low fidelity wire framing of App Logo
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapHFWFLanding} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Completed main logo using Logo studio
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapLanding} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                #NowThatsCap landing page with various logos incorporated
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapResultsPageIMG} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Results page finalization using Material-UI and React framework for confetti effect
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowthatscapLFWFResults} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Low fidelity wire framing of the "Results Page"
                            </p>
                        </div>
                    </div>

                    

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapLFWFGameBoard} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Low fidelity wire framing of Game Board display
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapGameBoard} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Game board implementation through the use of Material-UI, CSS3 and Grid
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapQuestion} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Question card modal implemented through use of Material-UI Modal and CSS3
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapLFWFGQuestions} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Low fidelity wire framing of questions/game cards via Game Board
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={nowThatsCapTeam} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                With Love, The #NowThatsCap Team
                            </p>
                        </div>
                    </div>

                </div>

                {/* <div className="app-demo-video-div">
                    <h1 className="single-proj-demo-heading">Application Demo</h1>

                    <div className="app-demo-sub-video-div"> 
                        <iframe loading="lazy" className="responsive-iframe videoDemo" src="https://www.youtube.com/embed/Wc_gc45NdRg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div> */}
            </div> 
        </div>
    )
}


export default NowThatsCap
