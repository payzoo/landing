
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-light text-gray-900 tracking-tight">Payzoo</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-600 font-light">
              © {currentYear} Payzoo. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-500 mt-1 font-light">
              Le paiement nouvelle génération
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
