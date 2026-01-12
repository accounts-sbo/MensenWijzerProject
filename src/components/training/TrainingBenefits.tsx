import React from 'react';
import { Check } from 'lucide-react';

const TrainingBenefits = () => {
  const benefits = [
    "Je creëert een krachtige authentieke en onderscheidende presentatie identiteit.",
    "Je hebt de aandacht van de groep door de krachtige verbinding die je maakt.",
    "Je weet van de kennis die je overdraagt een interessant en inspirerend verhaal te maken.",
    "Je beheerst de kracht van taal en kunt hiermee positieve invloed uitoefenen.",
    "Je weet energie, stemgebruik en non-verbale ondersteuning doeltreffend in te zetten.",
    "Je kunt spreken uit de losse pols en bent expert in het anticiperen."
  ];

  const questions = [
    "Hoe bereid ik me goed voor op een presentatie?",
    "Hoe bepaal ik mijn kernboodschap?",
    "Hoe zorg ik voor een goede opening?",
    "Hoeveel tijd moet ik besteden aan de voorbereiding?",
    "Hoe houd ik mijn publiek betrokken?",
    "Hoe ga ik om met presentatieangst?",
    "Hoe creëer ik een unieke en krachtige identiteit?",
    "Hoe gebruik ik mijn lichaamstaal effectief?",
    "Hoe ga ik om met vragen uit het publiek?",
    "Hoe ga ik om met weerstand?",
    "Hoe maak ik een goede visuele presentatie?",
    "Hoe zorg ik ervoor dat mijn presentatie boeiend blijft en maak in een onvergetelijke impact?"
  ];

  return (
    <section className="py-16 md:py-24 bg-mensen-beige">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
              Wat levert het op?
            </h2>
            <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-[#f58e4f] mr-4 flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-3xl font-brass-mono mb-6 text-mensen-blue">
              Je krijgt antwoord op deze vragen:
            </h3>
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#f58e4f] mr-3 font-bold">•</span>
                  <span className="text-base text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 bg-mensen-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-brass-mono mb-4">
              Wat kun je verwachten van deze opleiding?
            </h3>
            <p className="text-base leading-relaxed">
              In deze opleiding nemen we jou mee in de communicatie & psychologie van zowel individuele als groepsprocessen, zodat de spreker vanuit vertrouwen en authenticiteit impact kan maken. Hierdoor kun je ook optimaal gebruik maken van de verschillen binnen een team die juist de groepsidentiteit en branding helder en krachtig op de kaart zetten. Daar is meer voor nodig dan de standaard presentatievaardigheden en technieken.
            </p>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
              Hoe kun jij met een invloedrijke communicatie en psychologie volledig en ontspannen jezelf zijn op het podium en impact maken?
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Technieken zijn hier dan een ondersteunende in plaats van een leidende factor. Je leert hierdoor optimaal anticiperen en je kunt dan ook makkelijk afstemmen op je doelgroep.
            </p>
          </div>

          <div className="mt-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-brass-mono text-mensen-blue italic">
              "Zonder zichtbaarheid blijf je onopgemerkt – pas als je opvalt én iets te zeggen hebt, blijf je écht bij."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;

