import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section py-5 position-relative">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>01 / ABOUT ME</span>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="about-minimal-content text-start">
            <h2 className="about-title mb-4">Notebook</h2>
            <p className="about-text">
              Hi, I’m Sakshi! I’m currently studying Electrical and Computer Engineering, 
              where I get to explore both the hardware and software side of technology.
              <br /><br />
              I enjoy designing and building projects that are both functional and 
              visually appealing. I specialize in building next-gen intelligent systems, 
              focusing on <strong>Agentic AI</strong>, <strong>RAG Applications</strong>, and orchestrating complex 
              workflows using <strong>n8n</strong> and <strong>LangChain</strong>.
              <br /><br />
              My interests also include <strong>UI/UX</strong>, <strong>web development</strong>, 
              and continuously improving my problem-solving skills through DSA.
              <br /><br />
              Outside of academics, I like doodling and working on creative ideas — 
              it helps me keep a balance between logic and creativity.
              <br /><br />
              <span className="signature">— sakshi</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
