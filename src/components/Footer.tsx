
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'À propos', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Carrières', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    legal: [
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'Mentions légales', href: '#' },
      { label: 'Conditions d\'utilisation', href: '#' },
      { label: 'RGPD', href: '#' }
    ],
    support: [
      { label: 'Centre d\'aide', href: '#' },
      { label: 'Documentation API', href: '#' },
      { label: 'Statut du service', href: '#' },
      { label: 'Nous contacter', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">Payzoo</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              La solution de paiement nouvelle génération qui unifie tous vos moyens de paiement en une seule plateforme sécurisée et intuitive.
            </p>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                📧 contact@payzoo.com
              </p>
              <p className="text-sm text-gray-400">
                📞 +225 01 02 03 04 05
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="font-semibold text-lg mb-4">Restez informé</h4>
            <p className="text-gray-300 mb-4">
              Recevez les dernières actualités sur le développement de Payzoo.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-l-lg focus:outline-none focus:border-emerald-500 text-white"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-r-lg font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Payzoo. Tous droits réservés. | Conforme RGPD
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
