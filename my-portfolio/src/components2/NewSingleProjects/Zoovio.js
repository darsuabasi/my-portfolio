import React from 'react';
import '../../css2/Zoovio.css';
// import zoovioLandingpage from '../../projectASSETS/zoovioLandingpage.png';
import zoovioUsersignup from '../../projectASSETS/zoovioUsersignup.png';
import zoovioDoclogin from '../../projectASSETS/zoovioDoclogin.png';
import zoovioDoctorinquire from '../../projectASSETS/zoovioDoctorinquire.png';
import zoovioHomepage from '../../projectASSETS/zoovioHomepage.png';
import zoovioCreatepet from '../../projectASSETS/zoovioCreatepet.png';
import zoovioCreatetask from '../../projectASSETS/zoovioCreatetask.png';
import zoovioCalanderview from '../../projectASSETS/zoovioCalanderview.png';
// import zoovioCaltask from '../../projectASSETS/zoovioCaltask.png';
import zoovioCREATETASK from '../../projectASSETS/zoovioCREATETASK.gif';
import zoovioLanding from '../../projectASSETS/zoovioLanding.gif';
import zoovioVideoCall from '../../projectASSETS/zoovioVideoCall.gif';
import zoovioSearch from '../../projectASSETS/zoovioSearch.png';
import zoovioSearchresults from '../../projectASSETS/zoovioSearchresults.png';
import zoovioUsermessages from '../../projectASSETS/zoovioUsermessages.png';


const Zoovio = () => {
    return (
        <div className="soloproject-main">
            <div className="soloproject-sub-main">
                <div className="introDiv">
                    <h1 className="single-proj-title">ZooVio</h1>

                    <div> 
                        <h1 className="style-link-proj-header"> Explore the  <a className="styleLinkInProj" href="https://zoovio.netlify.app/" target="_blank"> "live site"</a> or check out the <a className="styleLinkInProj" href="https://github.com/Zoovio-app/zoovio" target="_blank"> "code"</a></h1>
                    </div>

                    <p className="single-proj-bio"> A fullstack React web application where users can log in using Google Firebase, create and manage tasks 
                                                    for their pets and view them in the app's calendar. Users can search for vetenarians.
                                                    Also, with Covoid-19 in mind, users can instant message vetenarians or have virtual appointments. 
                                                    Vetenarians can also log in utilizing the vet's portal. However, due to security reasons, 
                                                    doctor's can not sign up at the momment unless they are verified through the ZooVio Team.  
                    </p>
                </div>

                <div className="imageDiv-singleprojects">

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioLanding} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                ZooVio landing page using Bootstrap carousel and svg blobs for styling. Researched fun yet warm and welcoming color palettes.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioDoctorinquire} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Vetenarians can inquire about ZooVio's Services through the Doctor's Portal but they can't sign up. This is due to security reasons and the ability to discuss pricing.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioUsersignup} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Pet owners can create an account or utilize the demo login.
                            </p>
                        </div>
                    </div>


                    {/* <div className="project-screenshot-div">
                        <img className="project-single-images" class="image__imgimg" src={zoovioDoclogin} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Utilize the demo login for vet's portal 
                            </p>
                        </div>
                    </div> */}

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioHomepage} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                This is the homepage view after a user signs up or logs in.
                            </p>
                        </div>
                    </div>


                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioCreatepet} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Start off by creating a quick profile for each pet in your household.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioCREATETASK} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Create tasks for your pets. Select a pet and set the time and date. 
                                Oh and how cool is the calendar? Dotted dates mean there's a set task(s) for that day. 
                            </p>
                        </div>
                    </div>


                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioSearch} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Out of town and you need to find a groomers or a vet? Use the search feature which is possible due to YELP's API.
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioSearchresults} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Ah, you've found a vet! Go ahead and click the "Contact Provider" button which will also naviagte you to your messages. 
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioVideoCall} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                Looks like "Dr.Bender" aka Dr. Cool Guy Danny is calling Sam for that virtual appointment she set up for Nova!
                            </p>
                        </div>
                    </div>

                    <div className="project-screenshot-div">
                        <img loading="lazy" className="project-single-images" class="image__imgimg" src={zoovioUsermessages} />
                        <div class="image__overlay__two image__overlay__two--primary">
                            <p class="image__description__singleproj">
                                What are you waiting for? You too can set up that virtual appointment for Kitty!
                            </p>
                        </div>
                    </div>


                </div>

                <div className="app-demo-video-div">
                    <h1 className="single-proj-demo-heading">Application Demo</h1>
                    <h3 style={{color:'#fff', fontVariant:'small-caps'}} className="demo-link-broken"> <a style={{color:'#fff', fontVariant:'small-caps', fontSize:'22px'}} href="https://youtu.be/fJBdcmVWWoY?t=3778" target="_blank"> Click here to view directly on youtube if video is broken</a> </h3>

                    <div className="app-demo-sub-video-div"> 
                        <iframe loading="lazy" className="responsive-iframe videoDemo" src="https://youtu.be/fJBdcmVWWoY?t=3778" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Zoovio
