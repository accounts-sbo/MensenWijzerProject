import React from 'react';
import { Target, Heart, Sparkles, Quote } from 'lucide-react';

const TrainingIdentityFoundation = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
            Invloedrijk spreken begint bij identiteit
          </h2>
          <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <div className="relative bg-mensen-beige/20 p-6 rounded-lg border-l-2 border-mensen-blue/40">
              <Quote className="absolute top-3 right-3 h-8 w-8 text-mensen-blue/10" />
              <p className="text-base italic text-gray-700 relative z-10">
                "Invloedrijk spreken start niet bij je slides, je stem of je lichaamstaal, maar bij wie jij bent op het podium. Een krachtige bijdrage ontstaat wanneer jouw inhoud, energie en identiteit volledig op één lijn liggen. Mensen onthouden geen perfecte zinnen, maar wel de persoon die hen raakte, inspireerde of wakker schudde."
              </p>
            </div>

            <div className="my-12 bg-mensen-beige/20 p-8 rounded-lg">
              <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
                Identiteit als fundament
              </h3>
              <div className="space-y-4">
                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mb-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    "Een sterke professionele identiteit is geen masker, maar een bewuste keuze om zichtbaar te zijn in je meest authentieke vorm. Drie kernvragen vormen het fundament:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#f58e4f]">
                    <Target className="h-8 w-8 text-[#f58e4f] mb-3" />
                    <p className="font-semibold text-mensen-blue mb-2">Waar sta ik voor</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#f58e4f]">
                    <Heart className="h-8 w-8 text-[#f58e4f] mb-3" />
                    <p className="font-semibold text-mensen-blue mb-2">Wat wil ik dat mensen voelen of meenemen</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#f58e4f]">
                    <Sparkles className="h-8 w-8 text-[#f58e4f] mb-3" />
                    <p className="font-semibold text-mensen-blue mb-2">Welke waarden laat ik zien in mijn gedrag, taal en uitstraling</p>
                  </div>
                </div>

                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mt-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    Wanneer deze kern helder is, ontstaat vanzelf rust, richting en overtuigingskracht. Je voelt stevigheid in jezelf, waardoor je niet langer afhankelijk bent van goedkeuring of applaus. Je staat er als professional met een duidelijke missie — en dát is waar invloed begint."
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 bg-white p-8 rounded-lg border border-mensen-blue/10">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Wat dit in de opleiding betekent
              </h3>
              <p>
                Je werkt aan een stevige, professionele basis: wie ben je als spreker, wat is je kernboodschap, en welke waarde breng jij in de ruimte? Daardoor kun je je publiek niet alleen informeren, maar ook meenemen in herkenning en keuze.
              </p>
            </div>

            <div className="my-12 bg-mensen-blue/5 p-8 rounded-lg">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Wat is invloedrijk spreken in deze opleiding?
              </h3>
              <p className="mb-4">
                Invloedrijk spreken is méér dan "een verhaal vertellen". Het is inhoud + identiteit + verbinding, verpakt in een verhaal dat helder is, raakt en blijft hangen. Je leert je publiek beter lezen: welke (soms onuitgesproken) behoeften, vragen en beslisroutes spelen er, en hoe sluit jouw boodschap daar op aan?
              </p>
              <p>
                Je wordt bovendien actief getraind: veel oefenen, directe feedback én feedforward, zodat je snel stappen maakt. Het doel: van spanning die blokkeert naar spanning die je energie geeft—met meer plezier en controle voor een groep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingIdentityFoundation;

