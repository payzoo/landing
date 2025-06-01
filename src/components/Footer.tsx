
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo et nom */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">P</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">Payzoo</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              © {currentYear} Payzoo. Tous droits réservés.
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group"
              aria-label="TikTok"
            >
              <span className="text-gray-600 group-hover:text-black transition-colors text-sm font-bold">TT</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
