
import React from 'react';
import LeadForm from './LeadForm';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-full bg-gradient-to-br from-gray-50 to-white flex items-center py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
          {/* Left Column - Content */}
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#B4DE00]/20 text-[#9BC400] text-sm font-medium">
                🚀 Bientôt disponible
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Payzoo arrive bientôt :
                <span className="text-[#B4DE00] block">le paiement nouvelle génération</span>
              </h1>
              
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                Une seule plateforme, tous les moyens de paiement. Payez, recevez et développez vos services de paiement dans une solution unifiée.
              </p>
            </div>

            {/* Value propositions */}
            <div className="grid sm:grid-cols-3 gap-2">
              <div className="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] text-xs">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">Particuliers</p>
                  <p className="text-xs text-gray-600">Wallet tout-en-un</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] text-xs">🏪</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">Marchands</p>
                  <p className="text-xs text-gray-600">Terminal mobile</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 p-2 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] text-xs">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs">Développeurs</p>
                  <p className="text-xs text-gray-600">API unifiée</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={() => scrollToSection('signup')}
                className="bg-[#B4DE00] hover:bg-[#9BC400] text-black px-6 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-105 shadow-lg"
              >
                Je veux être informé
              </Button>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="lg:pl-4 h-full flex items-center">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
