
import React from 'react';

const ServiceCard = ({ title, intro, bullets, elevator }: { 
  title: string; 
  intro: string; 
  bullets: string[];
  elevator: string;
}) => {
  return (
    <div className="service-card">
      <div>
        <h3 className="font-brass-mono">{title}</h3>
        <p className="mb-4 text-sm">{intro}</p>
        <ul className="space-y-3 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm">{bullet}</li>
          ))}
        </ul>
      </div>
      <p className="text-xs italic">{elevator}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-brass-mono mb-12 text-mensen-black">
          Wat ik doe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Identiteit & Merkontwikkeling"
            intro="Sterke communicatie begint met een helder verhaal."
            bullets={[
              "Merkpositionering en kernverhaal",
              "Merkarchitectuur en identiteitstrajecten",
              "Creatieve formats en merkactivatie"
            ]}
            elevator="Ik help organisaties en initiatieven om te ontdekken wie ze zijn, waar ze voor staan en hoe ze dat krachtig uitdragen. Met een merkverhaal dat klopt, onderscheidt en richting geeft – van binnenuit en naar buiten toe."
          />

          <ServiceCard
            title="Communicatie- & Mediastrategie"
            intro="Van strategie tot zichtbaarheid."
            bullets={[
              "Communicatiestrategieën en kernboodschappen",
              "Mediaplanning en zichtbaarheid",
              "Contentformats en campagnes"
            ]}
            elevator="Ik ontwikkel strategieën die inhoud verbinden met impact. Van merkverhaal tot media-aanpak en campagnes die informeren, inspireren én activeren – altijd met oog voor maatschappelijke relevantie en effect."
          />

          <ServiceCard
            title="Presentatie & Profilering"
            intro="Laat zien wie je bent – met rust, overtuiging en authenticiteit."
            bullets={[
              "Presentatietraining",
              "Storytelling en profilering",
              "Coaching voor leiders en teams"
            ]}
            elevator="Ik help mensen om met meer kracht en vertrouwen hun verhaal te vertellen. Vanuit authenticiteit en verbinding werken we aan uitstraling, spreekvaardigheid en échte impact."
          />
        </div>

        <div className="section-divider"></div>

        <h2 className="text-2xl md:text-3xl font-brass-mono mb-8 text-mensen-black">
          Voor bijeenkomsten, teams en trajecten waarin richting en verbinding nodig is
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-brass-mono mb-4 text-mensen-blue">Conceptontwikkeling</h3>
            <p className="font-lucida tracking-wide-50">
              Strategische formats en creatieve concepten voor merken, campagnes en programma's – afgestemd op doelgroep, toon en doel.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-brass-mono mb-4 text-mensen-blue">Dagvoorzitterschap & Presentatie</h3>
            <p className="font-lucida tracking-wide-50">
              Professionele begeleiding van bijeenkomsten, talks of events. Inhoudelijk sterk, betrokken en afgestemd op het moment én de mensen in de zaal.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-brass-mono mb-4 text-mensen-blue">Procesbegeleiding & Gespreksleiding</h3>
            <p className="font-lucida tracking-wide-50">
              Voor teams en samenwerkingen die willen ontwikkelen of optimaliseren. Met aandacht, structuur en de juiste vragen breng ik helderheid en beweging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
