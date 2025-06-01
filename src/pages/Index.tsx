
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PartnersSection from '../components/PartnersSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
