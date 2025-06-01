
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Payzoo</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Fonctionnalités
            </button>
            <button 
              onClick={() => scrollToSection('why-payzoo')}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Pourquoi Payzoo
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-emerald-600 transition-colors font-medium"
            >
              Comment ça marche
            </button>
            <Button 
              onClick={() => scrollToSection('signup')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Pré-inscription
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Fonctionnalités
              </button>
              <button 
                onClick={() => scrollToSection('why-payzoo')}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Pourquoi Payzoo
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Comment ça marche
              </button>
              <Button 
                onClick={() => scrollToSection('signup')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full py-2 rounded-lg font-medium transition-colors"
              >
                Pré-inscription
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
