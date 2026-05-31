import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticleBackground from "./components/ParticleBackground";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";

function App() {
  return (
    <>
      <ParticleBackground />

      <div
        style={{
          background: "#0f172a",
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </>
  );
}

export default App;