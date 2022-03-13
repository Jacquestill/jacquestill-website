import React from "react";
import pattern from "../img/pattern-dark.png";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Skills from "./Skills";
import Promises from "./Promises";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div
      style={{
        background: `url(${pattern})`,
      }}
    >
      <Navigation />
      <HomePage />
      <AboutPage />
      <Skills />
      <Promises />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
