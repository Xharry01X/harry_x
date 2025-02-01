import React, { useState } from 'react';
import { Beaker, GitBranch, ExternalLink, ChevronDown } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define types for our data structure
interface Publication {
  title: string;
  year: string;
}

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

  return (
    <div className={`max-w-4xl mx-auto px-6 py-24 space-y-8 ${className}`}>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;