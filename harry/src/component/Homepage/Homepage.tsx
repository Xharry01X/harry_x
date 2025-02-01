import React, { useEffect, useState } from 'react';
import { Github, Mail, Linkedin, FileText } from 'lucide-react';

// Enhanced falling petals with more natural movement
function FallingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-[float_20s_linear_infinite]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 20}s`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.3 + Math.random() * 0.4})`
          }}
        >
          <div 
            className="w-4 h-4 rounded-full bg-pink-200/20 animate-pulse"
            style={{
              filter: 'blur(1px)',
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        </div>
      ))}
    </div>
  );
}

function Homepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Video Background with reduced opacity */}
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="live_scenic_wallpaper/street.mp4" type="video/mp4" />
      </video>

      {/* Improved gradient overlay with smoother animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-blue-900/40 animate-[gradient_8s_ease-in-out_infinite]" />

      <FallingPetals />

      <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center p-8 md:p-16 bg-black/30 rounded-3xl backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-black/40 hover:scale-102 hover:shadow-2xl hover:shadow-purple-500/30">
          {/* Terminal cursor with smooth blink animation */}
          <div className="text-3xl mb-6 font-light text-purple-300 animate-[blink_1.2s_ease-in-out_infinite]">›_</div>

          {/* Name with enhanced gradient animation */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-300% bg-clip-text text-transparent animate-[gradient-x_3s_linear_infinite] hover:scale-105 transition-transform duration-300">
            Harshit Singh
          </h1>

          {/* Subtitle with smooth reveal */}
          <p className="text-xl md:text-2xl mb-12 font-light tracking-wide text-gray-200 opacity-90 hover:opacity-100 transition-opacity duration-300">
            I do Code
          </p>

          {/* Social icons with enhanced hover effects */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            {[
              { Icon: Github, color: 'blue', href: '#' },
              { Icon: Linkedin, color: 'purple', href: '#' },
              { Icon: Mail, color: 'pink', href: '#' },
              { Icon: FileText, color: 'rose', href: '#' }
            ].map(({ Icon, color, href }, index) => (
              <a
                key={index}
                href={href}
                className={`group relative p-4 rounded-xl hover:bg-white/5 transition-all duration-300
                  ${mounted ? 'animate-[fadeIn_0.5s_ease-out_forwards]' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  className={`text-${color}-300 group-hover:text-${color}-400 transition-all duration-300
                    group-hover:scale-110 group-hover:rotate-3`}
                />
                <div className={`absolute -inset-1 bg-${color}-400/10 rounded-xl 
                  blur opacity-0 group-hover:opacity-100 transition-all duration-300
                  group-hover:blur-md`} 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;