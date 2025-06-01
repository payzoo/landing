
import React from 'react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'Microsoft for Startups',
      logo: 'https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop&crop=center&auto=format&q=80&sat=-100'
    },
    {
      name: 'GitHub',
      logo: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop&crop=center&auto=format&q=80&sat=-100'
    },
    {
      name: 'Cloudflare',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center&auto=format&q=80&sat=-100'
    },
    {
      name: 'AWS Activate',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center&auto=format&q=80&sat=-100'
    }
  ];

  return (
    <section className="py-4 bg-gray-50/50 mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <p className="text-xs text-gray-600 font-medium">
            Nos partenaires technologiques
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-2"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-full object-contain grayscale opacity-70 hover:opacity-90 transition-opacity"
                title={partner.name}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Accélérant notre croissance ensemble
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
