
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
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#B4DE00]/20 text-[#9BC400] text-sm font-medium">
                🚀 Bientôt disponible
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Payzoo arrive bientôt :
                <span className="text-[#B4DE00] block">le paiement nouvelle génération</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Une seule plateforme, tous les moyens de paiement. Payez, recevez et développez vos services de paiement dans une solution unifiée.
              </p>
            </div>

            {/* Value propositions */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] font-bold">📱</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Particuliers</p>
                  <p className="text-sm text-gray-600">Wallet tout-en-un</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] font-bold">🏪</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marchands</p>
                  <p className="text-sm text-gray-600">Terminal mobile</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-[#B4DE00]/20 rounded-lg flex items-center justify-center">
                  <span className="text-[#B4DE00] font-bold">💻</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Développeurs</p>
                  <p className="text-sm text-gray-600">API unifiée</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('signup')}
                className="bg-[#B4DE00] hover:bg-[#9BC400] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              >
                Je veux être informé
              </Button>
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
