
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
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
              © {currentYear} Payzoo. {t('footer.copyright')}
            </p>
            <p className="text-xs text-gray-500 mt-1 font-light">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/people/Payzoo/61576975785810/"
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/payzooapp"
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://x.com/payzooapp"
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.tiktok.com/@payzooapp"
              className="w-10 h-10 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-900 hover:border-gray-900 transition-all duration-200 group"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/payzoo"
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
