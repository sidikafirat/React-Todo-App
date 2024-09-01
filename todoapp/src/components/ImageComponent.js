// src/components/ImageComponent.js
import React from 'react';
import '../App.css'; // CSS dosyasını import et
import myImage from './assets/balon.png'; // Resmi import et

function ImageComponent() {
  return (
    <div className="image-container">
      <img src={myImage} alt="My Image" className='balon1'/>
      <img src={myImage} alt="My Image" className='balon2'/>
    </div>
  );
}

export default ImageComponent;