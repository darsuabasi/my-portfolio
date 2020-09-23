import React, { useState } from 'react';
import NavBar from './NavBar';
import Typing from 'react-typing-animation';
import '../css/Photography.css';
import GalleryGrid from './PhotoGallery/GalleryGrid';


const Photography = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="photographyMain"> 
      <div className="navInPhotography">
        <NavBar/> 
      </div>

        <div className="photographyHeading">
          <Typing className="typeAnimation">
            <h1 className="stylePhotography"> 
              Uduakabasi Shoots
            </h1>
          </Typing>
        </div>

        <div className="sliderDiv">
          <GalleryGrid/>
        </div>
    </div>  
  )
}


export default Photography;