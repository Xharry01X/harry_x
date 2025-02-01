// Homepage.tsx
import React, { useEffect, useState } from 'react';
import AudioPlayer from '../audioPlayer/AudioPlayer'; 

const Homepage: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Force a user interaction to enable audio
    const enableAudio = () => {
      const context = new (window.AudioContext || (window as any).webkitAudioContext)();
      if (context.state === 'suspended') {
        context.resume();
      }
    };

    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mousemove'];
    events.forEach(event => {
      document.addEventListener(event, enableAudio, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, enableAudio);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Audio Player */}
      <AudioPlayer />

      {/* Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/live_scenic_wallpaper/street.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950/60 animate-[gradient_8s_ease-in-out_infinite]" />

      <div
        className={`relative z-10 min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Homepage;