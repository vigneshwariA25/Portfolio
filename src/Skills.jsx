import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Java(basics)","MySQL(basics)"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Figma", "VS Code", "Antigravity","AI tools"]
    }
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * idx }}
            className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neon-green"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 rounded-lg bg-dark-900 border border-white/5 text-gray-300 text-sm font-medium hover:border-neon-green hover:text-neon-green transition-colors cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(0,255,102,0.2)]"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}