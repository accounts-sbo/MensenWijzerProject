import React from 'react';
import { Quote, Pen, User, Compass, Eye, Heart, Users, TrendingUp } from 'lucide-react';

const TrainingSignature = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
            Jouw unieke signatuur en de kracht van verbinding
          </h2>
          <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <div className="relative bg-mensen-beige/20 p-6 rounded-lg border-l-2 border-mensen-blue/40">
              <Quote className="absolute top-3 right-3 h-8 w-8 text-mensen-blue/10" />
              <p className="text-base italic text-gray-700 relative z-10">
                "Iedere professional heeft een eigen signatuur: een unieke combinatie van taal, energie, expertise en persoonlijkheid. Die signatuur is geen trucje, maar een herkenbare manier van zijn die je meeneemt in elke ruimte waar je spreekt."
              </p>
            </div>

            <div className="my-12 bg-mensen-beige/20 p-8 rounded-lg">
              <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
                Jouw unieke signatuur
              </h3>
              <div className="space-y-4">
                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mb-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    "Die signatuur wordt zichtbaar wanneer je:
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                    <Pen className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">Je eigen woorden kiest in plaats van "mooie" woorden</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                    <User className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">Imperfecties inzet als menselijkheid</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm">
                    <Compass className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">Je verhaal koppelt aan je missie</span>
                  </div>
                </div>

                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mt-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    Dat maakt invloedrijk spreken niet alleen krachtig, maar ook onderscheidend. Je wordt niet één van de vele sprekers — je wordt iemand die blijft hangen."
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12">
              <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
                Impact creëren door verbinding
              </h3>
              <div className="space-y-4">
                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mb-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    "Invloedrijke sprekers richten zich niet op overtuigen, maar op verbinden. Ze stellen zichzelf de vraag: Hoe kan mijn identiteit iets betekenen voor deze groep, op dit moment
                  </p>
                </div>

                <p className="mb-6 text-gray-700">
                  Vanuit die intentie ontstaan vanzelf:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-3 bg-mensen-beige/10 p-5 rounded-lg">
                    <Eye className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Aandacht</span>
                  </div>
                  <div className="flex items-start gap-3 bg-mensen-beige/10 p-5 rounded-lg">
                    <Heart className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Vertrouwen</span>
                  </div>
                  <div className="flex items-start gap-3 bg-mensen-beige/10 p-5 rounded-lg">
                    <Users className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Betrokkenheid</span>
                  </div>
                  <div className="flex items-start gap-3 bg-mensen-beige/10 p-5 rounded-lg">
                    <TrendingUp className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Beweging</span>
                  </div>
                </div>

                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mt-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    Wanneer je spreekt vanuit verbinding, wordt je presentatie meer dan informatie. Het wordt een ervaring die mensen raakt, activeert en in beweging zet."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSignature;

