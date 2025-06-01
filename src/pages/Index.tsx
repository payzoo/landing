
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhyPayzoo from '../components/WhyPayzoo';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyPayzoo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
