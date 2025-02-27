import React from "react";
import "./Hero.css";
import logo from "../assets/logo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about"); // Assuming you've given the about section an ID of "about"
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <img src={logo} alt="Solo Parents Welfare Logo" className="hero-logo" />
        <div className="hero-text">
          <h2>Support for Solo Parents in Santa Maria</h2>
          <p>Providing assistance and welfare programs for solo parents.</p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more" onClick={scrollToAbout}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;