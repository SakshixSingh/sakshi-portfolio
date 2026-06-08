import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./project.css";

const projects = [
  {
    title: "issuepulse",
    image: "/profilee.jpg",
    gradient: "linear-gradient(135deg, rgba(20, 37, 52, 0.35), rgba(41, 23, 76, 0.85))",
    description: "A full-stack civic engagement platform that allows citizens to report local issues with location and images, while moderators verify reports and authorities track resolution metrics. Includes geo-queries, SLA analytics, and civic health scoring.",
    techStack: "React • Node.js • Express.js • MongoDB • GeoSpatial Queries",
    github: "https://github.com/SakshixSingh/IssuePulse",
  },
  {
    title: "inboxzen",
    image: "/profilee.jpg",
    gradient: "linear-gradient(135deg, rgba(20, 37, 52, 0.35), rgba(16, 52, 44, 0.85))",
    description: "InboxZen is a sleek AI-powered tool that simplifies messy email threads into clean summaries using OCR, GPT-based NLP, and text-to-speech — built with a dark minimal UI for distraction-free clarity.",
    techStack: "React • Bootstrap • Tesseract.js • OpenRouter API",
    github: "https://github.com/SakshixSingh/InboxZen",
  },
  {
    title: "real-time tracking app",
    image: "/profilee.jpg",
    gradient: "linear-gradient(135deg, rgba(20, 37, 52, 0.35), rgba(22, 44, 94, 0.85))",
    description: "A real-time tracking application enabling live location updates and synchronization across clients. Built with WebSockets for instant bi-directional communication with a scalable backend service.",
    techStack: "Node.js • Express.js • Socket.IO • MongoDB • React",
    github: "https://github.com/SakshixSingh/Real-Time-Tracking-App",
  },
  {
    title: "lock-it drop-it",
    image: "/profilee.jpg",
    gradient: "linear-gradient(135deg, rgba(20, 37, 52, 0.35), rgba(92, 34, 46, 0.85))",
    description: "A secure digital locker web app built with Firebase, allowing users to store and manage personal items like notes and links. Features Google Sign-In, real-time storage, and an intuitive UI.",
    techStack: "React • Firebase • Bootstrap",
    github: "https://github.com/SakshixSingh/lock-it-drop-it",
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[index];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        {/* Header matching user reference */}
        <div className="software-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="software-title">/ software</h2>
          <a
            href="https://github.com/SakshixSingh"
            target="_blank"
            rel="noreferrer"
            className="view-all-link"
          >
            View all projects &rarr;
          </a>
        </div>

        {/* Carousel Container */}
        <div className="software-carousel-container position-relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              className="software-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              style={{
                backgroundImage: `${currentProject.gradient}, url(${currentProject.image})`
              }}
            >
              <div className="software-slide-content text-center px-4">
                <h3 className="slide-project-title">{currentProject.title}</h3>
                <p className="slide-project-desc">{currentProject.description}</p>
                <div className="slide-project-tech">{currentProject.techStack}</div>
                
                <div className="slide-project-links d-flex justify-content-center mt-3">
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="slide-icon-btn"
                    title="View Source on GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button className="carousel-arrow left" onClick={slidePrev} aria-label="Previous Project">
            <FaChevronLeft />
          </button>
          
          <button className="carousel-arrow right" onClick={slideNext} aria-label="Next Project">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
