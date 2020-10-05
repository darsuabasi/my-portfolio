import React from 'react';
import Images2 from './Images2';
import './css2/GalleryGrid2.css'
import { motion } from 'framer-motion';

const GalleryGrid = ({ }) => {
  return (
    <div className="img-grid">
      {Images2 && Images2.map(Images => (
        <motion.div className="img-wrap" 
          layout
          whileHover={{ opacity: 0.9 }}s
        >
          <motion.img className="galleryImageStyling" style={{width:"550px", height:"500px", borderRadius:"0.5rem"}} src={Images} alt="Gallery Photo"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 2 }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid;