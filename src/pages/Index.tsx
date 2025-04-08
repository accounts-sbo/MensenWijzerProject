
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSummary from '@/components/AboutSummary';
import Services from '@/components/Services';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import WorkWithMe from '@/components/WorkWithMe';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <Hero />
      <div id="about">
        <AboutSummary />
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="work-with-me">
        <WorkWithMe />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
