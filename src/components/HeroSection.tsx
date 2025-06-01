
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#B4DE00]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1B1B1B] text-white text-sm font-semibold shadow-lg border border-gray-200/20 backdrop-blur-sm">
                <span className="animate-pulse mr-2">🚀</span>
                Bientôt disponible
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Payzoo arrive bientôt :
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4DE00] to-[#9BC400] block mt-2">
                    le paiement nouvelle génération
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Une seule plateforme, tous les moyens de paiement. Payez, recevez et développez vos services de paiement dans une solution unifiée.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="group p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">📱</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Particuliers</p>
                  <p className="text-xs text-gray-600">Wallet tout-en-un</p>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">🏪</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Marchands</p>
                  <p className="text-xs text-gray-600">Terminal mobile</p>
                </div>
              </div>

              <div className="group p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white text-lg">💻</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Développeurs</p>
                  <p className="text-xs text-gray-600">API unifiée</p>
                </div>
              </div>
            </div>

            {/* Stats or metrics */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">Instant</div>
                <div className="text-sm text-gray-600">Paiements</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="lg:pl-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
