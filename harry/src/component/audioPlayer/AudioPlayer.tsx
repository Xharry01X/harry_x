// AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Check if this is the first time loading the page in this session
    const isFirstLoad = !sessionStorage.getItem('audioInitialized');
    
    if (isFirstLoad) {
      sessionStorage.setItem('audioInitialized', 'true');
    }

    // Create and configure audio element
    const audio = new Audio('/audio/rainy.mp3');
    audio.loop = true;
    audio.autoplay = true;
    audio.volume = 0.5; // Set initial volume
    audioRef.current = audio;

    // Force play on mount
    const forcePlay = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If autoplay fails, try again after a short delay
            setTimeout(forcePlay, 100);
          });
        }
      }
    };

    forcePlay();

    // Add visibility change listener
    const handleVisibilityChange = () => {
      if (!document.hidden && audioRef.current) {
        forcePlay();
      }
    };

    // Add focus listener
    const handleFocus = () => {
      if (audioRef.current) {
        forcePlay();
      }
    };

    // Add page show listener (when user returns to the tab)
    const handlePageShow = () => {
      if (audioRef.current) {
        forcePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('pageshow', handlePageShow);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('pageshow', handlePageShow);
      
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null; // We don't need to render controls since it's automatic
};

export default AudioPlayer;