import React from "react";
import "./achievementcard.css";

const achievementsList = [
  {
    num: "01",
    tag: "HACKATHON WINNER",
    title: "JP Morgan Code for Good 2024",
    description: "Built a social impact web application under pressure, survived on high caffeine, and took home the gold.",
  },
  {
    num: "02",
    tag: "GDSC MENTORSHIP",
    title: "UI/UX Bootcamp Leader",
    description: "Conducted bootcamp covering Figma design systems, portfolio reviews, and user interface best practices for 50+ juniors.",
  },
  {
    num: "03",
    tag: "ECE SCHOLARSHIP",
    title: "Merit Academic Award",
    description: "Recognized for outstanding academic achievement balancing electrical engineering formulas and software code.",
  },
  {
    num: "04",
    tag: "COMMUNITY ENGAGEMENT",
    title: "Open Source contributor",
    description: "Active contributor to community tools, crafting clean APIs and building engaging responsive interfaces.",
  }
];

const AchievementCards = () => {
  return (
    <div className="achievements-minimal-layout">
      <div className="achievements-graphic-side">
        <div className="soul-circle">
          <div className="soul-circle-text">AC</div>
        </div>
        <div className="vertical-rotated-tag">
          <span>CREATIVE OUTCOMES // 2024</span>
        </div>
      </div>

      <div className="achievements-list-side">
        {achievementsList.map((item, idx) => (
          <div key={idx} className="achievement-minimal-row">
            <span className="achievement-mono-num">{item.num} {"//"}</span>
            <div className="achievement-details">
              <span className="achievement-tag-label">{item.tag}</span>
              <h4 className="achievement-title-text">{item.title}</h4>
              <p className="achievement-desc-text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCards;
