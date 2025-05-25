// src/TataSteel.js
import React from 'react';
import './TataSteel.css';

function TataSteel() {
  return (
    <div className="tata-container">
      <h1>Welcome to Tata Steel</h1>
      <p>
        Tata Steel is one of the world's largest steel producers and a leader in sustainable steelmaking.
      </p>
      <div className="image-gallery">
        <img src="Tatasteel.png" alt="Tata Steel Logo" />
        <img src="RT.jpg" alt="Tata Steel Factory" />
      </div>
    </div>
  );
}

export default TataSteel;
