import React from "react";
import { motion } from "framer-motion";
import sakshiImg from "../assets/imagee.png";
import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-section container-fluid min-vh-100 position-relative d-flex align-items-center overflow-hidden">
      {/* Background Poster Graphic Elements */}
      <div className="hero-poster-bg">
        <motion.div 
          className="giant-title"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          SAKSHI
        </motion.div>
        
        <motion.div 
          className="giant-title outline-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        >
          SINGH
        </motion.div>
        
        <motion.div 
          className="poster-circle"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
      
      {/* Main Content Container */}
      <div className="container position-relative z-1 py-5 mt-5">
        <div className="row align-items-center min-vh-75">
          {/* Left Column: Bio Card */}
          <div className="col-lg-6 col-md-7 text-start">
            <motion.div
              className="hero-card-editorial"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="mono-badge">/ INTRO</div>
              <h1 className="hero-main-title mt-2">
                Designing &amp; building the web
              </h1>
              <p className="hero-desc mt-3">
                An engineering student who loves designing and developing cool things
                for the web. I like keeping things simple — whether it’s a design,
                code, or even solving DSA problems. From clean UIs to fun coding
                projects, I enjoy learning and building stuff that makes life a little
                easier (and prettier).
              </p>
              
              <div className="hero-buttons d-flex gap-4 mt-4 flex-wrap">
                <a href="#projects" className="btn-poster-primary">
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1PQH4jFO8P2I4WyHInSCnFh6aGViNzXb4/view"
                  className="btn-poster-secondary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Framed Image */}
          <div className="col-lg-6 col-md-5 d-flex justify-content-center mt-5 mt-md-0">
            <motion.div
              className="poster-image-container"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img
                src={sakshiImg}
                alt="Sakshi"
                className="poster-profile-img"
              />
              <div className="image-caption-bar">
                <span className="caption-label">SAKSHI SINGH</span>
                <span className="caption-tag"> AI / DEV </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
