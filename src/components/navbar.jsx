import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaCode, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="floating-navbar-console">
      <div className="navbar-console-container">
        {/* Left branding */}
        <div className="logo-text">
          <span className="brand-dot"></span>
          sakshi@v3.0
        </div>

        {/* Center navigation links */}
        <div className={`nav-links-console ${isOpen ? "open" : ""}`}>
          <a href="#about" className="nav-link-console" onClick={() => setIsOpen(false)}>about</a>
          <a href="#achievements" className="nav-link-console" onClick={() => setIsOpen(false)}>achievements</a>
          <a href="#projects" className="nav-link-console" onClick={() => setIsOpen(false)}>projects</a>
          <a href="#contacts" className="nav-link-console" onClick={() => setIsOpen(false)}>contact</a>
        </div>

        {/* Right social dock + hamburger */}
        <div className="navbar-right-console">
          <div className="social-dock-console">
            <a
              href="https://github.com/SakshixSingh"
              target="_blank"
              rel="noreferrer"
              className="dock-link-console"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-singh-88683024a/"
              target="_blank"
              rel="noreferrer"
              className="dock-link-console"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/sakshiii02"
              target="_blank"
              rel="noreferrer"
              className="dock-link-console"
              title="LeetCode"
            >
              <FaCode />
            </a>
          </div>

          <button className="hamburger-console" onClick={toggleMenu} aria-label="Toggle navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
