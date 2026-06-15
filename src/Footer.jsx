import React from 'react';
import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-8 mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <span className="font-bold text-lg tracking-wide text-white">
            Vigneshwari<span className="text-neon-green">.</span> A
          </span>
        </div>
        
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Designed & Built with by Vigneshwari © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}