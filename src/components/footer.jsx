import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp, FaCode } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="editorial-footer position-relative py-5" id="contacts">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>06 / CONTACT</span>
        </div>

        <div className="footer-content text-center mt-5 py-4">
          <h2 className="footer-slogan mb-4">
            LET'S BUILD<br />SOMETHING.
          </h2>
          
          <p className="footer-subtext mb-5">
            “Designer by passion, coder by curiosity.” — Sakshi Singh
          </p>

          {/* Buttons */}
          <div className="footer-action-buttons mb-5 d-flex justify-content-center gap-4 flex-wrap">
            <a
              href="mailto:ssingh33_be22@thaapr.edu"
              className="btn-footer-primary"
            >
              Email Me
            </a>
            <a
              href="https://drive.google.com/file/d/1PQH4jFO8P2I4WyHInSCnFh6aGViNzXb4/view"
              className="btn-footer-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Socials */}
          <div className="footer-socials d-flex justify-content-center gap-4 mb-5">
            <a
              href="https://github.com/SakshixSingh"
              className="social-icon-link"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-singh-88683024a/"
              className="social-icon-link"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/sakshiii02"
              className="social-icon-link"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              <FaCode />
            </a>
          </div>

          <div className="footer-divider mb-4"></div>

          {/* Copyright */}
          <div className="d-flex justify-content-between align-items-center flex-column flex-md-row gap-3">
            <p className="footer-copyright small mb-0">
              &copy; {new Date().getFullYear()} Sakshi Singh. All rights reserved.
            </p>
            <p className="footer-tagline small mb-0">
              MADE WITH ☕ &amp; CREATIVITY
            </p>
          </div>
        </div>

        {/* Scroll to top button */}
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
