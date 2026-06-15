import React from 'react';
import { motion } from 'framer-motion';
import { CircleDot } from 'lucide-react';

export default function Experience() {
  const journey = [
    {
      year: "2026 (Present)",
      title: "Ready for the Future",
      description: "Open to Frontend Developer and React Developer opportunities. Actively building modern web applications and expanding expertise in full-stack and AI-powered solutions.",
      bullets: []
    },
    {
      year: "2026 (February – May)",
      title: "Full Stack Developer",
      description: "Worked on full-stack application development using modern web technologies. Built scalable and user-friendly web applications while improving development workflow and project deployment skills. Gained hands-on experience in:",
      bullets: ["React.js", "JavaScript", "APIs", "Frontend Development", "Responsive Design", "Git & GitHub"]
    },
    {
      year: "2025",
      title: "React & AI Focus",
      description: "Focused on React development, API integration, UI/UX design, and AI-powered applications. Worked on projects including:",
      bullets: ["Aarav Wedding Hall", "SiteScope AI", "JK Travels"]
    },
    {
      year: "2024",
      title: "Entering Web Development",
      description: "Entered web development and started learning HTML, CSS, JavaScript, React.js, and modern frontend technologies. Built multiple projects and strengthened problem-solving skills.",
      bullets: []
    },
    {
      year: "2023",
      title: "Technical Exploration",
      description: "Explored programming fundamentals, embedded systems, IoT concepts, and began working on technical mini projects.",
      bullets: []
    },
    {
      year: "2022",
      title: "The Beginning",
      description: "Started my Electronics & Communication Engineering journey and developed a strong interest in technology and problem solving.",
      bullets: []
    }
  ];

  return (
    <section id="experience" className="w-full max-w-5xl mx-auto py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          My <span className="text-gradient">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,102,0.5)] mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          From Electronics Engineering to Frontend & Full Stack Development, continuously learning, building projects, and growing as a developer.
        </p>
      </motion.div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green/0 via-neon-green/50 to-neon-green/0 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {journey.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-start md:items-center">
              
              {/* Glowing Timeline Dot */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-8 md:left-12 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-dark-900 border-2 border-neon-green text-neon-green z-10 shadow-[0_0_20px_rgba(0,255,102,0.5)]"
              >
                <div className="w-2 h-2 bg-neon-green rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              </motion.div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ x: 15, scale: 1.01 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="ml-20 md:ml-32 w-full md:w-[80%] pr-4 md:pr-0 cursor-default"
              >
                <div className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-green/30 transition-all duration-500 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-green/0 via-neon-green/0 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green font-mono text-sm mb-4 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {item.bullets.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                            <CircleDot size={12} className="text-neon-green flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
