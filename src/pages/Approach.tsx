
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkWithMe from '@/components/WorkWithMe';

const Approach = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <div className="py-16 md:py-24 black-section">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <span className="text-mensen-blue text-sm font-brass-mono mb-2 block">Werkwijze</span>
              <h2 className="text-2xl md:text-3xl font-brass-mono mb-8">Hoe ik werk</h2>
              <div className="space-y-6 font-lucida tracking-wide-50">
                <p>
                  Iedere opdracht is uniek en vraagt om een eigen aanpak. Ik pas mijn werkwijze 
                  daarom altijd aan op jouw specifieke situatie en behoeften. Toch is er een 
                  rode draad in mijn aanpak te vinden.
                </p>
                <p>
                  Ik begin altijd met een grondige verkenning. We gaan in gesprek over je
                  doelen, uitdagingen en ambities. Wat wil je bereiken? Wat staat je in de weg?
                  En waar liggen kansen die je nog niet benut?
                </p>
                <p>
                  Vervolgens bepalen we samen welke stappen nodig zijn om je doelen te bereiken.
                  Dat kan in de vorm van adviesgesprekken, trainingen, workshops of begeleiding bij 
                  concrete projecten. Altijd op maat en altijd met aandacht voor wat jij nodig hebt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <WorkWithMe />
      </div>
      <Footer />
    </div>
  );
};

export default Approach;
