import React from 'react';
import Typing from 'react-typing-animation';
import '../css2/NewPhotography.css';
import GalleryGrid2 from './NewPhotoGallery/GalleryGrid2';
import '../css2/NewPhotography.css'

const NewPhotography = () => {
  return (
    <div className="photographyMain"> 

        <div className="photographyHeading">
          <Typing className="typeAnimation">
            <h1 className="stylePhotography"> 
              Uduakabasi Shoots
            </h1>
          </Typing>
        </div>

        <div className="sliderDiv">
          <GalleryGrid2/>
        </div>
    </div>  
  )
}


export default NewPhotography;