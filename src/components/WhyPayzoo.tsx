import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const WhyPayzoo = () => {
  const tabs = [
    {
      id: 'particuliers',
      label: 'Particuliers',
      icon: '👨‍💼',
      gradient: 'from-blue-500 to-purple-600',
      color: 'bg-blue-50 text-blue-700',
      title: 'Votre portefeuille digital intelligent',
      subtitle: 'Payez, recevez et transférez comme jamais auparavant ✨',
      benefits: [
        'Scanner pour payer en 2 secondes ⚡',
        'Recevoir des demandes instantanément 📱',
        'Transférer sans friction entre wallets 🔄',
        'Tap to Pay : magie sans QR Code ✨',
        'Tous vos moyens de paiement réunis 🎯'
      ]
    },
    {
      id: 'marchands',
      label: 'Marchands',
      icon: '🚀',
      gradient: 'from-emerald-500 to-teal-600',
      color: 'bg-emerald-50 text-emerald-700',
      title: 'Votre terminal de paiement révolutionnaire',
      subtitle: 'Vendez plus, vendez mieux, vendez partout 🎉',
      benefits: [
        'Dashboard intuitif et sexy 📊',
        'QR Code unique généré automatiquement 🎯',
        'Accepter tous les paiements sans effort 💫',
        'Stats en temps réel qui font plaisir 📈',
        'Gestion des remboursements simplifiée ✅'
      ]
    },
    {
      id: 'developpeurs',
      label: 'Développeurs',
      icon: '🛠️',
      gradient: 'from-orange-500 to-red-600',
      color: 'bg-orange-50 text-orange-700',
      title: 'L\'API de vos rêves enfin disponible',
      subtitle: 'Code moins, intègre plus, impressionne davantage 🔥',
      benefits: [
        'API RESTful qui fait tout le travail 🤖',
        'Documentation claire et sandbox fun 📚',
        'Webhooks temps réel ultra-rapides ⚡',
        'SDKs pour tous vos langages préférés 💻',
        'Intégration en 10 minutes chrono ⏱️'
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState('particuliers');
  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="why-payzoo" className="py-24 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header modernisé pour correspondre aux autres sections */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Innovation & simplicité</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Conçu pour <span className="font-medium">tous les profils</span> 🎯
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Une solution qui s'adapte à votre rythme, quel que soit votre profil
            </p>
          </div>

          {/* Tabs ultra-modernes */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="grid w-full max-w-lg grid-cols-3 bg-white/60 backdrop-blur-md border-0 shadow-xl rounded-2xl p-2 h-auto">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-3 py-6 px-4 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-500 hover:scale-105 group"
                  >
                    <div className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${activeTab === tab.id ? 'animate-bounce' : ''}`}>
                      {tab.icon}
                    </div>
                    <span className={`text-sm font-semibold transition-colors duration-300 ${activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'}`}>
                      {tab.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Contenu des tabs */}
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="focus-visible:outline-none">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Contenu textuel modernisé */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${tab.color} text-sm font-medium`}>
                        <span className="text-2xl">{tab.icon}</span>
                        {tab.label}
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {tab.title}
                      </h3>
                      
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {tab.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {tab.benefits.map((benefit, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md group"
                        >
                          <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-gray-700 font-medium text-lg group-hover:text-gray-900 transition-colors duration-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <button className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${tab.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                        <span>Découvrir maintenant</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Visualisation moderne et ludique */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      {/* Card principale avec animation */}
                      <Card className="w-80 h-96 bg-gradient-to-br from-white to-gray-50/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:rotate-1 group overflow-hidden">
                        <div className="h-full p-8 flex flex-col relative">
                          {/* Gradient overlay animé */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${tab.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          {/* Header avec icône animée */}
                          <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tab.gradient} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {tab.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">{tab.label}</h4>
                              <p className="text-gray-500 text-sm">Interface Payzoo</p>
                            </div>
                          </div>
                          
                          {/* Contenu avec éléments ludiques */}
                          <div className="flex-1 flex flex-col justify-center items-center space-y-6 relative z-10">
                            <div className="space-y-3 w-full">
                              {[...Array(4)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`h-3 rounded-full bg-gradient-to-r ${tab.gradient} opacity-20 transition-all duration-1000 hover:opacity-40`}
                                  style={{ 
                                    width: `${80 - i * 15}%`,
                                    animationDelay: `${i * 0.2}s`
                                  }}
                                ></div>
                              ))}
                            </div>
                            
                            <div className="text-center space-y-2">
                              <div className="text-3xl animate-pulse">{tab.icon}</div>
                              <p className="text-gray-600 text-sm font-medium">Prêt à démarrer</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                      
                      {/* Éléments flottants ludiques */}
                      <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${tab.gradient} shadow-xl flex items-center justify-center animate-bounce`}>
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="absolute -bottom-6 -left-6 w-14 h-14 rounded-2xl bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                      </div>
                      
                      <div className="absolute top-1/2 -left-8 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg animate-pulse"></div>
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
