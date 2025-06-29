import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp , FaCode} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer bg-dark text-white pt-4 position-relative">
      <div className="container text-center">
        <h5 className="fw-bold mb-2">Made with ☕ & Creativity — Sakshi Singh</h5>
        <p className="mb-3 fst-italic">“Designer by passion, coder by curiosity.”</p>

        {/* Socials */}
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://github.com/SakshixSingh" className="text-white fs-4" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-singh-88683024a/" className="text-white fs-4" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/sakshiii02" className="text-white fs-4" target="_blank" rel="noreferrer">
            <FaCode/>
          </a>
        </div>

        {/* Buttons */}
        <div className="mb-4">
          <a
            href="mailto:sakshisingh020405@gmail.com"
            className="btn btn-outline-light btn-sm me-2"
          >
            Email Me
          </a>
          <a
            href="/Sakshi_Singh_Resume.pdf"
            className="btn btn-outline-light btn-sm"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>

        {/* Copyright */}
        <p className="text-secondary small mb-0">
          &copy; {new Date().getFullYear()} Sakshi Singh. All rights reserved.
        </p>

        {/* Scroll to top button */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
