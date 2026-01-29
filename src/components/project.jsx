import React from "react";
import "./project.css";

const projects = [
  {
  title: "IssuePulse — Civic Issue Reporting Platform",
  image: "/profilee.jpg",
  description:
    "A full-stack civic engagement platform that allows citizens to report local issues with location and images, while moderators verify reports and authorities track resolution metrics. Includes role-based authentication, duplicate issue detection using geo-queries, SLA analytics, and civic health scoring.",
  techStack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Cloudinary",
    "GeoSpatial Queries"
  ],
  github: "https://github.com/SakshixSingh/IssuePulse",
},
{
  title: "E-commerce API",
  image: "/profilee.jpg",
  description:
    "A backend REST API for an e-commerce platform supporting secure user authentication, product management, and cart functionality. Built using Node.js, Express, and MongoDB with JWT-based authentication, focusing on clean API design, scalable data models, and real-world backend practices.",
  techStack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "REST APIs",
    "Mongoose"
  ],
  github: "https://github.com/SakshixSingh/E-Commerce-API"
}

,
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
  {
  title: "Contact Management REST API",
  image: "/profilee.jpg",
  description:
    "A secure backend REST API for managing user-specific contacts with authentication and authorization. Implements JWT-based login, password hashing, protected routes, and full CRUD operations using a clean MVC architecture.",
  techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
  github: "https://github.com/SakshixSingh/Contact-API",
},


{
  title: "Real-Time Tracking App",
  image: "/profilee.jpg",
  description:
    "A real-time tracking application enabling live location updates and synchronization across clients. Built with WebSockets for instant bi-directional communication with a scalable backend service supporting multiple users and dynamic updates.",
  techStack: ["Node.js", "Express.js", "Socket.IO", "MongoDB", "React"],
  github: "https://github.com/SakshixSingh/Real-Time-Tracking-App",
}


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
