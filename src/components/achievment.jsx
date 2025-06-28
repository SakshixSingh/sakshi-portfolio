import React from "react";
import "./achievment.css";

const Achievement = () => {
  return (
    <section id="achievements" className="achievements-section py-5">
      <div className="container">
        <div className="neumorphic-card p-4 text-center">
          <h2 className="section-title mb-4">🎖 Achievements</h2>

          <p className="achievement-text">
            📌 I'm a proud <strong>Merit Scholarship holder</strong> in Electrical & Computer Engineering,
            with a love for tech, design, and teamwork. I’ve won hackathons, mentored juniors in UI/UX,
            and contributed actively to creative projects!
          </p>

          <div className="achievement-images mt-4 d-flex justify-content-center gap-4 flex-wrap">
            <img src="/background.png"  className="achievement-img" />
            <img src="/background.png" className="achievement-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
