import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
