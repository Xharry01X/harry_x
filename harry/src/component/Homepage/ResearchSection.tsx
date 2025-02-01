import React, { useState, useEffect } from 'react';
import { Beaker, GitBranch, ExternalLink, ChevronDown, BookOpen } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import AudioPlayer from '../audioPlayer/AudioPlayer';

interface ResearchItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: string;
  collaborators: string[];
  publications: string[];
}

interface ResearchSectionProps {
  className?: string;
}

const researchItems: ResearchItem[] = [
  {
    id: 1,
    title: "Quantum Computing Applications in Cryptography",
    description: "Investigating novel approaches to quantum-resistant encryption algorithms and their implementation in modern security systems.",
    tags: ["Quantum Computing", "Cryptography", "Security"],
    status: "Ongoing",
    collaborators: ["Dr. Sarah Chen", "Prof. Michael Roberts"],
    publications: [
      "Quantum-Resistant Protocols in Practice (2024)",
      "Next-Generation Encryption Standards (2023)"
    ]
  },
  {
    id: 2,
    title: "Machine Learning in Climate Modeling",
    description: "Developing advanced neural network architectures for improved climate prediction accuracy and computational efficiency.",
    tags: ["AI/ML", "Climate Science", "Neural Networks"],
    status: "Published",
    collaborators: ["Dr. James Wilson", "Dr. Emily Parker"],
    publications: [
      "Deep Learning Approaches to Climate Modeling (2024)",
      "Efficient Neural Architectures for Environmental Data (2023)"
    ]
  },
  {
    id: 3,
    title: "Sustainable Computing Infrastructure",
    description: "Exploring energy-efficient computing paradigms and their implementation in large-scale data centers.",
    tags: ["Green Computing", "Infrastructure", "Sustainability"],
    status: "Early Stage",
    collaborators: ["Prof. Lisa Zhang", "Dr. Robert Brown"],
    publications: [
      "Energy Optimization in Modern Data Centers (2024)"
    ]
  }
];

const ResearchSection: React.FC<ResearchSectionProps> = ({ className = '' }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

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

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, enableAudio);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <AudioPlayer />

      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover opacity-40"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/live_scenic_wallpaper/street.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950/60 animate-[gradient_8s_ease-in-out_infinite]" />

      {/* Main Content */}
      <div className={`relative z-10 ${className}`}>
        <div className={`max-w-4xl mx-auto px-6 py-24 space-y-8 transition-all duration-1000 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-white/90">Research Initiatives</h2>
            <p className="text-lg text-white/70">Exploring the frontiers of technology and innovation</p>
          </div>

          <div className="space-y-6">
            {researchItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm border-none"
              >
                <CardHeader 
                  className="cursor-pointer" 
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Beaker className="w-5 h-5 text-blue-400" />
                        <CardTitle className="text-xl text-white/90">{item.title}</CardTitle>
                      </div>
                      <Badge variant="outline" className="bg-blue-500/10 text-blue-400">
                        {item.status}
                      </Badge>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
                        expandedId === item.id ? 'transform rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CardHeader>

                <CardContent className={`space-y-4 transition-all duration-300 ${
                  expandedId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <p className="text-white/70">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-white/5 text-white/60">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <GitBranch className="w-4 h-4 text-white/60" />
                      <p className="text-white/80 font-medium">Collaborators</p>
                    </div>
                    <div className="pl-6">
                      {item.collaborators.map((collaborator) => (
                        <p key={collaborator} className="text-white/60">{collaborator}</p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4 text-white/60" />
                      <p className="text-white/80 font-medium">Publications</p>
                    </div>
                    <div className="pl-6">
                      {item.publications.map((publication) => (
                        <p key={publication} className="text-white/60">{publication}</p>
                      ))}
                    </div>
                  </div>
                  <Link
                to={`/research/paper/quantum-computing`}
                className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 mt-4"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Read Full Paper
              </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;