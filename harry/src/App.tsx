import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';
import ResearchSection from './component/Homepage/ResearchSection'; 
import Navigation from './component/Navigation/Navigation'; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/research" element={<ResearchSection />} />
          <Route path="/gallery" element={<Homepage activeSection="gallery" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
