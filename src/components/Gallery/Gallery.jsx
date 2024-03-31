
import React from 'react';
import './Gallery.css'; 
import ReactImageGallery from "react-image-gallery";
import images from "./imagesGallery";

export default function Gallery() {
  return (
    <div className="SectionStyled"> 
      <div id="gallery" className="Section"> 
        <div className="Container"> 
          <ReactImageGallery items={images} />
        </div>
      </div>
    </div>
  );
}

