import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
};

export default App;
