
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Retrouvez les réponses aux questions les plus posées sur Payzoo.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-100">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 hover:no-underline">
                    <span className="text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
