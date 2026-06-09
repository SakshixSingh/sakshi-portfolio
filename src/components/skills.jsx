import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiN8N,
  SiLangchain,
  SiTypescript,
  SiDocker,
  SiFigma,
  SiGit,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaRobot, FaBrain } from "react-icons/fa";
import "./skills.css";

const skills = [
  { icon: <SiHtml5 />, name: "HTML5", color: "#e34f26" },
  { icon: <SiCss3 />, name: "CSS3", color: "#1572b6" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiReact />, name: "React", color: "#61dafb" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
  { icon: <SiExpress />, name: "Express", color: "#ffffff" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47a248" },
  { icon: <SiPython />, name: "Python", color: "#3776ab" },
  { icon: <SiC />, name: "C", color: "#a8b9cc" },
  { icon: <SiCplusplus />, name: "C++", color: "#00599c" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178c6" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ed" },
  { icon: <SiN8N />, name: "n8n", color: "#ff6d56" },
  { icon: <SiLangchain />, name: "LangChain", color: "#13aa52" },
  { icon: <FaRobot />, name: "Agentic AI", color: "#a2b5c4" },
  { icon: <FaBrain />, name: "RAG Applications", color: "#ec407a" },
  { icon: <SiPostman />, name: "Postman", color: "#ff6c37" },
  { icon: <SiFigma />, name: "Figma", color: "#f24e1e" },
  { icon: <SiGit />, name: "Git", color: "#f05032" },
];

const Skills = () => {
  return (
    <section className="skills-section py-5">
      <div className="container">
        {/* Editorial Section Number */}
        <div className="section-tag">
          <span>05 / SKILLS</span>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-container mt-5">
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div className="skills-grid-item" key={idx}>
                <div 
                  className="skills-icon-wrapper" 
                  style={{ "--brand-color": skill.color }}
                >
                  {skill.icon}
                </div>
                <p className="skills-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
