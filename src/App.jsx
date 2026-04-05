import "./App.css";
import { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <NavBar
        onAbout={() => scrollTo(aboutRef)}
        onSkills={() => scrollTo(skillsRef)}
        onProjects={() => scrollTo(projectsRef)}
      />
      <main>
        <section ref={aboutRef}>
          <Hero />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
