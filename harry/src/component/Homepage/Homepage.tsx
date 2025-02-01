import React, { useEffect, useState } from 'react';
import { Cherry, Volume2, Scroll, Camera, BookOpen } from 'lucide-react';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import { galleryImages, quotes, research, socialLinks } from '../../quotes/Quotes';

const Homepage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [activeSection, setActiveSection] = useState('home');



  useEffect(() => {
    setMounted(true);

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

    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, enableAudio);
      });
      clearInterval(quoteInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <AudioPlayer />

      <video
        className="fixed inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/live_scenic_wallpaper/street.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950/60 animate-[gradient_8s_ease-in-out_infinite]" />

      {/* Header with Navigation */}
      <div className="fixed top-0 w-full z-20 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <img
              src="/logo/harry.jpg"
              alt="Organization Logo"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={() => setActiveSection('home')}
              className="text-white/80 hover:text-white text-xl transition-colors duration-300"
              title="Go to Home"
            >
              Harry
            </button>
          </div>
          <div className="flex items-center space-x-6">
            
            <button
              onClick={() => setActiveSection('gallery')}
              className={`text-white/80 hover:text-white ${activeSection === 'gallery' ? 'border-b-2' : ''}`}
              title="View Gallery"
            >
              <Camera className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveSection('research')}
              className={`text-white/80 hover:text-white ${activeSection === 'research' ? 'border-b-2' : ''}`}
              title="View Research"
            >
              <BookOpen className="w-5 h-5" />
            </button>
            <Volume2 className="text-white/80 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {activeSection === 'home' && (
          <div className="text-center space-y-8 max-w-4xl px-6">
            <Cherry className="w-12 h-12 text-pink-300/80 mx-auto mb-8 animate-pulse" />
            
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-white/90 mb-4">Harry</h1>
              <p className="text-xl text-white/70">Utkal University</p>
            </div>

            <div className="space-y-4 transition-all duration-500">
              <h2 className="text-4xl font-medium text-white/90 mb-2">
                {quotes[currentQuote].jp}
              </h2>
              <p className="text-xl text-white/70 italic">
                {quotes[currentQuote].en}
              </p>
              <p className="text-sm text-white/60">
                {quotes[currentQuote].author}
              </p>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white/90 transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white/90 mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <p className="text-white text-xl font-medium">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'research' && (
          <div className="max-w-4xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-bold text-white/90 mb-8 text-center">Research</h2>
            <div className="space-y-8">
              {research.map((item, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-medium text-white/90 mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <Scroll className="w-6 h-6 text-white/40 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;