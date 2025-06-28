import React from "react";
import "./aboutme.css";
// make sure this image exists

const AboutMe = () => {
  return (
    <section id="about" className="about-section py-5 position-relative">
      <div className="container d-flex justify-content-center">
        <div className="about-card text-start p-5">
          <h2 className="about-title mb-4">📓 About Me</h2>
          <p className="about-text">
            Dear Diary,<br /><br />
            I’m Sakshi. I'm studying Electrical and Computer Engineering — which means my life is a wild mix of circuits and semicolons.<br /><br />
            I love making pretty things functional and functional things pretty. Some people paint on canvas; I paint with Figma, HTML, and a mildly unstable WiFi connection.<br /><br />
            I don’t chase bugs anymore. I politely ask them to leave.<br /><br />
            I love <strong>UI/UX</strong>, <strong>web dev</strong>, and that sweet dopamine hit when a <strong>DSA problem</strong> actually compiles without me crying.<br /><br />
            Oh, and I doodle. A lot. It’s how I translate chaos into calm.<br /><br />
            — <span className="signature">Sakshi 🖤</span>
          </p>
        </div>
      </div>

      {/* Floating Pen */}
     
    </section>
  );
};

export default AboutMe;
