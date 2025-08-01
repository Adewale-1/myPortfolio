import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import GoogleDeepMindPage from './components/projectPages/GoogleDeepMindPage';
import CodeOHProjectDetails from './components/projects/CodeOHProjectDetails';
import { projects } from './projectsData';

// Helper component to scroll to top on navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

function App() {
  // Find the CodeOH project data
  const codeOHProject = projects.find(project => project.title === 'CodeOH');
  
  return (
    <ThemeProvider>
      <Router basename="">
      <ThreeBackground />
        <ScrollToTop />
        
        <Routes>
          <Route path="/projects/google-deepmind" element={
            <GoogleDeepMindPage onClose={() => window.location.hash = "#/"} />
          } />
          
          <Route path="/projects/codeoh" element={
            codeOHProject ? 
            <CodeOHProjectDetails project={codeOHProject} onClose={() => window.location.hash = "#/"} /> :
            <Navigate to="/" replace />
          } />
          
          <Route path="/" element={
            <>
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
            </>
          } />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
