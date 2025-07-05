import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="neumorphic-navbar">
      <div className="navbar-content">
        <div className="logo-text">sakshi@v3.0</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link">About</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contacts" className="nav-link">Contact</a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
