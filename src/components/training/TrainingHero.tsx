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
          src="/lovable-uploads/hero-training.png"
          alt="Training Invloedrijke Spreker"
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center -50%' }}
        />
      </div>

      <div className="relative z-20 container min-h-[70vh] flex items-center justify-center py-24">
        <div className="max-w-3xl text-white text-center">
          <h1 className="text-5xl md:text-6xl font-brass-mono mb-6">
            Training Invloedrijke Spreker ©
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-lucida tracking-wide-50 italic">
            Zichtbaar zijn én iets te zeggen hebben
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Wie echt verschil wil maken, moet niet alleen inhoud hebben, maar ook zichtbaar en herkenbaar zijn. Pas wanneer mensen je opmerken én voelen waar je voor staat, blijft je boodschap hangen — en komt er beweging.
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

