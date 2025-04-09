
import React from 'react';

const AboutSummary = () => {
  return (
    <section className="py-16 md:py-24 bg-[#b0693d]">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-brass-mono mb-4 text-white">
            Vanuit de kern naar helderheid. Vanuit wie je bent naar wat je laat zien.
          </h2>
          <div className="h-1 w-20 bg-white/30 mb-6"></div>
          <p className="text-base mb-6 font-lucida tracking-wide-50 text-white">
            Na jaren als presentator, mediamaker en campagnemaker begeleid ik nu mensen en 
            organisaties die willen groeien in hun identiteit, communicatie en presentatie. 
            Mijn kracht ligt in het helder krijgen van wat klopt – en het vervolgens helpen 
            uitdragen met vertrouwen en overtuiging.
          </p>
          <p className="text-base mb-8 font-lucida tracking-wide-50 text-white">
            Ik werk op het snijvlak van strategie, creativiteit en persoonlijke begeleiding. 
            Wat mij drijft is beweging: mensen en merken helpen richting te kiezen en zichtbaar 
            te worden op een manier die past.
          </p>
          <a href="#contact" className="text-white hover:text-white/80 transition-colors font-brass-mono underline">
            Neem contact op →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
