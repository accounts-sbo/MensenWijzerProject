
import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 black-section">
      <div className="container flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/01c1321b-a916-4211-8466-7603b6607da4.png" 
            alt="Sipke Jan Bousema" 
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-brass-mono mb-8">
            Wat mij beweegt
          </h2>
          <blockquote className="text-xl italic mb-8 font-brass-mono">
            "Soms is alles wat je nodig hebt… een goede wegwijzer."
          </blockquote>
          <div className="space-y-6 font-lucida tracking-wide-50">
            <p>
              Ik ben Sipke Jan Bousema. Als oprichter van De Mensen Wijzer begeleid ik mensen én organisaties 
              in het ontdekken wie ze zijn, waar ze voor staan en hoe ze dat krachtig en betekenisvol kunnen uitdragen.
            </p>
            <p>
              Mijn kracht ligt in het helder krijgen van de essentie. In het stellen van precies de juiste vragen, 
              het aanreiken van rake inzichten en het begeleiden naar de volgende stap – op het gebied van identiteit, 
              communicatie en profilering. Vanuit rust, scherpte en betrokkenheid.
            </p>
            <p>
              Ik help mensen en organisaties om optimaal tot uiting te komen. In wie ze zijn. 
              In wat ze doen. En in hoe ze zich laten zien.
            </p>
            <p>
              Die missie is geworteld in mijn persoonlijke verhaal: van een jeugd vol fascinatie voor media 
              tot een loopbaan als presentator, mediamaker en campagnemaker. Ik heb altijd gewerkt aan verhalen 
              die mensen raken en in beweging brengen. En bovenal: aan communicatie die klopt en bijdraagt aan duurzame groei.
            </p>
            <p>
              De Mensen Wijzer is mijn volgende stap. Het resultaat van jarenlange ervaring in media, onderwijs, 
              strategie en persoonlijke ontwikkeling. En het verlengde van wat mij het meest drijft: mensen en organisaties 
              helpen om op hun eigen manier zichtbaar, krachtig en betekenisvol te zijn.
            </p>
          </div>
          <a href="#contact" className="cta-button mt-8 inline-block">
            Lees meer
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
