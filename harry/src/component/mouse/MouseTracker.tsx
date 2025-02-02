import React, { useEffect, useState } from 'react';

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none w-8 h-8 rounded-full bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-sm transition-opacity duration-300 shadow-lg shadow-purple-500/20 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        transition: 'transform 0.15s ease-out'
      }}
    >
      <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
      <div className="absolute inset-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-sm" />
    </div>
  );
};

export default MouseTracker;