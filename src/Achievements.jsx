import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Coffee, BadgeCheck } from 'lucide-react';

export default function Achievements() {
  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Infosys Springboard",
      description: "Comprehensive training in modern web development, frontend technologies, backend fundamentals, and full-stack application development.",
      icon: <Code2 size={32} className="text-neon-green group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Java Programming",
      provider: "Core Foundation",
      description: "Strong foundation in object-oriented programming, data structures, problem solving, and application development using Java.",
      icon: <Coffee size={32} className="text-neon-green group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "MongoDB Certification",
      provider: "Database Administration",
      description: "Database design, document modeling, CRUD operations, indexing, and NoSQL database management.",
      icon: <Database size={32} className="text-neon-green group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Embedded Systems & IoT",
      provider: "Hardware Architecture",
      description: "Knowledge of embedded systems architecture, sensor integration, microcontrollers, IoT communication, and smart system development.",
      icon: <Cpu size={32} className="text-neon-green group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <section id="achievements" className="w-full max-w-7xl mx-auto py-24 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          Certifications & <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_15px_rgba(0,255,102,0.5)] mb-8"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Continuous learning and industry-recognized certifications demonstrating expertise in software development, databases, and embedded systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative glass p-8 rounded-3xl border border-white/5 hover:border-neon-green/30 transition-all duration-500 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/0 via-neon-green/0 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:border-neon-green/50 group-hover:shadow-[0_0_20px_rgba(0,255,102,0.2)] transition-all duration-300">
                  {cert.icon}
                </div>
                <div className="flex items-center gap-1.5 bg-neon-green/10 border border-neon-green/20 px-3 py-1.5 rounded-full text-neon-green text-xs font-medium group-hover:bg-neon-green/20 transition-colors">
                  <BadgeCheck size={14} />
                  <span>Verified</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-neon-green/80 text-sm font-medium mb-4">
                {cert.provider}
              </p>
              
              <p className="text-gray-400 leading-relaxed flex-grow">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
