import React, { useEffect, useState } from 'react';
import { Cherry, Volume2, Scroll, Github, Linkedin, Mail, Globe } from 'lucide-react';
import AudioPlayer from '../audioPlayer/AudioPlayer';

const Homepage: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      jp: "静寂の中に心の声を聴く",
      en: "Listen to the voice of your heart in silence",
      author: "- 松尾 芭蕉"
    },
    {
      jp: "人生は儚き夢のごとし",
      en: "Life is but a fleeting dream",
      author: "- 世阿弥"
    },
    {
      jp: "花は無心に咲く",
      en: "Flowers bloom without worry",
      author: "- 良寛"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:your.email@example.com",
      label: "Email"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      href: "https://yourwebsite.com",
      label: "Website"
    }
  ];

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

    // Rotate quotes every 5 seconds
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

      {/* Header */}
      <div className="fixed top-0 w-full z-20 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-white/80 text-xl">静けさの園</div>
          <Volume2 className="text-white/80 w-6 h-6" />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center space-y-8 max-w-4xl px-6">
          {/* Cherry Blossom Icon */}
          <Cherry className="w-12 h-12 text-pink-300/80 mx-auto mb-8 animate-pulse" />

          {/* Quote Section */}
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

          {/* Social Links */}
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <Scroll className="w-6 h-6 text-white/40 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;