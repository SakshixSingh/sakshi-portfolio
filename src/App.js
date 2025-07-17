import { useEffect, useState } from "react";

import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Aurora from "./components/background";
import Achievements from "./components/achievment";
import TextCursor from "./components/textxursor";
import Projects from "./components/project";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LeetCodeStats from "./components/leetcodestats";

import "./App.css";


const names = ["Sakshi", "साक्षी", "ساكشي", "さくし", "Сакши", "Σάκσι", "사크시"];

const AnimatedLanding = ({ onFinish }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 === names.length) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="landing-screen">
      <h1 className="landing-text">
        Hi! I'm <span className="animated-name">{names[index]}</span>
      </h1>
    </div>
  );
};

function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding ? (
        <AnimatedLanding onFinish={() => setShowLanding(false)} />
      ) : (
        <div className="app-container position-relative">
          {/* Background */}
          <div className="aurora-bg-wrapper">
            <Aurora
              colorStops={["#8875D7", "#9163CA", "#9481DF"]}
              blend={0.5}
              amplitude={1.0}
              speed={0.5}
            />
          </div>

          {/* Floating particles */}
          <TextCursor
            text=":)"
            delay={0.01}
            spacing={80}
            followMouseDirection={true}
            randomFloat={true}
            exitDuration={0.3}
            removalInterval={20}
            maxPoints={10}
          />

          {/* Main Content */}
          <div className="content-container position-relative" style={{ zIndex: 1 }}>
            <Navbar />
            <Hero />
            <AboutMe />
            <Achievements />
            <Projects />
            <LeetCodeStats />
            <Skills />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
