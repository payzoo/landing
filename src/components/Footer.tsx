
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#B4DE00] to-[#9BC400] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-black font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Payzoo</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              © {currentYear} Payzoo. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Le paiement nouvelle génération
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group shadow-sm hover:shadow-md"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group shadow-sm hover:shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-black transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-[#B4DE00] hover:border-[#B4DE00] transition-all duration-200 group shadow-sm hover:shadow-md"
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
