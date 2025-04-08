
import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[30%] -mt-16 md:-mt-24 -mb-16 md:-mb-24">
          <img 
            src="/lovable-uploads/bdfac387-5ddd-4dd1-8d53-f573fa83f5b9.png" 
            alt="Sipke Jan Bousema" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="md:w-[70%] px-4 md:px-8">
          <h2 className="text-3xl font-brass-mono mb-4 text-mensen-black">
            Wat mij beweegt
          </h2>
          <div className="h-1 w-20 bg-mensen-beige/30 mb-6"></div>
          <blockquote className="text-xl italic mb-8 font-brass-mono text-[#f58e4f]">
            "Soms is alles wat je nodig hebt… een goede wegwijzer."
          </blockquote>
          <div className="space-y-6 font-lucida tracking-wide-50 text-mensen-black">
            <p className="text-base">
              Ik ben Sipke Jan Bousema. Als oprichter van De Mensen Wijzer begeleid ik mensen én organisaties 
              in het ontdekken wie ze zijn, waar ze voor staan en hoe ze dat krachtig en betekenisvol kunnen uitdragen.
            </p>
            <p className="text-base">
              Mijn kracht ligt in het helder krijgen van de essentie. In het stellen van precies de juiste vragen, 
              het aanreiken van rake inzichten en het begeleiden naar de volgende stap – op het gebied van identiteit, 
              communicatie en profilering. Vanuit rust, scherpte en betrokkenheid.
            </p>
            <p className="text-base">
              Ik help mensen en organisaties om optimaal tot uiting te komen. In wie ze zijn. 
              In wat ze doen. En in hoe ze zich laten zien.
            </p>
            <p className="text-base">
              Die missie is geworteld in mijn persoonlijke verhaal: van een jeugd vol fascinatie voor media 
              tot een loopbaan als presentator, mediamaker en campagnemaker. Ik heb altijd gewerkt aan verhalen 
              die mensen raken en in beweging brengen. En bovenal: aan communicatie die klopt en bijdraagt aan duurzame groei.
            </p>
            <p className="text-base">
              De Mensen Wijzer is mijn volgende stap. Het resultaat van jarenlange ervaring in media, onderwijs, 
              strategie en persoonlijke ontwikkeling. En het verlengde van wat mij het meest drijft: mensen en organisaties 
              helpen om op hun eigen manier zichtbaar, krachtig en betekenisvol te zijn.
            </p>
          </div>
          <a href="#contact" className="bg-mensen-blue hover:bg-mensen-blue/80 text-white px-6 py-3 inline-block transition-all duration-200 uppercase tracking-wider text-sm mt-8">
            Lees meer
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
