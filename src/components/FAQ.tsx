
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Quand la version bêta sera-t-elle disponible ?',
      answer: 'Nous prévoyons de lancer la version bêta au premier trimestre 2024. Les utilisateurs inscrits sur notre liste d\'attente seront les premiers informés et auront un accès prioritaire.'
    },
    {
      question: 'Puis-je utiliser Payzoo dans plusieurs pays ?',
      answer: 'Oui ! Payzoo est conçu pour fonctionner dans plusieurs pays africains et européens. Nous commençons par la Côte d\'Ivoire, la France, le Sénégal et le Ghana, et nous étendrons progressivement notre couverture.'
    },
    {
      question: 'Y a-t-il des frais de transaction ?',
      answer: 'Nous appliquerons des frais compétitifs et transparents. Les particuliers bénéficieront de transferts gratuits entre wallets Payzoo. Pour les marchands et développeurs, nos tarifs seront détaillés lors du lancement.'
    },
    {
      question: 'Comment fonctionne l\'intégration pour les développeurs ?',
      answer: 'Notre API RESTful est conçue pour une intégration rapide. Vous aurez accès à une documentation complète, un sandbox gratuit pour les tests, et des SDKs pour les langages les plus populaires. L\'intégration peut être réalisée en moins de 10 minutes.'
    },
    {
      question: 'Quels moyens de paiement seront supportés ?',
      answer: 'Payzoo prendra en charge les cartes bancaires, le mobile money (Orange Money, MTN Mobile Money, etc.), les comptes bancaires, et les principaux wallets numériques de chaque région.'
    },
    {
      question: 'La solution est-elle sécurisée ?',
      answer: 'Absolument. Payzoo utilise les dernières technologies de chiffrement et respecte les standards de sécurité bancaire (PCI DSS). Vos données personnelles et financières sont protégées selon les réglementations RGPD et locales.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header moderne */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Questions 
              <span className="font-medium"> fréquentes</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Tout ce que vous devez savoir sur Payzoo pour bien commencer votre parcours.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-6 text-left font-medium text-gray-900 hover:bg-gray-50/50 hover:no-underline border-0 group-hover:bg-gray-50/50 transition-all duration-300">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg font-medium pr-4">{faq.question}</span>
                      <div className="flex-shrink-0">
                        <Plus className="h-5 w-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed border-0">
                    <div className="pt-2 text-base font-light">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Call to action moderne */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-sm">
              <span>Une autre question ?</span>
              <a 
                href="#" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600"
              >
                Contactez notre équipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
