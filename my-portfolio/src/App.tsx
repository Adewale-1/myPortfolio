import React, { useState, useEffect } from 'react';
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
import GoogleDeepMindPage from './components/projectPages/GoogleDeepMindPage';

function App() {
  // State to track if we should show the Google DeepMind page
  const [showGoogleDeepMind, setShowGoogleDeepMind] = useState(false);
  
  // Check URL hash on initial load and when it changes
  useEffect(() => {
    function checkHash() {
      console.clear(); // Clear console for clean logs
      const hash = window.location.hash;
      console.log("Current hash:", hash);
      
      // Check specifically for google-deepmind in any form
      const showDeepMind = hash.toLowerCase().includes('google-deepmind');
      console.log("Should show DeepMind page:", showDeepMind);
      
      // Update state only if needed
      setShowGoogleDeepMind(showDeepMind);
      
      // If showing DeepMind page, hide body overflow
      document.body.style.overflow = showDeepMind ? 'hidden' : '';
    }
    
    // Initial check
    checkHash();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', checkHash);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', checkHash);
      document.body.style.overflow = '';
    };
  }, []);
  
  // Function to navigate back to the main page
  const handleClose = () => {
    window.location.hash = '';
  };
  
  return (
    <ThemeProvider>
      <ThreeBackground />
      {showGoogleDeepMind ? (
        <div className="standalone-page" data-testid="google-deepmind-page">
          <GoogleDeepMindPage onClose={handleClose} standalone={true} />
        </div>
      ) : (
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
      )}
    </ThemeProvider>
  );
}

export default App;
