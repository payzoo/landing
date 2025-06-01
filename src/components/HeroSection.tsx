
import React from 'react';
import LeadForm from './LeadForm';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-white flex items-center overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
                <circle cx="30" cy="30" r="1.5" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-gray-200/30 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-gray-300/20 rounded-lg rotate-45 opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 border border-gray-200/40 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-gray-300/30 rounded-lg rotate-12 opacity-60"></div>
        
        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-100/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-50/80 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-100/20 via-transparent to-gray-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                Bientôt disponible
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                  Le paiement <span className="font-semibold text-gray-900">nouvelle génération</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-light">
                  Une seule plateforme, tous les moyens de paiement. Simplicité et sécurité au service de votre croissance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">Particuliers</p>
                <p className="text-sm text-gray-500">Wallet sécurisé</p>
              </div>

              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">🏪</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">Marchands</p>
                <p className="text-sm text-gray-500">Terminal mobile</p>
              </div>

              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">Développeurs</p>
                <p className="text-sm text-gray-500">API unifiée</p>
              </div>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">100%</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">Instant</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">Paiements</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="lg:pl-12">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
