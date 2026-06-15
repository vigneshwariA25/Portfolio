import React from 'react';

import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import PROFILE from './assets/PROFILE.jpg';
// import VIGNESHWARI from './assets/VIGNESHWARI.png';
import resumePdf from './assets/resume/VIGNESHWARI A.pdf';

export default function Header() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "VIGNESHWARI A.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900 pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Text Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-neon-green/30 text-neon-green text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            Available for work
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
            Hi, I'm <br />
            <span className="text-gradient">Vigneshwari</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-gray-400 font-medium mb-6">
            Professional <span className="text-neon-green">Full Stack Developer</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
            I craft futuristic, high-performance web applications. Welcome to my creative space where cutting-edge design meets scalable engineering.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <button 
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 bg-neon-green text-black font-semibold rounded-lg hover:bg-[#00cc52] transition-colors duration-300 shadow-[0_0_15px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)]"
            >
              Contact Me <ChevronRight size={18} />
            </button>
            <button 
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/5 border-white/10 hover:border-neon-green/50 text-white rounded-lg transition-all duration-300 group"
            >
              Download Resume <Download size={18} className="group-hover:text-neon-green transition-colors" />
            </button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-5 mt-10">
            <a href="https://github.com/vigneshwariA25" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon-green transition-colors p-2 glass rounded-full hover:border-neon-green/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/vigneshwari-a-233a823a7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-neon-green transition-colors p-2 glass rounded-full hover:border-neon-green/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image & Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Animated Glow Ring */}
          <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full border-2 border-neon-green/20 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
          
          {/* Profile Image Container */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden border-4 border-dark-800 shadow-[0_0_50px_rgba(0,255,102,0.15)] z-10">
            <div className="absolute inset-0 bg-neon-green/10 z-10 mix-blend-overlay pointer-events-none"></div>
            <img 
              src={PROFILE} 
              alt="Vigneshwari" 
              className="w-full h-full object-cover filter contrast-125 saturate-50"
            />
          </div>

          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, -15, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[10%] md:right-[5%] z-20 glass px-4 py-2 rounded-xl border-white/10 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-md bg-[#61DAFB] flex items-center justify-center text-black font-bold text-xs">Re</div>
            <span className="text-sm font-medium text-white">React</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[20%] left-[5%] md:left-[-5%] z-20 glass px-4 py-2 rounded-xl border-white/10 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-md bg-[#F7DF1E] flex items-center justify-center text-black font-bold text-xs">JS</div>
            <span className="text-sm font-medium text-white">JavaScript</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-[10%] right-[15%] z-20 glass px-4 py-2 rounded-xl border-white/10 shadow-lg flex items-center gap-2"
          >
            <div className="w-6 h-6 rounded-md bg-[#38BDF8] flex items-center justify-center text-black font-bold text-xs">Tw</div>
            <span className="text-sm font-medium text-white">Tailwind</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}