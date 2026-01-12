import React from 'react';
import { Button } from '@/components/ui/button';

const TrainingHero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('aanmelden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] w-full bg-mensen-blue overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/WhatsApp Image 2026-01-08 at 08.49.04.jpeg"
          alt="Training Invloedrijke Spreker"
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>
      
      <div className="relative z-20 container h-full flex flex-col justify-center py-24">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-brass-mono mb-6">
            Training Invloedrijke Spreker ©
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-lucida tracking-wide-50 italic">
            Zichtbaarheid is de sleutel tot herkenning,<br />
            wie impact wil maken, moet beide laten zien.
          </p>
          <p className="text-lg mb-8 max-w-2xl">
            Zodra je jezelf kunt identificeren – dat wil zeggen: weet wie je bent, waar je voor staat en welke waarde je kunt toevoegen – <strong>bén</strong> je het verschil dat het grote verschil maakt.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-[#f58e4f] text-white px-8 py-6 text-lg hover:bg-[#f58e4f]/80 transition-all duration-200 uppercase tracking-wider font-brass-mono"
          >
            Schrijf je in
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;

