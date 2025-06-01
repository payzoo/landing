
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
      {/* Background Pattern Africain */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Motifs géométriques africains */}
              <pattern id="african-triangles" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,10 70,60 10,60" fill="#D97706" opacity="0.3"/>
                <polygon points="20,70 35,45 5,45" fill="#DC2626" opacity="0.2"/>
                <polygon points="60,25 75,5 45,5" fill="#059669" opacity="0.25"/>
              </pattern>
              
              {/* Motifs en losanges */}
              <pattern id="african-diamonds" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30,5 L50,25 L30,45 L10,25 Z" fill="#7C3AED" opacity="0.15"/>
                <path d="M15,30 L25,40 L15,50 L5,40 Z" fill="#EA580C" opacity="0.1"/>
                <path d="M45,15 L55,25 L45,35 L35,25 Z" fill="#0891B2" opacity="0.12"/>
              </pattern>
              
              {/* Motifs circulaires */}
              <pattern id="african-circles" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="8" fill="#BE185D" opacity="0.08"/>
                <circle cx="75" cy="75" r="12" fill="#B45309" opacity="0.06"/>
                <circle cx="50" cy="80" r="6" fill="#047857" opacity="0.1"/>
                <circle cx="80" cy="30" r="10" fill="#7C2D12" opacity="0.07"/>
              </pattern>
              
              {/* Motifs en spirales */}
              <pattern id="african-spirals" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M60,20 Q80,40 60,60 Q40,80 60,100 Q80,80 100,60 Q80,40 60,20" 
                      fill="none" stroke="#DC2626" strokeWidth="2" opacity="0.04"/>
                <path d="M30,10 Q40,20 30,30 Q20,40 30,50 Q40,40 50,30 Q40,20 30,10" 
                      fill="none" stroke="#059669" strokeWidth="1.5" opacity="0.06"/>
              </pattern>
            </defs>
            
            {/* Application des motifs */}
            <rect width="100%" height="100%" fill="url(#african-triangles)" />
            <rect width="100%" height="100%" fill="url(#african-diamonds)" />
            <rect width="100%" height="100%" fill="url(#african-circles)" />
            <rect width="100%" height="100%" fill="url(#african-spirals)" />
          </svg>
        </div>
        
        {/* Gradients de couleurs africaines */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-red-600/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-tr from-green-600/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-yellow-600/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/2 via-transparent to-blue-600/2 rounded-full blur-3xl"></div>
      </div>

      <Header />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <WhyPayzoo />
        <PartnersSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
