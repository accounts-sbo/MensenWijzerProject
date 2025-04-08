
import React from 'react';

const WorkWithMe = () => {
  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url("/uploads/136336cb-9a01-4434-9e0d-b44c9a9805bc.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container text-center mx-auto relative z-10 px-[25%] max-w-5xl">
        <h2 className="text-3xl font-brass-mono mb-4 text-white">
          Wil jij jouw ontwikkeling weer laten stromen?
        </h2>
        <div className="h-1 w-20 bg-white/30 mx-auto mb-8"></div>
        <p className="text-base mb-16 font-lucida tracking-wide-50 text-white">
          Je krijgt begeleiding die leidt tot richting, rust en resultaat. Of het nu gaat om strategie, 
          communicatie of presentatie – ik help je naar een verhaal dat klopt, zichtbaar maakt en impact heeft.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="bg-[#F97316] text-white px-6 py-3 inline-block hover:bg-[#F97316]/80 transition-all duration-200 uppercase tracking-wider text-sm rounded-md">
            Neem contact op
          </a>
          <a href="#contact" className="bg-white text-[#F97316] px-6 py-3 inline-block hover:bg-white/90 transition-all duration-200 uppercase tracking-wider text-sm border border-[#F97316] rounded-md">
            Plan een kennismaking
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMe;
