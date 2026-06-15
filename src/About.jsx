import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorPlay, Zap, Coffee } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '3+', icon: <MonitorPlay className="text-neon-green" /> },
    { label: 'Lines of Code', value: '10k+', icon: <Code2 className="text-neon-green" /> },
    { label: 'Fast Delivery', value: '100%', icon: <Zap className="text-neon-green" /> },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">About</span> Me
        </h2>
        <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_10px_rgba(0,255,102,0.5)]"></div>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-8 glass rounded-3xl p-8 md:p-10 border-white/5 hover:border-neon-green/30 transition-colors duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Who am I?</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I'm Vigneshwari, a passionate Full Stack Developer with a strong focus on creating beautiful, intuitive, and highly functional user experiences. My journey in web development is driven by a deep curiosity for how things work and a desire to build solutions that make a real difference.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            When I'm not coding, I'm usually exploring the latest design trends, contributing to open-source projects, or optimizing application performance to ensure seamless interactions.
          </p>
        </motion.div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="glass p-6 rounded-3xl flex flex-col items-center justify-center text-center group hover:bg-dark-800/80 transition-all duration-300 border-white/5 hover:border-neon-green/30"
            >
              <div className="mb-3 p-3 bg-dark-900 rounded-full group-hover:shadow-[0_0_15px_rgba(0,255,102,0.2)] transition-shadow">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}