
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Users } from 'lucide-react';

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
    },
    {
      name: 'Grafana',
      logo: 'https://grafana.com/static/img/logos/grafana_logo_swirl-events.svg'
    },
    {
      name: 'Terraform',
      logo: 'https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg'
    },
    {
      name: 'Visa',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
    },
    {
      name: 'Mastercard',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg'
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100 w-full overflow-hidden">
      <div className="w-full">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm mb-8">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Nos partenaires</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">
            Soutenus par les <span className="font-medium">leaders technologiques</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Des partenariats stratégiques pour garantir l'excellence de notre plateforme
          </p>
        </div>
        
        <div className="relative px-4 sm:px-8 lg:px-16">
          <div className="mx-16 lg:mx-20">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="flex items-center">
                {partners.map((partner, index) => (
                  <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6 flex justify-center">
                    <div className="group flex items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 h-24 w-full">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-12 object-contain opacity-60 group-hover:opacity-80 transition-opacity"
                        title={partner.name}
                        onError={(e) => {
                          console.log(`Failed to load logo for ${partner.name}: ${partner.logo}`);
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 h-10 w-10 bg-white shadow-lg border border-gray-200 hover:bg-gray-50" />
              <CarouselNext className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 h-10 w-10 bg-white shadow-lg border border-gray-200 hover:bg-gray-50" />
            </Carousel>
          </div>
        </div>

        <div className="mt-16 text-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">Certifié SOC 2</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">RGPD Compliant</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">PCI DSS Level 1</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">3D Secure 2.0</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="font-medium text-sm text-gray-700">AML/KYC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
