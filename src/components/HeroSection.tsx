
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
    <section className="min-h-screen bg-white flex items-center overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium shadow-lg">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                {t('hero.badge')}
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1] tracking-tight">
                  {t('hero.title')} <span className="font-semibold text-gray-900">{t('hero.title.highlight')}</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl font-light">
                  {t('hero.description')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">📱</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">{t('hero.individuals')}</p>
                <p className="text-sm text-gray-500">{t('hero.individuals.desc')}</p>
              </div>

              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">🏪</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">{t('hero.merchants')}</p>
                <p className="text-sm text-gray-500">{t('hero.merchants.desc')}</p>
              </div>

              <div className="group text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-300">
                  <span className="text-2xl">💻</span>
                </div>
                <p className="font-medium text-gray-900 mb-1">{t('hero.developers')}</p>
                <p className="text-sm text-gray-500">{t('hero.developers.desc')}</p>
              </div>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">100%</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t('hero.secure')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">24/7</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t('hero.support')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-1">{t('hero.instant')}</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t('hero.payments')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="lg:pl-12">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
