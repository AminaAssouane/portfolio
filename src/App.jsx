import "./App.css";
import { useRef } from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <NavBar
        onAbout={() => scrollTo(aboutRef)}
        onSkills={() => scrollTo(skillsRef)}
      />
      <main>
        <section ref={aboutRef}>
          <Hero />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
      </main>
    </>
  );
}

export default App;
