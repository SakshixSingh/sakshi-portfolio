import React from "react";
import "./aboutme.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-section py-5 position-relative">
      <div className="container d-flex justify-content-center">
        <div className="about-card text-start p-5">
          <h2 className="about-title mb-4">📓 About Me</h2>
          <p className="about-text">
            Hi, I’m Sakshi! I’m currently studying Electrical and Computer Engineering, 
            where I get to explore both the hardware and software side of technology.<br /><br />
            I enjoy designing and building projects that are both functional and 
            visually appealing. My interests include <strong>UI/UX</strong>, 
            <strong> web development</strong>, and continuously improving my 
            <strong> problem-solving skills</strong> through DSA.<br /><br />
            Outside of academics, I like doodling and working on creative ideas — 
            it helps me keep a balance between logic and creativity.<br /><br />
            — <span className="signature">Sakshi</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
