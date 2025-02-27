import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Solo Parents Welfare
        </Link>

        <button className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="nav-link" onClick={() => setIsNavOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" onClick={() => setIsNavOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link" onClick={() => setIsNavOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;