
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
    <section className="py-4 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <p className="text-xs text-gray-600 font-medium">
            Nos partenaires de confiance
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="text-lg md:text-xl" title={partner.name}>
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Et bien d'autres partenaires à venir...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
