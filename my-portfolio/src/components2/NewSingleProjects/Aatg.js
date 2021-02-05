import React from 'react';
import '../../css2/Lifetrest.css';
import aatfSearch from '../../projectASSETS/aatfSearch.gif';
import aatgLogo from '../../projectASSETS/aatgLogo.png';
import aatgCF from '../../projectASSETS/aatgCF.gif';
import aatgScanresults from '../../projectASSETS/aatgScanresults.png';
import aatgLanding from '../../projectASSETS/aatgLanding.png';
import zoovioUsermessages from '../../projectASSETS/zoovioUsermessages.png';

const Aatg = () => {
    return (
        <div className="soloproject-main">
            <div className="soloproject-sub-main">
                <div className="introDiv">
                    <h1 className="single-proj-title">All About the Green</h1>

                    <div> 
                        <h1 className="style-link-proj-header"> Check out the <a className="styleLinkInProj" href="https://github.com/Ohidurr/AllAboutTheGreen" target="_blank"> "code"</a></h1>
                    </div>

                    <p className="single-proj-bio"> Fullstack React app coded for Pursuit's 48 hour Hackathon, sponsored by CodeAcademy.
                        Users can look up plant information by utilizing the search feature. There is also a
                        community forum where users can create posts and leave comments for discussion purposes.
                        Photos can also be uploaded along with the post. Users can also upload photo's of plants 
                        in the plant ID feature to get a list of possibile plants it could be. [Utilizing Plant.id API]
                        Given the MVP Award by Codecademy judges!
                    </p>
                </div>

                <div className="imageDiv-singleprojects">

                    <div className="project-screenshot-div">
                        <img loading="lazy" style={{background:'#23504d'}} className="project-single-images" class="image__imgimg" src={aatgLogo} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Created this swanky logo with the use of SVG vector images. Easier to manipulate with transparent backgrounds.
                            </p>
                        </div>
                    </div>


                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={aatfSearch} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                'All About the Green' landing page. Users are immediately greeted with a large search bar where users 
                                can search up any plant. Top 3 plants of the month are also displayed. Hackathon 2020!
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={aatgCF} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Have a question about a plant you just bought or maybe you want to show of your 
                                aloe? Upload a photo to the community forum where users can chime in on the action. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={aatgScanresults} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Walking down the street and you see a cool plant but don't know what it is? Take a picture, it'll last longer. 
                                Literally. Head over to the 'Plant Scan' tab and upload your photo to get back results on what it could be.
                            </p>
                        </div>
                    </div>




                </div>

                {/* <div className="app-demo-video-div">
                    <h1 className="single-proj-demo-heading">Application Demo</h1>
                    <h3 style={{color:'#fff', fontVariant:'small-caps'}} className="demo-link-broken"> <a style={{color:'#fff', fontVariant:'small-caps', fontSize:'22px'}} href="https://youtu.be/fJBdcmVWWoY?t=3778" target="_blank"> Click here to view directly on youtube if video is broken</a> </h3>

                    <div className="app-demo-sub-video-div"> 
                        <iframe className="responsive-iframe videoDemo" src="https://youtu.be/fJBdcmVWWoY?t=3778" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div> */}
            </div> 
        </div>
    )
}

export default Aatg
