import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import ScrollUp from './components/scrollup/ScrollUp';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import ThreeBackground from './components/background/ThreeBackground';
import { ThemeProvider } from './context/ThemeContext';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

function App() {
  return (
    <ThemeProvider>
      <ThreeBackground />
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </ThemeProvider>
  );
}

export default App;
