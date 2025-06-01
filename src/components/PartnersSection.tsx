
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
    <section className="py-4 bg-gray-50/50 mb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-base text-gray-800 font-bold">
            Trusted by these companies so far
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full object-contain opacity-60 hover:opacity-80 transition-opacity"
                title={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
