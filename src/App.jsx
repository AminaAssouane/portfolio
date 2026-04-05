import "./App.css";
import { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <NavBar
        onAbout={() => scrollTo(aboutRef)}
        onSkills={() => scrollTo(skillsRef)}
        onProjects={() => scrollTo(projectsRef)}
        onContact={() => scrollTo(contactRef)}
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
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
