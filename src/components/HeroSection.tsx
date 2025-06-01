
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#1B1B1B] text-white text-sm font-semibold shadow-lg border border-gray-200/20 backdrop-blur-sm">
                <span className="animate-pulse mr-3">🚀</span>
                Bientôt disponible
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]">
                  Le paiement nouvelle <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B4DE00] to-[#9BC400]">génération</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  Une seule plateforme, tous les moyens de paiement. Payez, recevez et développez vos services dans une solution unifiée et sécurisée.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="group p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">📱</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-2">Particuliers</p>
                  <p className="text-sm text-gray-600">Wallet tout-en-un sécurisé</p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">🏪</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-2">Marchands</p>
                  <p className="text-sm text-gray-600">Terminal mobile intelligent</p>
                </div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white text-xl">💻</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-2">Développeurs</p>
                  <p className="text-sm text-gray-600">API unifiée puissante</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-12 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Sécurisé</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">Instant</div>
                <div className="text-sm text-gray-600 font-medium">Paiements</div>
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
