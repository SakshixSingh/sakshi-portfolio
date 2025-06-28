import React from "react";
import "./project.css";

const projects = [
  {
    title: "StudyBuddy Platform",
    image: "/profilee.jpg",
    description: "A peer-to-peer platform where students connect, teach, and learn together with 1:1 sessions.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/yourusername/studybuddy",
  },
  {
    title: "AeroPulse",
    image: "/profilee.jpg",
    description: "An IoT-based AQI monitoring system that visualizes and predicts air quality data across cities.",
    techStack: ["IoT", "Node.js", "MongoDB", "React"],
    github: "https://github.com/yourusername/aeropulse",
  },
  {
    title: "Portfolio Website",
    image: "/profilee.jpg",
    description: "A personal portfolio showcasing my journey in UI/UX, web dev, and DSA through a fun, interactive design.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
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
