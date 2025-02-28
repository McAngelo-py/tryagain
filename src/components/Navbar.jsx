import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToAbout = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      navigate("/", { replace: false });

      setTimeout(() => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  // ✅ Close menu when resizing back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Solo Parent Welfare
        </Link>

        <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link" onClick={scrollToAbout}>About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
