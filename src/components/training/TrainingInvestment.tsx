import React from 'react';
import { Calendar, Clock, Coffee } from 'lucide-react';

const TrainingInvestment = () => {
  return (
    <section className="py-16 md:py-24 bg-mensen-blue text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-brass-mono mb-6">
              Investering & Praktische informatie
            </h2>
            <div className="h-1 w-20 bg-white/30 mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Calendar className="h-12 w-12 mb-4 text-[#f58e4f]" />
              <h3 className="text-xl font-brass-mono mb-2">Duur</h3>
              <p className="text-lg">4 praktijkdagen</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Clock className="h-12 w-12 mb-4 text-[#f58e4f]" />
              <h3 className="text-xl font-brass-mono mb-2">Studiebelasting</h3>
              <p className="text-lg">Gemiddeld 60 uur</p>
              <p className="text-sm opacity-80">(inclusief lesdagen)</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg border border-white/20">
              <Coffee className="h-12 w-12 mb-4 text-[#f58e4f]" />
              <h3 className="text-xl font-brass-mono mb-2">Inclusief</h3>
              <p className="text-sm">Koffie/thee, water, fris, snacks, vers fruit en luxe lunch</p>
            </div>
          </div>

          <div className="bg-white/10 p-8 rounded-lg border border-white/20">
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Investering</p>
              <p className="text-5xl font-brass-mono text-[#f58e4f]">€ 4.500,-</p>
              <p className="text-sm opacity-80 mt-2">Inclusief alle faciliteiten</p>
            </div>
          </div>

          <div className="mt-12 bg-white/5 p-8 rounded-lg">
            <h3 className="text-2xl font-brass-mono mb-4">Wat kun je verwachten?</h3>
            <p className="text-base leading-relaxed mb-6">
              In deze opleiding nemen we jou in samenwerking met Sipke Jan Bousema mee in de communicatie & psychologie 
              van zowel individuele als groepsprocessen, zodat de spreker vanuit vertrouwen en authenticiteit impact kan maken.
            </p>
            <p className="text-base leading-relaxed">
              Hierdoor kun je ook optimaal gebruik maken van de verschillen binnen een team die juist de groepsidentiteit 
              en branding helder en krachtig op de kaart zetten. Daar is meer voor nodig dan de standaard presentatievaardigheden 
              en technieken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingInvestment;

