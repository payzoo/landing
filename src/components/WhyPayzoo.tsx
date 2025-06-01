
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WhyPayzoo = () => {
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

  return (
    <section id="why-payzoo" className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header moderne */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm font-medium mb-8 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
              Pourquoi nous choisir
            </div>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight leading-[1.1]">
              Fait pour 
              <span className="font-medium"> tous</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
              Une solution adaptée à chaque besoin. Simple, efficace et pensée pour votre croissance.
            </p>
          </div>

          {/* Tabs modernes */}
          <Tabs defaultValue="particuliers" className="w-full">
            <div className="flex justify-center mb-20">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-2 h-auto">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center space-y-2 py-4 px-3 rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300 hover:bg-gray-50 text-gray-600 font-medium"
                  >
                    <span className="text-2xl">{tab.icon}</span>
                    <span className="text-xs font-medium">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Contenu des tabs */}
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="focus-visible:outline-none">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  {/* Contenu textuel */}
                  <div className="space-y-10">
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight tracking-tight">
                        {tab.title}
                      </h3>
                      <p className="text-xl text-gray-500 font-light leading-relaxed">
                        {tab.subtitle}
                      </p>
                    </div>

                    <div className="space-y-6">
                      {tab.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-4 group">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-200"></div>
                          <p className="text-gray-700 leading-relaxed font-light text-lg group-hover:text-gray-900 transition-colors duration-200">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual moderne */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative group">
                      {/* Card principale */}
                      <div className="w-96 h-[28rem] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                        <div className="h-full flex flex-col">
                          {/* Header de la card */}
                          <div className="p-8 border-b border-gray-50">
                            <div className="flex items-center space-x-4">
                              <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center">
                                <span className="text-white text-2xl">{tab.icon}</span>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-lg">{tab.label}</h4>
                                <p className="text-gray-500 text-sm">Interface Payzoo</p>
                              </div>
                            </div>
                          </div>
                          
                          {/* Contenu de la card */}
                          <div className="flex-1 p-8 flex items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto">
                                <span className="text-3xl">{tab.icon}</span>
                              </div>
                              <div className="space-y-2">
                                <div className="h-3 bg-gray-100 rounded-full w-32 mx-auto"></div>
                                <div className="h-3 bg-gray-100 rounded-full w-24 mx-auto"></div>
                                <div className="h-3 bg-gray-100 rounded-full w-28 mx-auto"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Éléments flottants */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">⚡</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default WhyPayzoo;
