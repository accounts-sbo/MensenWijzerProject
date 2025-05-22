
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const ServiceCard = ({
  title,
  intro,
  bullets,
  elevator
}: {
  title: string;
  intro: string;
  bullets: string[];
  elevator: string;
}) => {
  return <div className="bg-white/10 border border-white/20 rounded-md p-6 h-full flex flex-col justify-between transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg">
      <div>
        <h3 className="text-2xl font-brass-mono mb-4">{title}</h3>
        <p className="text-base mb-4 opacity-90">{intro}</p>
        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, index) => <li key={index} className="text-base flex items-start">
              <ChevronRight className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
              <span>{bullet}</span>
            </li>)}
        </ul>
      </div>
      <p className="text-sm italic text-white/80 mt-4">{elevator}</p>
    </div>;
};

const MeetingCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return <div className="bg-white/10 border border-white/20 rounded-md p-6 h-full flex flex-col transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg">
      <h3 className="text-2xl font-brass-mono mb-4 text-white">{title}</h3>
      <p className="text-base font-lucida tracking-wide-50 text-white/90">{description}</p>
    </div>;
};

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      {/* What I Do Section */}
      <section className="bg-mensen-blue py-16 md:py-24 text-white">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-brass-mono mb-4 text-white">
              Wat ik doe
            </h2>
            <div className="h-1 w-20 bg-white/30 mb-6"></div>
            <p className="text-base text-white/80">
              Diensten die helpen bij het vinden en uitdragen van jouw authentieke verhaal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Identiteit & Merkontwikkeling" intro="Sterke communicatie begint met een helder verhaal." bullets={["Merkpositionering en kernverhaal", "Merkarchitectuur en identiteitstrajecten", "Creatieve formats en merkactivatie"]} elevator="Ik help organisaties en initiatieven om te ontdekken wie ze zijn, waar ze voor staan en hoe ze dat krachtig uitdragen. Met een merkverhaal dat klopt, onderscheidt en richting geeft – van binnenuit en naar buiten toe." />

            <ServiceCard title="Communicatie- & Mediastrategie" intro="Van strategie tot zichtbaarheid." bullets={["Communicatiestrategieën en kernboodschappen", "Mediaplanning en zichtbaarheid", "Contentformats en campagnes"]} elevator="Ik ontwikkel strategieën die inhoud verbinden met impact. Van merkverhaal tot media-aanpak en campagnes die informeren, inspireren én activeren – altijd met oog voor maatschappelijke relevantie en effect." />

            <ServiceCard title="Presentatie & Profilering" intro="Laat zien wie je bent – met rust, overtuiging en authenticiteit." bullets={["Presentatie-, interview- en gesprekstraining", "Storytelling en profilering", "Coaching voor leiders en teams"]} elevator="Ik help mensen om met meer kracht en vertrouwen hun verhaal te vertellen. Vanuit authenticiteit en verbinding werken we aan uitstraling, spreekvaardigheid en échte impact." />
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="bg-[#b0693d] py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-brass-mono mb-4 text-white">
              Voor bijeenkomsten, teams en trajecten waarin richting en verbinding nodig is
            </h2>
            <div className="h-1 w-20 bg-white/30 mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <MeetingCard title="Conceptontwikkeling" description="Strategische formats en creatieve concepten voor merken, campagnes en programma's – afgestemd op doelgroep, toon en doel." />
            <MeetingCard title="Dagvoorzitterschap & Presentatie" description="Professionele begeleiding van bijeenkomsten, talks of events. Inhoudelijk sterk, betrokken en afgestemd op het moment én de mensen in de zaal." />
            <MeetingCard title="Procesbegeleiding & Gespreksleiding" description="Voor teams en samenwerkingen die willen ontwikkelen of optimaliseren. Met aandacht, structuur en de juiste vragen breng ik helderheid en beweging." />
          </div>
          
          <div className="mt-12 text-center">
            <Button onClick={() => scrollToSection('contact')} className="bg-white text-[#b0693d] hover:bg-white/90 px-8 py-6 text-base uppercase tracking-wider font-brass-mono">PLAN EEN KENNISMAKING</Button>
          </div>
        </div>
      </section>
    </>;
};
export default Services;
