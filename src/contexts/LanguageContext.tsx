
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.features': 'Fonctionnalités',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Bientôt disponible',
    'hero.title': 'Le paiement',
    'hero.title.highlight': 'nouvelle génération',
    'hero.description': 'Une seule plateforme, tous les moyens de paiement. Simplicité et sécurité au service de votre croissance.',
    'hero.individuals': 'Particuliers',
    'hero.individuals.desc': 'Wallet sécurisé',
    'hero.merchants': 'Marchands',
    'hero.merchants.desc': 'Terminal mobile',
    'hero.developers': 'Développeurs',
    'hero.developers.desc': 'API unifiée',
    'hero.secure': 'Sécurisé',
    'hero.support': 'Support',
    'hero.instant': 'Instant',
    'hero.payments': 'Paiements',
    
    // WhyPayzoo Section
    'whypayzoo.badge': 'Innovation & simplicité',
    'whypayzoo.title': 'Conçu pour',
    'whypayzoo.title.highlight': 'tous les profils',
    'whypayzoo.description': 'Une solution qui s\'adapte à votre rythme, quel que soit votre profil',
    'whypayzoo.individuals': 'Particuliers',
    'whypayzoo.individuals.title': 'Votre portefeuille digital intelligent',
    'whypayzoo.individuals.subtitle': 'Payez, recevez et transférez comme jamais auparavant ✨',
    'whypayzoo.individuals.benefit1': 'Scanner pour payer en 2 secondes ⚡',
    'whypayzoo.individuals.benefit2': 'Recevoir des demandes instantanément 📱',
    'whypayzoo.individuals.benefit3': 'Transférer sans friction entre wallets 🔄',
    'whypayzoo.individuals.benefit4': 'Tap to Pay : magie sans QR Code ✨',
    'whypayzoo.individuals.benefit5': 'Tous vos moyens de paiement réunis 🎯',
    'whypayzoo.merchants': 'Marchands',
    'whypayzoo.merchants.title': 'Votre terminal de paiement révolutionnaire',
    'whypayzoo.merchants.subtitle': 'Vendez plus, vendez mieux, vendez partout 🎉',
    'whypayzoo.merchants.benefit1': 'Dashboard intuitif et sexy 📊',
    'whypayzoo.merchants.benefit2': 'QR Code unique généré automatiquement 🎯',
    'whypayzoo.merchants.benefit3': 'Accepter tous les paiements sans effort 💫',
    'whypayzoo.merchants.benefit4': 'Stats en temps réel qui font plaisir 📈',
    'whypayzoo.merchants.benefit5': 'Gestion des remboursements simplifiée ✅',
    'whypayzoo.developers': 'Développeurs',
    'whypayzoo.developers.title': 'L\'API de vos rêves enfin disponible',
    'whypayzoo.developers.subtitle': 'Code moins, intègre plus, impressionne davantage 🔥',
    'whypayzoo.developers.benefit1': 'API RESTful qui fait tout le travail 🤖',
    'whypayzoo.developers.benefit2': 'Documentation claire et sandbox fun 📚',
    'whypayzoo.developers.benefit3': 'Webhooks temps réel ultra-rapides ⚡',
    'whypayzoo.developers.benefit4': 'SDKs pour tous vos langages préférés 💻',
    'whypayzoo.developers.benefit5': 'Intégration en 10 minutes chrono ⏱️',
    'whypayzoo.discover': 'Découvrir maintenant',
    
    // Lead Form
    'form.title': 'Rejoignez l\'aventure',
    'form.title.highlight': 'Payzoo',
    'form.description': 'Soyez les premiers informés du lancement',
    'form.phone.placeholder': '01 23 45 67 89',
    'form.submit': 'Découvrir en premier',
    'form.submitting': 'Inscription...',
    'form.secure': '100% sécurisé',
    'form.no.commitment': 'Sans engagement',
    'form.priority.access': 'Accès prioritaire',
    'form.priority.access.desc': 'Découvrez Payzoo avant tout le monde',
    'form.preferential.rates': 'Tarifs préférentiels',
    'form.preferential.rates.desc': 'Bénéficiez d\'offres exclusives au lancement',
    'form.error.phone': 'Veuillez entrer votre numéro de téléphone.',
    'form.success.title': 'Merci !',
    'form.success.description': 'Nous vous tiendrons informé du lancement de Payzoo.',
    'form.error.title': 'Erreur',
    'form.error.description': 'Une erreur est survenue. Veuillez réessayer.',
    
    // Partners Section
    'partners.badge': 'Nos partenaires',
    'partners.title': 'Soutenus par les',
    'partners.title.highlight': 'leaders technologiques',
    'partners.description': 'Des partenariats stratégiques pour garantir l\'excellence de notre plateforme',
    'partners.soc2': 'Certifié SOC 2',
    'partners.gdpr': 'RGPD Compliant',
    'partners.pci': 'PCI DSS Level 1',
    'partners.iso': 'ISO 27001',
    'partners.3ds': '3D Secure 2.0',
    'partners.aml': 'AML/KYC',
    
    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Questions',
    'faq.title.highlight': 'fréquentes',
    'faq.description': 'Tout ce que vous devez savoir sur Payzoo pour bien commencer votre parcours.',
    'faq.more.question': 'Une autre question ?',
    'faq.contact.team': 'Contactez notre équipe',
    
    // Footer
    'footer.copyright': 'Tous droits réservés.',
    'footer.tagline': 'Le paiement nouvelle génération',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': 'Coming Soon',
    'hero.title': 'Next-generation',
    'hero.title.highlight': 'payments',
    'hero.description': 'One platform, all payment methods. Simplicity and security at the service of your growth.',
    'hero.individuals': 'Individuals',
    'hero.individuals.desc': 'Secure wallet',
    'hero.merchants': 'Merchants',
    'hero.merchants.desc': 'Mobile terminal',
    'hero.developers': 'Developers',
    'hero.developers.desc': 'Unified API',
    'hero.secure': 'Secure',
    'hero.support': 'Support',
    'hero.instant': 'Instant',
    'hero.payments': 'Payments',
    
    // WhyPayzoo Section
    'whypayzoo.badge': 'Innovation & simplicity',
    'whypayzoo.title': 'Designed for',
    'whypayzoo.title.highlight': 'all profiles',
    'whypayzoo.description': 'A solution that adapts to your pace, whatever your profile',
    'whypayzoo.individuals': 'Individuals',
    'whypayzoo.individuals.title': 'Your intelligent digital wallet',
    'whypayzoo.individuals.subtitle': 'Pay, receive and transfer like never before ✨',
    'whypayzoo.individuals.benefit1': 'Scan to pay in 2 seconds ⚡',
    'whypayzoo.individuals.benefit2': 'Receive requests instantly 📱',
    'whypayzoo.individuals.benefit3': 'Transfer frictionlessly between wallets 🔄',
    'whypayzoo.individuals.benefit4': 'Tap to Pay: magic without QR Code ✨',
    'whypayzoo.individuals.benefit5': 'All your payment methods unified 🎯',
    'whypayzoo.merchants': 'Merchants',
    'whypayzoo.merchants.title': 'Your revolutionary payment terminal',
    'whypayzoo.merchants.subtitle': 'Sell more, sell better, sell everywhere 🎉',
    'whypayzoo.merchants.benefit1': 'Intuitive and sexy dashboard 📊',
    'whypayzoo.merchants.benefit2': 'Unique QR Code generated automatically 🎯',
    'whypayzoo.merchants.benefit3': 'Accept all payments effortlessly 💫',
    'whypayzoo.merchants.benefit4': 'Real-time stats that delight 📈',
    'whypayzoo.merchants.benefit5': 'Simplified refund management ✅',
    'whypayzoo.developers': 'Developers',
    'whypayzoo.developers.title': 'The API of your dreams finally available',
    'whypayzoo.developers.subtitle': 'Code less, integrate more, impress more 🔥',
    'whypayzoo.developers.benefit1': 'RESTful API that does all the work 🤖',
    'whypayzoo.developers.benefit2': 'Clear documentation and fun sandbox 📚',
    'whypayzoo.developers.benefit3': 'Ultra-fast real-time webhooks ⚡',
    'whypayzoo.developers.benefit4': 'SDKs for all your favorite languages 💻',
    'whypayzoo.developers.benefit5': '10-minute integration 🕐',
    'whypayzoo.discover': 'Discover now',
    
    // Lead Form
    'form.title': 'Join the',
    'form.title.highlight': 'Payzoo adventure',
    'form.description': 'Be the first to know about the launch',
    'form.phone.placeholder': '01 23 45 67 89',
    'form.submit': 'Discover first',
    'form.submitting': 'Signing up...',
    'form.secure': '100% secure',
    'form.no.commitment': 'No commitment',
    'form.priority.access': 'Priority access',
    'form.priority.access.desc': 'Discover Payzoo before everyone else',
    'form.preferential.rates': 'Preferential rates',
    'form.preferential.rates.desc': 'Get exclusive offers at launch',
    'form.error.phone': 'Please enter your phone number.',
    'form.success.title': 'Thank you!',
    'form.success.description': 'We will keep you informed about the Payzoo launch.',
    'form.error.title': 'Error',
    'form.error.description': 'An error occurred. Please try again.',
    
    // Partners Section
    'partners.badge': 'Our partners',
    'partners.title': 'Supported by',
    'partners.title.highlight': 'technology leaders',
    'partners.description': 'Strategic partnerships to guarantee the excellence of our platform',
    'partners.soc2': 'SOC 2 Certified',
    'partners.gdpr': 'GDPR Compliant',
    'partners.pci': 'PCI DSS Level 1',
    'partners.iso': 'ISO 27001',
    'partners.3ds': '3D Secure 2.0',
    'partners.aml': 'AML/KYC',
    
    // FAQ
    'faq.badge': 'FAQ',
    'faq.title': 'Frequently',
    'faq.title.highlight': 'asked questions',
    'faq.description': 'Everything you need to know about Payzoo to get started on your journey.',
    'faq.more.question': 'Another question?',
    'faq.contact.team': 'Contact our team',
    
    // Footer
    'footer.copyright': 'All rights reserved.',
    'footer.tagline': 'Next-generation payments',
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
