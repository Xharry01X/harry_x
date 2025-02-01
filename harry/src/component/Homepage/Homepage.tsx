import React from 'react';
import { Github, Mail, Linkedin, FileText, Terminal } from 'lucide-react';

function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-falling"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `scale(${0.5 + Math.random() * 0.5})`
          }}
        >
          <div className="w-3 h-3 rounded-full bg-pink-200/40" />
        </div>
      ))}
    </div>
  );
}

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 text-white relative overflow-hidden">
      {/* Mount Fuji with Cherry Blossoms Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')",
        }}
      />
      
      <FallingPetals />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-8 flex justify-center">
            <Terminal size={80} className="text-white/90" />
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
            Your Name
          </h1>
          <p className="text-2xl text-white/90 mb-12 font-light">Full Stack Developer</p>
          
          <div className="flex justify-center items-center space-x-12">
            <a 
              href="#" 
              className="p-4 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            >
              <Github size={32} className="text-white/90 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-4 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            >
              <Linkedin size={32} className="text-white/90 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-4 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            >
              <Mail size={32} className="text-white/90 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-4 hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
            >
              <FileText size={32} className="text-white/90 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Homepage;