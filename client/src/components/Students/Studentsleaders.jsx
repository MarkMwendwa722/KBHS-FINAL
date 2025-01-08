import React from 'react';
import './ImageCard.css'; 
import Image from '../../assets/About.JPG';
import image2 from '../../assets/About.JPG';
import image3 from '../../assets/About.JPG'

const ImageCard = ({ imageSrc, position }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={position} />
      <div className="info-overlay">{position}</div>
    </div>
  );
};

const ImageCardList = () => {
  return (
    <div className="card-container">
      <ImageCard imageSrc={Image} position="Student Leaders" />
      <ImageCard imageSrc={image2} position="Student Leaders" />
      <ImageCard imageSrc={image3} position="Student Leader" />
    </div>
  );
};

export default ImageCardList;
