
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyPayzoo from '../components/WhyPayzoo';
import PartnersSection from '../components/PartnersSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* African Pattern Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="african-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Motif géométrique africain - triangles et losanges */}
              <g fill="#D97706" opacity="0.8">
                {/* Triangles */}
                <polygon points="30,10 50,40 10,40" />
                <polygon points="90,10 110,40 70,40" />
                <polygon points="30,70 50,100 10,100" />
                <polygon points="90,70 110,100 70,100" />
                
                {/* Losanges */}
                <polygon points="60,20 75,35 60,50 45,35" />
                <polygon points="60,80 75,95 60,110 45,95" />
                
                {/* Lignes ondulées */}
                <path d="M0,55 Q15,45 30,55 T60,55 T90,55 T120,55" stroke="#D97706" strokeWidth="2" fill="none" />
                <path d="M0,65 Q15,75 30,65 T60,65 T90,65 T120,65" stroke="#D97706" strokeWidth="2" fill="none" />
              </g>
              
              {/* Motifs circulaires */}
              <g fill="none" stroke="#92400E" strokeWidth="1.5" opacity="0.6">
                <circle cx="20" cy="20" r="8" />
                <circle cx="100" cy="20" r="8" />
                <circle cx="20" cy="100" r="8" />
                <circle cx="100" cy="100" r="8" />
                
                {/* Croix dans les cercles */}
                <line x1="15" y1="20" x2="25" y2="20" />
                <line x1="20" y1="15" x2="20" y2="25" />
                <line x1="95" y1="20" x2="105" y2="20" />
                <line x1="100" y1="15" x2="100" y2="25" />
                <line x1="15" y1="100" x2="25" y2="100" />
                <line x1="20" y1="95" x2="20" y2="105" />
                <line x1="95" y1="100" x2="105" y2="100" />
                <line x1="100" y1="95" x2="100" y2="105" />
              </g>
            </pattern>
            
            <pattern id="african-secondary" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g fill="#B45309" opacity="0.4">
                {/* Petits motifs en étoile */}
                <polygon points="40,5 42,15 52,15 44,22 47,32 40,25 33,32 36,22 28,15 38,15" />
                <polygon points="15,40 17,50 27,50 19,57 22,67 15,60 8,67 11,57 3,50 13,50" />
                <polygon points="65,65 67,75 77,75 69,82 72,92 65,85 58,92 61,82 53,75 63,75" />
              </g>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#african-pattern)" />
          <rect width="100%" height="100%" fill="url(#african-secondary)" />
        </svg>
      </div>

      {/* Motifs décoratifs supplémentaires */}
      <div className="fixed inset-0 pointer-events-none opacity-3 z-0">
        {/* Grands motifs en coins */}
        <div className="absolute top-20 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#D97706" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#D97706" strokeWidth="1" />
            <circle cx="50" cy="50" r="10" fill="#D97706" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="#D97706" strokeWidth="1" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="#D97706" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-10 w-40 h-40 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 60,35 90,35 68,55 78,85 50,70 22,85 32,55 10,35 40,35" fill="#B45309" />
            <polygon points="50,15 55,35 75,35 60,45 65,65 50,55 35,65 40,45 25,35 45,35" fill="#D97706" />
          </svg>
        </div>
        
        <div className="absolute top-1/2 right-20 w-24 h-24 opacity-25">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="#D97706" strokeWidth="2" transform="rotate(45 50 50)" />
            <rect x="35" y="35" width="30" height="30" fill="#B45309" transform="rotate(45 50 50)" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 left-20 w-28 h-28 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50,10 L60,30 L80,30 L65,45 L70,65 L50,55 L30,65 L35,45 L20,30 L40,30 Z" fill="none" stroke="#D97706" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" fill="#B45309" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WhyPayzoo />
          <PartnersSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
