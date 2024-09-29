import React from 'react';
import Navbar from './navbar';
import '../index.css';
import asteroidImg from '../assets/Meteor-Falling-PNG-File.png';
import backgroundImg from '../assets/spaceimg.webp';
import Information from './information'; 

const HomePage = () => {
  const scrollToInformation = () => {
    const infoSection = document.getElementById('information-section');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div
        className="homepage"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <Navbar />
        <div className="content">
          <img src={asteroidImg} alt="Asteroid" className="asteroid" />
          <h1 className="title">
            AstroViz <span className="highlight"></span>
            <span class="highlight"></span>
            <span class="highlight"></span>
            <span class="highlight"></span>
          </h1>
        </div>
        <div className="scroll-down" onClick={scrollToInformation}>
          &#x25BC;
        </div>
      </div>

      {}
      <Information />
    </div>
  );
};

export default HomePage;
