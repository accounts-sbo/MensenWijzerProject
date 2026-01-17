import React from 'react';
import { Check } from 'lucide-react';

const TrainingBenefits = () => {
  const benefits = [
    "een sterke, authentieke en herkenbare sprekersidentiteit neerzetten",
    "sneller verbinding en aandacht creëren in groepen",
    "inhoud ombouwen tot een inspirerend verhaal dat blijft plakken",
    "taal, stem, energie en non-verbaal gedrag bewuster inzetten",
    "soepeler omgaan met vragen, kritiek en weerstand",
    "met minder voorbereiding toch krachtig improviseren en anticiperen"
  ];

  const questions = [
    "Hoe bereid ik me efficiënt en scherp voor?",
    "Hoe formuleer ik een kernboodschap die blijft hangen?",
    "Hoe open ik sterk en houd ik aandacht vast?",
    "Hoe ga ik om met presentatieangst en stress?",
    "Hoe ontwikkel ik een krachtige, unieke identiteit als spreker?",
    "Hoe zet ik lichaamstaal en stemgebruik ondersteunend in?",
    "Hoe reageer ik op vragen, weerstand en kritiek?",
    "Hoe maak ik visueel en inhoudelijk een presentatie die boeit?"
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
            <p className="text-lg text-gray-700 mb-8">
              Na deze opleiding kun je onder andere:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <Check className="h-6 w-6 text-[#f58e4f] mr-4 flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
              Wat kun je verwachten?
            </h3>
            <p className="text-base leading-relaxed text-gray-700">
              Een intensieve, praktische opleiding waarin je presentatieskills, psychologie van groepsdynamiek en jouw professionele identiteit samenbrengt. Je leert impact maken vanuit vertrouwen en echtheid, en je ontdekt hoe je verschillen in teams kunt benutten in plaats van glad te strijken.
            </p>
          </div>

          <div className="bg-mensen-blue/5 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
              Wat is de meerwaarde — welke vragen worden beantwoord?
            </h3>
            <p className="text-base text-gray-700 mb-4">Onder andere:</p>
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#f58e4f] mr-3 font-bold">•</span>
                  <span className="text-base text-gray-700">{question}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;

