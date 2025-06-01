
import React from 'react';

const HowItWorks = () => {
  const workflows = [
    {
      category: 'Particuliers',
      icon: '📱',
      color: 'bg-blue-500',
      steps: [
        { step: '1', title: 'Télécharger l\'app', description: 'iOS, Android ou version web', icon: '📲' },
        { step: '2', title: 'Scanner ou Tap', description: 'QR Code ou Tap to Pay', icon: '📷' },
        { step: '3', title: 'Valider le paiement', description: 'Sécurisé et instantané', icon: '✅' }
      ]
    },
    {
      category: 'Marchands',
      icon: '🏪',
      color: 'bg-emerald-500',
      steps: [
        { step: '1', title: 'Créer un compte', description: 'Inscription marchand simple', icon: '📝' },
        { step: '2', title: 'Générer QR Code', description: 'QR Code unique automatique', icon: '🏷️' },
        { step: '3', title: 'Recevoir paiements', description: 'Instantané sur votre dashboard', icon: '💰' }
      ]
    },
    {
      category: 'Développeurs',
      icon: '💻',
      color: 'bg-purple-500',
      steps: [
        { step: '1', title: 'Accéder au sandbox', description: 'Environnement de test gratuit', icon: '🔧' },
        { step: '2', title: 'Consulter la doc', description: 'Guides et exemples détaillés', icon: '📚' },
        { step: '3', title: 'Intégrer l\'API', description: 'En quelques lignes de code', icon: '⚡' }
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus simple et intuitif, adapté à chaque type d'utilisateur.
          </p>
        </div>

        <div className="space-y-16">
          {workflows.map((workflow, workflowIndex) => (
            <div key={workflow.category} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-6 py-3 rounded-full ${workflow.color} text-white font-semibold text-lg shadow-lg`}>
                  <span className="mr-3 text-xl">{workflow.icon}</span>
                  {workflow.category}
                </div>
              </div>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-8 relative">
                {workflow.steps.map((step, index) => (
                  <div key={index} className="relative">
                    {/* Connector Line (hidden on mobile) */}
                    {index < workflow.steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2 z-0">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                      </div>
                    )}

                    {/* Step Card */}
                    <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 z-10">
                      {/* Step Number */}
                      <div className={`w-12 h-12 ${workflow.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                        {step.step}
                      </div>

                      {/* Step Icon */}
                      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">{step.icon}</span>
                      </div>

                      {/* Step Content */}
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Simple, rapide et sécurisé
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Quel que soit votre profil, Payzoo s'adapte à vos besoins avec un processus d'intégration simplifié.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('signup');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
