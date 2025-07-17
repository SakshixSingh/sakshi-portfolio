import React from "react";
import { motion } from "framer-motion";
import sakshiImg from "../assets/imagee.jpg";
import ScrollFadeIn from "./scrollfadein";
import Aurora from "./background";

<Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/>;

export default function Hero() {
  return (
    <div className="container py-5 min-vh-100 d-flex flex-column-reverse flex-md-row align-items-center justify-content-center">
      {/* Left Side */}
      <motion.div
        className="text-center text-md-start col-md-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ScrollFadeIn direction="left">
          <h1
            className="fw-bold display-3"
            style={{ color: "#A078F0", fontWeight: 800 }}
          >
            Hey, I’m <span className="text-white">Sakshi</span> 🖐️
          </h1>
        </ScrollFadeIn>

        <p className="text-secondary mb-5 mt-3">
          An engineering student who loves designing and developing cool things
          for the web. I like keeping things simple — whether it’s a design,
          code, or even solving DSA problems. From clean UIs to fun coding
          projects, I enjoy learning and building stuff that makes life a little
          easier (and prettier).
        </p>

        <div>
          <a href="#projects" className="btn btn-primary px-4 py-2 shadow-sm">
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1PQH4jFO8P2I4WyHInSCnFh6aGViNzXb4/view"
            className="btn btn-outline-light btn-lg ms-5"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="col-md-6 d-flex justify-content-center mb-4 mb-md-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={sakshiImg}
          alt="Sakshi"
          className="rounded-circle shadow-lg"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            border: "4px solid #c19cf7",
          }}
        />
      </motion.div>
    </div>
  );
}
