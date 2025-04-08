
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-mensen-beige overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/94488efa-2f4d-4bac-ab6d-f2f60c17547a.png" 
          alt="Sipke Jan Bousema" 
          className="w-full h-full object-cover object-top opacity-80"
        />
        <div className="hero-gradient"></div>
      </div>
      
      <div className="relative z-20 container h-full flex flex-col justify-center">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-brass-mono mb-6">
            Van identiteit tot impact. Van inzicht tot uitvoering.
          </h1>
          <p className="text-lg md:text-xl mb-8 font-lucida tracking-wide-50">
            Ik ben Sipke Jan Bousema – begeleider van ontwikkeling, positionering en presentatie. 
            Ik help mensen en organisaties hun verhaal te vinden, te verwoorden en zichtbaar te maken. 
            Zodat zij krachtiger communiceren, zichtbaarder worden en groeien in wie ze zijn en wat ze betekenen.
          </p>
          <a href="#contact" className="cta-button">
            Plan een kennismaking
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
