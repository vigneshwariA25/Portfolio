import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-900 overflow-hidden font-sans">
      {/* Background Grid */}
      <div className="bg-grid"></div>

      {/* Mouse Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 102, 0.05), transparent 40%)`
        }}
      />

      <Navbar />
      <main className="relative z-10 flex flex-col items-center w-full">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
