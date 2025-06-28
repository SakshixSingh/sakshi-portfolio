import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="neumorphic-navbar fixed-top px-4 py-3">
      <div className="d-flex justify-content-between align-items-center container">
        <a className="logo-text fw-bold" href="#home">sakshi@v3.0</a>
        <ul className="nav gap-4">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#achievements" className="nav-link">Achievements</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
