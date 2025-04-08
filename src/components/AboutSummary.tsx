
import React from 'react';

const AboutSummary = () => {
  return (
    <section className="py-16 md:py-24 beige-section">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-brass-mono mb-8 text-mensen-black">
            Vanuit de kern naar helderheid. Vanuit wie je bent naar wat je laat zien.
          </h2>
          <p className="text-lg mb-6 font-lucida tracking-wide-50">
            Na jaren als presentator, mediamaker en campagnemaker begeleid ik nu mensen en 
            organisaties die willen groeien in hun identiteit, communicatie en presentatie. 
            Mijn kracht ligt in het helder krijgen van wat klopt – en het vervolgens helpen 
            uitdragen met vertrouwen en overtuiging.
          </p>
          <p className="text-lg mb-8 font-lucida tracking-wide-50">
            Ik werk op het snijvlak van strategie, creativiteit en persoonlijke begeleiding. 
            Wat mij drijft is beweging: mensen en merken helpen richting te kiezen en zichtbaar 
            te worden op een manier die past.
          </p>
          <button className="text-mensen-blue hover:text-mensen-blue/80 transition-colors font-brass-mono underline">
            Lees mijn verhaal →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSummary;
