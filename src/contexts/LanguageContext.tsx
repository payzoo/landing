
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
