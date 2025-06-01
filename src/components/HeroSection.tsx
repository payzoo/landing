
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
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
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

            <div className="grid grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">Particuliers</p>
                <p className="text-sm text-gray-500">Wallet sécurisé</p>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">🏪</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">Marchands</p>
                <p className="text-sm text-gray-500">Terminal mobile</p>
              </div>

              <div className="group text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-gray-200 transition-all duration-300">
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
