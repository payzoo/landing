
import React from 'react';

const Features = () => {
  const features = [
    {
      category: 'Particuliers',
      icon: '📱',
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          title: 'QR Code Scan & Pay',
          description: 'Scannez et payez instantanément chez vos marchands préférés',
          icon: '📷'
        },
        {
          title: 'Transfert P2P',
          description: 'Envoyez de l\'argent entre wallets ou vers d\'autres personnes',
          icon: '💸'
        },
        {
          title: 'Tap to Pay (NFC)',
          description: 'Payez en approchant simplement votre téléphone',
          icon: '📲'
        },
        {
          title: 'Multi-wallets',
          description: 'Gérez cartes, mobile money, comptes bancaires en un lieu',
          icon: '💳'
        }
      ]
    },
    {
      category: 'Marchands',
      icon: '🏪',
      color: 'from-emerald-500 to-emerald-600',
      items: [
        {
          title: 'Dashboard Web',
          description: 'Interface intuitive pour gérer vos paiements et ventes',
          icon: '📊'
        },
        {
          title: 'QR Code Unique',
          description: 'Génération automatique de votre QR Code marchand',
          icon: '🏷️'
        },
        {
          title: 'Suivi en Temps Réel',
          description: 'Statistiques de ventes et notifications instantanées',
          icon: '⚡'
        },
        {
          title: 'TPE Mobile',
          description: 'Votre smartphone devient un terminal de paiement',
          icon: '📱'
        }
      ]
    },
    {
      category: 'Développeurs',
      icon: '💻',
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          title: 'API Unifiée',
          description: 'Une seule API pour tous les moyens de paiement',
          icon: '🔗'
        },
        {
          title: 'Webhooks Temps Réel',
          description: 'Notifications instantanées pour tous les événements',
          icon: '⚡'
        },
        {
          title: 'Documentation Complète',
          description: 'Guides détaillés et sandbox pour vos tests',
          icon: '📚'
        },
        {
          title: 'SDKs Multi-langages',
          description: 'JavaScript, PHP, Python et bien d\'autres',
          icon: '🛠️'
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités puissantes pour tous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment Payzoo transforme l'expérience de paiement pour chaque utilisateur.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((category, categoryIndex) => (
            <div key={category.category} className="relative">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${category.color} text-white font-semibold text-lg shadow-lg`}>
                  <span className="mr-3 text-xl">{category.icon}</span>
                  {category.category}
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.items.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
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
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à découvrir Payzoo ?
            </h3>
            <p className="text-gray-600 mb-6">
              Inscrivez-vous dès maintenant pour être parmi les premiers à tester toutes ces fonctionnalités.
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
              Rejoindre la liste d'attente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
