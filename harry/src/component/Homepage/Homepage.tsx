import React from 'react';
import { Github, Mail, Linkedin, FileText } from 'lucide-react';

function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-falling"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            transform: `scale(${0.2 + Math.random() * 0.3})`
          }}
        >
          <div className="w-3 h-3 rounded-full bg-pink-100/30" />
        </div>
      ))}
    </div>
  );
}

function Homepage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="live_scenic_wallpaper/street.mp4" type="video/mp4" />
      </video>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-blue-900/30" />

      <FallingPetals />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center backdrop-blur-[2px]">
        <div className="text-center px-4 bg-black/20 py-16 rounded-3xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-black/30">
          <div className="text-3xl mb-4 font-light text-purple-300 animate-pulse">›_</div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text hover:scale-105 transform transition-all duration-300">
            Your Name
          </h1>
          <p className="text-2xl mb-12 font-light tracking-wide bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-transparent bg-clip-text hover:scale-105 transform transition-all duration-300">
            Full Stack Developer
          </p>

          <div className="flex justify-center items-center space-x-16">
            <a
              href="#"
              className="group relative p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Github 
                size={28} 
                strokeWidth={1.5} 
                className="text-blue-300 group-hover:text-blue-400 group-hover:scale-125 transform transition-all duration-300" 
              />
            </a>
            <a
              href="#"
              className="group relative p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Linkedin 
                size={28} 
                strokeWidth={1.5} 
                className="text-purple-300 group-hover:text-purple-400 group-hover:scale-125 transform transition-all duration-300" 
              />
            </a>
            <a
              href="#"
              className="group relative p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Mail 
                size={28} 
                strokeWidth={1.5} 
                className="text-pink-300 group-hover:text-pink-400 group-hover:scale-125 transform transition-all duration-300" 
              />
            </a>
            <a
              href="#"
              className="group relative p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <FileText 
                size={28} 
                strokeWidth={1.5} 
                className="text-rose-300 group-hover:text-rose-400 group-hover:scale-125 transform transition-all duration-300" 
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;