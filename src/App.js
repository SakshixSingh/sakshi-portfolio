import Hero from "./components/hero";
import AboutMe from "./components/aboutme";
import Aurora from "./components/background";
import Achievements from "./components/achievment";

import TextCursor from "./components/textxursor";

import './App.css';

import ProfileCard from "./profilecard";
import Projects from "./components/project";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LeetCodeStats from "./components/leetcodestats";
  



function App() {
  return (
  <>

     
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
      

      {/* Main Content on top of background */}
      <div className="content-container position-relative" style={{ zIndex: 1 }}>

       <Navbar/>
        <Hero />
        <AboutMe/>
        <Achievements/>
        <Projects/>
        <LeetCodeStats/>
        <Skills/>
        <Footer/>
        
      </div>
    </div>
    </>
  );
}

export default App;


