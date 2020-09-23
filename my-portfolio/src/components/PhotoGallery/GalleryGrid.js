import React from 'react';
import Images from './Images';
import './css/GalleryGrid.css'
import { motion } from 'framer-motion';

const GalleryGrid = ({ }) => {
  return (
    <div className="img-grid">
      {Images && Images.map(Images => (
        <motion.div className="img-wrap" 
          layout
          whileHover={{ opacity: 1 }}s
        >
          <motion.img className="galleryImageStyling" style={{width:"550px", height:"500px", borderRadius:"1rem"}} src={Images} alt="Gallery Photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid;