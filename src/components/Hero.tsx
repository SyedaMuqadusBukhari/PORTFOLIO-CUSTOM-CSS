import React from "react";
import Navbar from "./Navbar";
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero-container"
    >
      
      <Navbar />
      <div className="hero-data">
      <div> <img src="/image.png" alt="profile pic" height={700} width={700}/></div>
      
      <div className="hero-content">
        
        <div className="hero-text">
          <div className="hero-main"> 
            <p data-aos="zoom-in-up">I am</p>
            <p data-aos="zoom-in-up">Muqadus</p>
            <p data-aos="zoom-in-up">Bukhari</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;