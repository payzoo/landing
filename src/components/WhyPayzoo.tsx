
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
    <section id="why-payzoo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir Payzoo ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution adaptée à chaque besoin, de l'utilisateur final au développeur en passant par le commerçant.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant="ghost"
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {currentTab.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {currentTab.subtitle}
              </p>
            </div>

            <ul className="space-y-4">
              {currentTab.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">{currentTab.icon}</div>
                  <div className="text-emerald-600 font-semibold text-lg">{currentTab.label}</div>
                  <div className="text-gray-600 text-sm mt-2">Interface Payzoo</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-emerald-600 rounded-xl shadow-lg flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPayzoo;
