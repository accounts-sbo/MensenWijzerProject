
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
import TrainingPopup from '@/components/TrainingPopup';

const Index = () => {
  const location = useLocation();

  // Scroll to top when navigating to homepage, unless there's a hash (anchor link)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <Hero />
      <TrainingPopup />
      <div id="about">
        <AboutSummary />
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="begeleiding" className="scroll-mt-20">
        <Benefits />
      </div>
      <div id="demensen" className="scroll-mt-20">
        {/* De Mensen Wijzer section can be added here */}
      </div>
      <div id="work-with-me" className="scroll-mt-20">
        <WorkWithMe />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
