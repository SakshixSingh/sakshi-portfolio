import React from "react";
import "./achievment.css";
import AchievementCards from "./achievemnetcard";

const Achievement = () => {
  return (
    <section id="achievements" className="achievements-section py-5">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>02 / ACHIEVEMENTS</span>
        </div>

        <div className="editorial-achievements-container p-5 mt-5">
          <p className="achievement-lead-text mb-4 text-center">
            📌 I'm a proud <strong>Merit Scholarship holder</strong> in Electrical &amp; Computer Engineering,
            with a love for tech, design, and teamwork. I’ve won hackathons, mentored juniors in UI/UX,
            and contributed actively to creative projects!
          </p>
          
          <AchievementCards />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
