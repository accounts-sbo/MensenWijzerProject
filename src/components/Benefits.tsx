
import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "Een verhaal dat klopt – in wie je bent en wat je uitdraagt",
    "Strategie die richting geeft en keuzes verscherpt",
    "Zichtbaarheid die past bij jouw stijl, toon en doelgroep",
    "Meer rust, overtuiging en zelfvertrouwen in hoe je presenteert",
    "Creatieve ideeën die mensen raken én activeren"
  ];

  return (
    <section className="py-16 md:py-24 beige-section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-brass-mono mb-10 text-mensen-black text-center">
          Samen brengen we dit voor je in beweging
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="text-mensen-blue mt-1">
                  <Check size={20} />
                </div>
                <p className="font-lucida tracking-wide-50 text-lg">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
