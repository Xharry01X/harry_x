import React from 'react';
import { ArrowLeft, Download, Calendar, User, Clock } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface ResearchPaper {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  abstract: string;
  introduction: string;
  methodology: string;
  results: string;
  discussion: string;
  conclusion: string;
  references: string[];
}

const papers: Record<string, ResearchPaper> = {
  'quantum-computing': {
    id: 1,
    title: "Quantum Computing Applications in Cryptography",
    author: "Dr. Sarah Chen",
    date: "February 2024",
    readTime: "15 min read",
    abstract: "This paper explores the intersection of quantum computing and modern cryptographic systems, focusing on the development of quantum-resistant encryption algorithms...",
    introduction: "The advent of quantum computing presents both unprecedented opportunities and significant challenges to the field of cryptography. As quantum computers become more powerful, traditional encryption methods face increasing vulnerability...",
    methodology: "Our research employed a multi-phase approach to developing and testing quantum-resistant encryption algorithms. We utilized a combination of theoretical analysis and practical implementation testing...",
    results: "The experimental results demonstrate a significant improvement in encryption strength against quantum attacks while maintaining practical computational efficiency for classical systems...",
    discussion: "Our findings suggest that the proposed quantum-resistant encryption methods provide a viable solution for securing sensitive data in a post-quantum computing era...",
    conclusion: "This research establishes a foundation for implementing quantum-resistant cryptographic systems in practical applications. The proposed algorithms demonstrate robust security properties while maintaining efficiency...",
    references: [
      "Smith, J. et al. (2023). 'Advances in Post-Quantum Cryptography'",
      "Johnson, M. (2024). 'Quantum Computing: A New Era in Information Security'",
      "Zhang, L. et al. (2023). 'Practical Implementations of Quantum-Resistant Algorithms'"
    ]
  }
};

const ResearchPreview: React.FC = () => {
  const { paperId } = useParams<{ paperId: string }>();
  const paper = papers[paperId || ''];

  if (!paper) {
    return (
      <div className="min-h-screen bg-slate-950 text-white/90 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl">Paper not found</h1>
          <Link to="/research" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
            Return to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white/90">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/research" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Research
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">{paper.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {paper.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {paper.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {paper.readTime}
            </div>
          </div>

          <button className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors duration-200">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>

        {/* Content */}
        <div className="space-y-8 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Abstract</h2>
            <p className="leading-relaxed">{paper.abstract}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Introduction</h2>
            <p className="leading-relaxed">{paper.introduction}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Methodology</h2>
            <p className="leading-relaxed">{paper.methodology}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Results</h2>
            <p className="leading-relaxed">{paper.results}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Discussion</h2>
            <p className="leading-relaxed">{paper.discussion}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">Conclusion</h2>
            <p className="leading-relaxed">{paper.conclusion}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white/90 mb-4">References</h2>
            <ul className="list-decimal list-inside space-y-2">
              {paper.references.map((reference, index) => (
                <li key={index} className="text-white/70">{reference}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResearchPreview;