import React from "react";
import "./Hero.css";
import logo from "../assets/logo.jpg"; // Import logo

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Logo */}
        <img src={logo} alt="Solo Parents Welfare Logo" className="hero-logo" />
        
        {/* Text Content */}
        <div className="hero-text">
          <h2>Support for Solo Parents in Santa Maria</h2>
          <p>Providing assistance and welfare programs for solo parents.</p>
          
          {/* Buttons */}
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
