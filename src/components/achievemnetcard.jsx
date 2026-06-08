import React from "react";
import "./achievementcard.css";

const achievements = [
  {
    title: "Hackathon Winner - Code for Good 2024",
    description: "Won the JP Morgan Code for Good hackathon for building a social impact project using React + Firebase.",
  },
  {
    title: "UI/UX Bootcamp Mentor - GDSC",
    description: "Conducted a successful UI/UX bootcamp for juniors, covering design systems, Figma, and portfolio tips.",
  },
];

const AchievementCards = () => {
  return (
    <div className="achievement-card-container">
      {achievements.map((item, idx) => (
        <div key={idx} className="achievement-card">
          <div className="pixel-art-wrapper">
            <img src="/pixel-cat.png" alt="Pixel Art Accent" className="pixel-art-character" />
          </div>
          <div className="description">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementCards;
