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
/>

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
         <h1 className="fw-bold display-4">
  <span style={{ color: "#A078F0" }}>  Hey,I’m Sakshi</span> 👋
</h1>
        </ScrollFadeIn>
        
        <h4 style={{ color: "#ffffff" }} className="mb-3">
  Debugging logic by day, doodling chaos by night 🎨 💻
</h4>
        <p className="text-secondary mb-4">
          I’m a UI/UX designer, web developer, and DSA enthusiast — currently pursuing Electrical & Computer Engineering (with a scholarship that keeps me humble 😄). Whether it's designing clean interfaces or solving messy bugs, I'm always up for the challenge.
        </p>
        <div>
          <a href="#projects" className="btn btn-primary px-4 py-2 shadow-sm">
          View Projects
        </a>
        <a href="/myresume.pdf"
            className="btn btn-outline-light btn-lg ms-5"
            target="_blank"
            rel="noreferrer">
          Download Resume
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
          style={{ width: "250px", height: "250px", objectFit: "cover", border: "4px solid #c19cf7" }}
        />
      </motion.div>
    </div>
  );
}
