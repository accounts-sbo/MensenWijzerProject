
import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
