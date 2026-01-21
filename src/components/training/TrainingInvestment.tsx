import React from 'react';
import { Calendar, Clock, Coffee, MapPin } from 'lucide-react';

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

          {/* Data en Locatie */}
          <div className="mb-12 bg-white/10 p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-brass-mono mb-6">Data & Locatie</h3>

            {/* Training Voorjaar */}
            <div className="mb-8">
              <h4 className="text-xl font-brass-mono mb-4 text-[#f58e4f]">Training voorjaar</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-base font-brass-mono mb-3">Trainingsdagen 2026</h5>
                      <ul className="space-y-2 text-base">
                        <li>• Vrijdag 6 februari 2026</li>
                        <li>• Vrijdag 13 maart 2026</li>
                        <li>• Vrijdag 17 april 2026</li>
                        <li>• Vrijdag 22 mei 2026</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-base font-brass-mono mb-3">Locatie</h5>
                      <p className="text-base">Naarden-Vesting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/20 mb-8"></div>

            {/* Training Najaar */}
            <div>
              <h4 className="text-xl font-brass-mono mb-4 text-[#f58e4f]">Training najaar</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-base font-brass-mono mb-3">Trainingsdagen 2026</h5>
                      <ul className="space-y-2 text-base">
                        <li>• Vrijdag 11 september 2026</li>
                        <li>• Vrijdag 16 oktober 2026</li>
                        <li>• Vrijdag 13 november 2026</li>
                        <li>• Vrijdag 11 december 2026</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="text-base font-brass-mono mb-3">Locatie</h5>
                      <p className="text-base">Naarden-Vesting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <p className="text-sm opacity-80 mt-2">Inclusief 21% BTW</p>
              <p className="text-xs opacity-60 mt-1">€ 3.719,- excl. btw</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingInvestment;

