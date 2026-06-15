import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import fundunHolidaysImg from './assets/fundun_holidays.png';
import sitescopeAiImg from './assets/sitescope_ai.png';
import jkHolidaysImg from './assets/jk_holidays.png';
import aaravWeddingHallImg from './assets/aarav_wedding_hall.png';

export default function Projects() {
  const projects = [
    {
       title: "Aarav Wedding Hall",
      category: "Event & Wedding Venue Website",
      description: "A premium wedding hall and event venue website designed to showcase facilities, event spaces, gallery sections, booking information, and customer engagement. The design focuses on elegance, professionalism, and seamless user experience for potential clients.",
      tech: ["HTML5", "CSS3", "React.js", "Bootstrap", "Responsive Design"],
      image: aaravWeddingHallImg,
      liveLink: "https://vigneshwaria25.github.io/aarav-project/",
      isLive: true,
      highlights: [
        "Venue showcase",
        "Gallery integration",
        "Booking inquiry section",
        "Elegant responsive design",
        "User-friendly navigation"
      ]
    },
    {
      title: "SiteScope AI Extension",
      description: "Intelligent website analytics and SEO optimization tool that crawls pages to generate actionable insights and performance metrics.",
      tech: ["React", "Node.js", "Puppeteer", "Chart.js"],
      image: sitescopeAiImg,
      isLive: true
    },
    {
      title: "JK Travels",
      category: "Travel & Tourism Website",
      description: "A modern travel and tourism platform designed to showcase domestic and international tour packages, destination highlights, travel services, and customer engagement features. Built with a visually appealing layout, smooth navigation, and responsive design to provide an immersive travel booking experience.",
      tech: ["HTML5", "CSS3", "React.js", "Bootstrap", "Responsive Design"],
      image: jkHolidaysImg,
      liveLink: "https://jk-travesl.vercel.app/",
      isLive: true,
      highlights: [
        "Package showcase system",
        "Destination-based browsing",
        "Responsive UI/UX",
        "Contact and inquiry integration",
        "Mobile-friendly experience"
      ]
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group glass rounded-3xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-neon-green/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out saturate-[1.1]"
              />
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors flex items-center gap-3 flex-wrap">
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1.5">
                    {project.title}
                    <ExternalLink size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  project.title
                )}
                {project.isLive && (
                  <span className="inline-flex items-center text-xs font-mono text-neon-green bg-neon-green/10 border border-neon-green/20 px-2.5 py-0.5 rounded-full shadow-[0_0_5px_rgba(0,255,102,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green mr-1.5 animate-pulse"></span>
                    Live Project
                  </span>
                )}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-neon-green bg-neon-green/10 px-3 py-1 rounded-full border border-neon-green/20 shadow-[0_0_5px_rgba(0,255,102,0.1)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
