
import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Microsoft for Startups',
      logo: '/lovable-uploads/00d0a090-3aff-440a-8d64-542d1f23cfaa.png'
    },
    {
      name: 'GitHub',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      name: 'Cloudflare',
      logo: 'https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg'
    },
    {
      name: 'AWS Activate',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8">
            <span className="text-sm text-gray-600 font-medium">Nos partenaires</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Soutenus par les <span className="font-medium">leaders technologiques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Des partenariats stratégiques pour garantir l'excellence de notre plateforme
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-12 object-contain opacity-40 group-hover:opacity-70 transition-opacity filter grayscale group-hover:grayscale-0"
                title={partner.name}
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">Certifié SOC 2</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium">RGPD Compliant</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium">PCI DSS Level 1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
