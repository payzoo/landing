import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo_principal.png" alt="logo" className="w-32 h-auto object-contain"/>
          </div>

          {/* Navigation placeholder for future use */}
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSelector />
          </div>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
