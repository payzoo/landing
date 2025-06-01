
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const WhyPayzoo = () => {
  const [activeTab, setActiveTab] = useState('particuliers');

  const tabs = [
    {
      id: 'particuliers',
      label: 'Particuliers',
      icon: '📱',
      title: 'Votre portefeuille digital tout-en-un',
      subtitle: 'Payez, recevez et transférez en toute simplicité',
      benefits: [
        'Scanner le QR Code d\'un marchand pour payer instantanément',
        'Recevoir des demandes de paiement directement',
        'Transférer de l\'argent entre wallets ou vers d\'autres personnes',
        'Tap to Pay : payer sans QR Code en approchant le téléphone',
        'Agrégation de plusieurs moyens de paiement (carte, mobile money, wallet)'
      ]
    },
    {
      id: 'marchands',
      label: 'Marchands',
      icon: '🏪',
      title: 'Transformez votre smartphone en terminal de paiement',
      subtitle: 'Acceptez tous les moyens de paiement sans matériel complexe',
      benefits: [
        'Dashboard web intuitif pour créer et suivre vos paiements',
        'Génération automatique d\'un QR Code unique par marchand',
        'Acceptation de paiements par QR Code ou Tap to Pay',
        'Statistiques et suivi des ventes en temps réel',
        'Gestion des remboursements et historiques détaillés'
      ]
    },
    {
      id: 'developpeurs',
      label: 'Développeurs',
      icon: '💻',
      title: 'Une API unique pour tous les moyens de paiement',
      subtitle: 'Intégrez rapidement sans multiplier les SDKs',
      benefits: [
        'API RESTful couvrant cartes, mobile money, wallets et comptes bancaires',
        'Documentation claire avec sandbox pour tests',
        'Webhooks pour événements temps réel (paiement, échec, remboursement)',
        'SDKs disponibles pour JavaScript, PHP, Python et plus',
        'Intégration en moins de 10 minutes'
      ]
    }
  ];

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="why-payzoo" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Pourquoi choisir <span className="font-medium">Payzoo</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Une solution adaptée à chaque besoin, simple et efficace.
          </p>
        </div>

        {/* Tab Navigation - Aligned to left */}
        <div className="mb-16 max-w-6xl mx-auto">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={`px-8 py-4 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
                {currentTab.title}
              </h3>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                {currentTab.subtitle}
              </p>
            </div>

            <ul className="space-y-4">
              {currentTab.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed font-light">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-white rounded-3xl shadow-xl border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6">{currentTab.icon}</div>
                  <div className="text-gray-900 font-medium text-lg mb-2">{currentTab.label}</div>
                  <div className="text-gray-500 text-sm">Interface Payzoo</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-900 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPayzoo;
