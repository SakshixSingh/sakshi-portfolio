import React from "react";
import "./project.css";

const projects = [
  {
    title: "Lock-it Drop-it",
    image: "/profilee.jpg",
    description: "A secure digital locker web app built with Firebase, allowing users to store and manage personal items like notes and links. Features include Google Sign-In, real-time data storage, and a clean, intuitive user interface. Support for additional item types is planned.",
    techStack: ["React", "Firebase", "Bootstrap"],
    github: "https://github.com/SakshixSingh/lock-it-drop-it",
  },
  {
    title: "InboxZen",
    image: "/profilee.jpg",
    description: "InboxZen is a sleek AI-powered tool that simplifies messy email threads into clean summaries using OCR, GPT-based NLP, and text-to-speech — built with a dark minimal UI for distraction-free clarity.",
    techStack: ["React", "Bootstrap", "Tesseract.js", "OpenRouter API"],
    github: "https://github.com/SakshixSingh/InboxZen",
  },
  {
    title: "Portfolio Website",
    image: "/profilee.jpg",
    description: "A personal portfolio showcasing my journey in UI/UX, web dev, and DSA through a fun, interactive design.",
    techStack: ["React", "Framer Motion", "Bootstrap"],
    github: "https://github.com/SakshixSingh/sakshi-portfolio",
  },  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">🚀 Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
