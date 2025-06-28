import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import "./skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <h2 className="text-center fw-bold text-uppercase text-primary mb-4">Skills</h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {[...skills, ...skills].map((skill, idx) => (
            <div className="scroll-item" key={idx}>
              <div className="icon">{skill.icon}</div>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
