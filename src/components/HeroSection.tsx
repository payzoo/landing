
import React from 'react';
import LeadForm from './LeadForm';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-white flex items-center overflow-hidden relative pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Layout with Better Space Utilization */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Header Content */}
          <div className="space-y-8">
            {/* Main Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium shadow-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                {t('hero.badge')}
              </div>
            </div>
            
            {/* Title and Enhanced Description */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] tracking-tight max-w-4xl mx-auto">
                {t('hero.title')} <span className="font-medium bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{t('hero.title.highlight')}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                {t('hero.description')}
              </p>
              
              {/* New Subtitle for Impact */}
              <div className="flex justify-center">
                <p className="text-base font-medium text-gray-800 bg-gray-50 px-6 py-2 rounded-full border border-gray-200">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Lead Form - Centered */}
          <div className="flex justify-center">
            <LeadForm />
          </div>

          {/* Trust Indicators for Better Space Usage */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">+2,500</div>
              <div className="text-sm text-gray-500 font-medium">Early Adopters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-500 font-medium">Sécurisé</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 mb-2">24/7</div>
              <div className="text-sm text-gray-500 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
