
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Plus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t, language } = useLanguage();
  
  const faqs = {
    fr: [
      {
        question: 'Quand la version bêta sera-t-elle disponible ?',
        answer: 'Nous prévoyons de lancer la version bêta au premier trimestre 2024. Les utilisateurs inscrits sur notre liste d\'attente seront les premiers informés et auront un accès prioritaire.'
      },
      {
        question: 'Puis-je utiliser Payzoo dans plusieurs pays ?',
        answer: 'Oui ! Payzoo est conçu pour fonctionner dans plusieurs pays africains et européens. Nous commençons par la Côte d\'Ivoire et nous étendrons progressivement notre couverture.'
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
    ],
    en: [
      {
        question: 'When will the beta version be available?',
        answer: 'We plan to launch the beta version in the first quarter of 2024. Users registered on our waiting list will be the first to be informed and will have priority access.'
      },
      {
        question: 'Can I use Payzoo in multiple countries?',
        answer: 'Yes! Payzoo is designed to work in multiple African and European countries. We are starting with Ivory Coast and will gradually expand our coverage.'
      },
      {
        question: 'Are there transaction fees?',
        answer: 'We will apply competitive and transparent fees. Individuals will benefit from free transfers between Payzoo wallets. For merchants and developers, our rates will be detailed at launch.'
      },
      {
        question: 'How does integration work for developers?',
        answer: 'Our RESTful API is designed for quick integration. You will have access to complete documentation, a free sandbox for testing, and SDKs for the most popular languages. Integration can be completed in less than 10 minutes.'
      },
      {
        question: 'What payment methods will be supported?',
        answer: 'Payzoo will support bank cards, mobile money (Orange Money, MTN Mobile Money, etc.), bank accounts, and the main digital wallets of each region.'
      },
      {
        question: 'Is the solution secure?',
        answer: 'Absolutely. Payzoo uses the latest encryption technologies and complies with banking security standards (PCI DSS). Your personal and financial data is protected according to GDPR and local regulations.'
      }
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header moderne */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-8">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">{t('faq.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              {t('faq.title')}
              <span className="font-medium"> {t('faq.title.highlight')}</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              {t('faq.description')}
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs[language].map((faq, index) => (
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
              <span>{t('faq.more.question')}</span>
              <a 
                href="#" 
                className="text-gray-900 font-medium hover:text-gray-600 transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-gray-600"
              >
                {t('faq.contact.team')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
