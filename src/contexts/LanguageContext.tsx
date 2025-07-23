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
    'hero.badge': '🚀 Lancement bientôt',
    'hero.waitlist': 'Rejoignez +2,500 early adopters',
    'hero.title': 'Réinventez vos',
    'hero.title.highlight': 'paiements',
    'hero.description': 'Transformez chaque transaction en opportunité. Rejoignez la nouvelle génération de paiements intelligents en Côte d\'Ivoire.',
    'hero.subtitle': 'Plus rapide. Plus sûr. Plus simple.',
    'hero.limited': '⚡ Accès anticipé limité',
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
    'whypayzoo.individuals.benefit1': 'Paiement instantané par scan',
    'whypayzoo.individuals.benefit2': 'Demandes de paiement en temps réel',
    'whypayzoo.individuals.benefit3': 'Virements entre wallets sans limite',
    'whypayzoo.individuals.benefit4': 'Tap to Pay révolutionnaire',
    'whypayzoo.individuals.benefit5': 'Tous vos moyens de paiement unifiés',
    'whypayzoo.merchants': 'Marchands',
    'whypayzoo.merchants.title': 'Votre terminal de paiement révolutionnaire',
    'whypayzoo.merchants.subtitle': 'Vendez plus, vendez mieux, vendez partout 🎉',
    'whypayzoo.merchants.benefit1': 'Dashboard ultra-intuitif',
    'whypayzoo.merchants.benefit2': 'QR Code intelligent',
    'whypayzoo.merchants.benefit3': 'Accepter TOUS les paiements',
    'whypayzoo.merchants.benefit4': 'Analytics en temps réel',
    'whypayzoo.merchants.benefit5': 'Remboursements en 1 clic',
    'whypayzoo.developers': 'Développeurs',
    'whypayzoo.developers.title': 'L\'API de vos rêves enfin disponible',
    'whypayzoo.developers.subtitle': 'Code moins, intègre plus, impressionne davantage 🔥',
    'whypayzoo.developers.benefit1': 'API RESTful surpuissante',
    'whypayzoo.developers.benefit2': 'Documentation cristalline + sandbox addictif',
    'whypayzoo.developers.benefit3': 'Webhooks ultra-rapides ⚡',
    'whypayzoo.developers.benefit4': 'SDKs pour TOUS vos langages et framework',
    'whypayzoo.developers.benefit5': 'Intégration express en 10 minutes',
    'whypayzoo.discover': 'Découvrir maintenant',
    
    // Lead Form
    'form.phone.placeholder': '01 23 45 67 89 01',
    'form.submit': 'Découvrir en premier',
    'form.submitting': 'Inscription...',
    'form.error.phone': 'Veuillez entrer votre numéro de téléphone.',
    'form.error.phone.invalid': 'Numéro de téléphone invalide. Utilisez le format: 01 23 45 67 89 01',
    'form.error.phone.length': 'Le numéro doit contenir exactement 10 chiffres.',
    'form.error.phone.prefix': 'Le numéro doit commencer par 01, 05 ou 07.',
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
    'footer.tagline': 'Réinventez vos paiements',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.badge': '🚀 Launching Soon',
    'hero.waitlist': 'Join +2,500 early adopters',
    'hero.title': 'Reinvents your',
    'hero.title.highlight': 'payments',
    'hero.description': 'Transform every transaction into opportunity. Join the new generation of intelligent payments in Côte d\'Ivoire.',
    'hero.subtitle': 'Faster. Safer. Simpler.',
    'hero.limited': '⚡ Limited early access',
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
    'whypayzoo.individuals.benefit1': 'Instant scan payment - Faster than your card! ⚡',
    'whypayzoo.individuals.benefit2': 'Real-time payment requests - No more reminders! 📱',
    'whypayzoo.individuals.benefit3': 'Unlimited wallet transfers - Total freedom! 🔄',
    'whypayzoo.individuals.benefit4': 'Revolutionary Tap to Pay - Magic at your fingertips ✨',
    'whypayzoo.individuals.benefit5': 'All payment methods unified - One single gesture! 🎯',
    'whypayzoo.merchants': 'Merchants',
    'whypayzoo.merchants.title': 'Your revolutionary payment terminal',
    'whypayzoo.merchants.subtitle': 'Sell more, sell better, sell everywhere 🎉',
    'whypayzoo.merchants.benefit1': 'Ultra-intuitive dashboard - Your sales at a glance! 📊',
    'whypayzoo.merchants.benefit2': 'Smart QR Code - Auto-generated, instantly paid! 🎯',
    'whypayzoo.merchants.benefit3': 'Accept ALL payments - Cards, wallets, crypto... everything! 💫',
    'whypayzoo.merchants.benefit4': 'Real-time analytics - Track your success second by second! 📈',
    'whypayzoo.merchants.benefit5': '1-click refunds - Customer satisfaction guaranteed! ✅',
    'whypayzoo.developers': 'Developers',
    'whypayzoo.developers.title': 'The API of your dreams finally available',
    'whypayzoo.developers.subtitle': 'Code less, integrate more, impress more 🔥',
    'whypayzoo.developers.benefit1': 'Super-powered RESTful API - It does all the work for you! 🤖',
    'whypayzoo.developers.benefit2': 'Crystal-clear docs + addictive sandbox - Code while having fun! 📚',
    'whypayzoo.developers.benefit3': 'Lightning-fast webhooks - Faster than lightning! ⚡',
    'whypayzoo.developers.benefit4': 'SDKs for ALL your languages - Python, JS, PHP... we got it all! 💻',
    'whypayzoo.developers.benefit5': 'Express 10-minute integration - Promise, timed! ⏱️',
    'whypayzoo.discover': 'Discover now',
    
    // Lead Form
    'form.phone.placeholder': '01 23 45 67 89 01',
    'form.submit': 'Discover first',
    'form.submitting': 'Signing up...',
    'form.error.phone': 'Please enter your phone number.',
    'form.error.phone.invalid': 'Invalid phone number. Use format: 01 23 45 67 89 01',
    'form.error.phone.length': 'Phone number must contain exactly 10 digits.',
    'form.error.phone.prefix': 'Phone number must start with 01, 05 or 07.',
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
    'footer.tagline': 'Reinvent your payments',
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
