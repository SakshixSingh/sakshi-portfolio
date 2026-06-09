import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaRobot,
  FaBrain,
} from "react-icons/fa";
import { SiLangchain, SiN8N } from "react-icons/si";
import "./skills.css";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiN8N />, name: "n8n" },
  { icon: <SiLangchain />, name: "LangChain" },
  { icon: <FaRobot />, name: "Agentic AI" },
  { icon: <FaBrain />, name: "RAG Applications" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>05 / SKILLS</span>
        </div>

        <div className="scroll-wrapper mt-5">
          <div className="scroll-track">
            {[...skills, ...skills].map((skill, idx) => (
              <div className="scroll-item" key={idx}>
                <div className="icon">{skill.icon}</div>
                <p className="mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
