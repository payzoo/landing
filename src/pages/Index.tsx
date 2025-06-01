
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1">
          <HeroSection />
        </div>
        <div className="flex-shrink-0">
          <PartnersSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
