
import React from 'react';

const WorkWithMe = () => {
  return (
    <section 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/lovable-uploads/136336cb-9a01-4434-9e0d-b44c9a9805bc.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container text-center max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-brass-mono mb-10 text-white">
          Wil jij jouw ontwikkeling weer laten stromen?
        </h2>
        <p className="text-lg mb-10 font-lucida tracking-wide-50 text-white">
          Je krijgt begeleiding die leidt tot richting, rust en resultaat. Of het nu gaat om strategie, 
          communicatie of presentatie – ik help je naar een verhaal dat klopt, zichtbaar maakt en impact heeft.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="cta-button">
            Neem contact op
          </a>
          <a href="#contact" className="cta-button">
            Plan een kennismaking
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
