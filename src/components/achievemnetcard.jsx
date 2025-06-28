import React, { useState } from "react";
import "./achievementcard.css";

const achievements = [
  {
    title: "Hackathon Winner - Code for Good 2024",
    cover: "/assets/main.jpg",
    description: "Won the JP Morgan Code for Good hackathon for building a social impact project using React + Firebase.",
    gallery: [
      "/assets/hackathon1.jpg",
      "/assets/hackathon2.jpg",
      "/assets/hackathon3.jpg",
    ],
  },
  {
    title: "UI/UX Bootcamp Mentor - GDSC",
    cover: "/assets/mainboot.jpg",
    description: "Conducted a successful UI/UX bootcamp for juniors, covering design systems, Figma, and portfolio tips.",
    gallery: [
      "/assets/bootcamp1.jpg",
      "/assets/bootcamp2.jpg",
      "/assets/bootcamp3.jpg",
    ],
  },
];

const AchievementCards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="achievement-card-container">
      {achievements.map((item, idx) => (
        <div
          key={idx}
          className="achievement-card"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={item.cover} alt={item.title} className="cover-image" />
          <div className="description">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>

          {/* Show gallery on hover */}
          {hoveredIndex === idx && (
            <div className="gallery-overlay">
              {item.gallery.map((img, i) => (
                <img key={i} src={img} alt="event" className="gallery-image" />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AchievementCards;
