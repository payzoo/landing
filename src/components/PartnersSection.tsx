
import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Orange Money',
      logo: '🟠'
    },
    {
      name: 'MTN Mobile Money',
      logo: '🟡'
    },
    {
      name: 'Moov Money',
      logo: '🔵'
    },
    {
      name: 'Wave',
      logo: '💙'
    },
    {
      name: 'Visa',
      logo: '💳'
    },
    {
      name: 'Mastercard',
      logo: '💰'
    }
  ];

  return (
    <section className="py-8 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 font-medium">
            Nos partenaires de confiance
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-2xl md:text-3xl" title={partner.name}>
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            Et bien d'autres partenaires à venir...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
