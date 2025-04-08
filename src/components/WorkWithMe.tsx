import React, { useEffect, useState } from 'react';

const WorkWithMe = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setOffset(scrollPosition * 0.15);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("/lovable-uploads/136336cb-9a01-4434-9e0d-b44c9a9805bc.png")',
          transform: `translateY(${offset}px)`,
          backgroundAttachment: 'fixed',
        }}
      ></div>

      <div className="container text-center mx-auto relative z-10 px-[25%] max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-brass-mono mb-16 text-white">
          Wil jij jouw ontwikkeling weer laten stromen?
        </h2>
        <p className="text-lg mb-16 font-lucida tracking-wide-50 text-white">
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
