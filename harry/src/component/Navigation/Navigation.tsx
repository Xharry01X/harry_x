import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, BookOpen, Home } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 w-full z-20 p-6 bg-slate-950/50 backdrop-blur-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src="/logo/harry.jpg"
            alt="Organization Logo"
            className="w-10 h-10 rounded-full"
          />
          <Link
            to="/"
            className="text-white/80 hover:text-white text-xl transition-colors duration-300"
          >
            Harry
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className={`text-white/80 hover:text-white transition-colors duration-300 ${
              location.pathname === '/' ? 'border-b-2' : ''
            }`}
            title="Home"
          >
            <Home className="w-5 h-5" />
          </Link>
          <Link
            to="/gallery"
            className={`text-white/80 hover:text-white transition-colors duration-300 ${
              location.pathname === '/gallery' ? 'border-b-2' : ''
            }`}
            title="Gallery"
          >
            <Camera className="w-5 h-5" />
          </Link>
          <Link
            to="/research"
            className={`text-white/80 hover:text-white transition-colors duration-300 ${
              location.pathname === '/research' ? 'border-b-2' : ''
            }`}
            title="Research"
          >
            <BookOpen className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;