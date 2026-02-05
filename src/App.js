import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="section dark">
        <Home />
      </section>

      <section id="education" className="section blue">
        <Education />
      </section>

      <section id="skills" className="section light-blue">
        <Skills />
      </section>

      <section id="certificates" className="section white">
        <Certificates />
      </section>

      <section id="projects" className="section white">
        <Projects />
      </section>
      

      <Footer />
    </>
  );
}

export default App;
