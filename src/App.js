import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Impact from "./components/Impact";
import GetInvolved from "./components/GetInvolved";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Impact />
      <GetInvolved />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;