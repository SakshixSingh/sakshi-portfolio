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

        <div className="editorial-achievements-container mt-5">
          <AchievementCards />
        </div>
      </div>
    </section>
  );
};

export default Achievement;
