import React from 'react';
import '../../css2/Lifetrest.css';
// lifetrestLandingpage.gif

import lifetrestLandingpage from '../../projectASSETS/lifetrestLandingpage.gif';
import lifetrestFeed from '../../projectASSETS/lifetrestFeed.gif';


import lifetrestPin from '../../projectASSETS/lifetrestPin.png';
import lifetrestUserProfile from '../../projectASSETS/lifetrestUserProfile.png';
import lifetrestCreatePin from '../../projectASSETS/lifetrestCreatePin.png';
import lifetrestUPV from '../../projectASSETS/lifetrestUPV.png';
import aboutTwo from '../../projectASSETS/aboutTwo.png';
import comingsoonTwelve from '../../projectASSETS/comingsoonTwelve.png';
import deleteBoardsTen from '../../projectASSETS/deleteBoardsTen.png';
import createboardFive from '../../projectASSETS/createboardFive.png';
import signupThree from '../../projectASSETS/signupThree.png';
import lifetrestSearch from '../../projectASSETS/lifetrestSearch.png';
import lifetrestSEARCH from '../../projectASSETS/lifetrestSEARCH.gif'

const Lifetrest = () => {
    return(
        <div className="soloproject-main">
            <div className="soloproject-sub-main">
                <div className="introDiv">
                    <h1 className="single-proj-title">Lifetrest</h1>

                    <div> 
                        <h1 className="style-link-proj-header"> Explore the  <a className="styleLinkInProj" href="https://lifetrest.netlify.app/" target="_blank"> "live site"</a> or check out the <a className="styleLinkInProj" href="https://github.com/darsuabasi/CTAPintrest" target="_blank"> "code"</a></h1>
                    </div>

                    <p className="single-proj-bio"> A fullstack React application where users can signup and/or login with the use of Google Firebase's user authentication. Users can create pins and boards with through the use of 
                                                    Google Firebase's cloud based storage. Initially, image uploading was set up through Multer but after 
                                                    deploying backend of application to Heroku, I realized that it is READ-ONLY which prompted me to do more research into Google's Firebase Storage.
                                                    Users can view their boards and pins in their profile settings page profile. To create a pin, users must add it to a created board which whill be displayed in the select tab.
                                                    Boards can be deleted which will in turn remove all pins in that board. Modals were utilized so that the pins are the focus of this app.  
                    </p>
                </div>

                <div className="imageDiv-singleprojects">

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestLandingpage} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Lifetrest landing page using css to create animations 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={aboutTwo} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                What's the purpose of this app? Find out in the 'About' modal. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={signupThree} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Users can create an account via the 'Signup' modal. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestFeed} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Right away, a user is navigated to the home feed which shows every single pin created in the Lifetrest app. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestPin} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                When you click on a pin, it activates the pin modal which shows you more information about a pin like who created it and if they added content. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={deleteBoardsTen} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                No longer interested in a board you created? Hover over it so you can delete it but beware, it will delete all of the pins you added to that board. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={createboardFive} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Create a board which is neccesary to create a pin.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestCreatePin} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                To create a pin, all you need is an image and the board it'll go into. No additional content neccesary but it makes it more fun and other users can find your pin if they search the hashtags.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestSearch} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Looking for certain pins but don't want to comb through the entire app? Search based on hashtags.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestSEARCH} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Hover over pins in the hashtag results to see additonal content.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestUPV} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                View other users' profiles when you click on their username or profile picture via pins.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={lifetrestUserProfile} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Thanks for checking out my app and I hope you enjoyed it as much as I enjoyed creating it.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="app-demo-video-div">
                    <h1 className="single-proj-demo-heading">Application Demo</h1>

                    <div className="app-demo-sub-video-div"> 
                        <iframe loading="lazy" className="responsive-iframe videoDemo" src="https://www.youtube.com/embed/Wc_gc45NdRg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div> 
        </div>
    )
}


export default Lifetrest
