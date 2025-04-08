
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
      
      {/* Logo Overlay - positioned above the background image but below the text */}
      <div className="absolute bottom-0 right-0 w-1/2 h-full z-10 flex justify-end items-end opacity-30">
        <img 
          src="/lovable-uploads/1fc0168d-3969-4dbc-927e-e2c58fc3e28e.png" 
          alt="De Mensen Wijzer Logo" 
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
      
      <div className="relative z-20 container h-full flex flex-col justify-center">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl font-brass-mono mb-6">
            Van identiteit tot impact. Van inzicht tot uitvoering.
          </h1>
          <p className="text-base mb-8 font-lucida tracking-wide-50">
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
