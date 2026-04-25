import React from 'react';

const RadioInterview = () => {
  return (
    <section className="bg-mensen-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[#b0693d] mb-4">
              Radio-interview
            </p>
            <h2 className="text-3xl md:text-4xl font-brass-mono mb-6 text-mensen-blue">
              De moed hebben om in vertrouwen de volgende stap te zetten.
            </h2>
            <div className="h-1 w-20 bg-[#b0693d]/40 mb-6"></div>
            <p className="text-base text-mensen-gray leading-relaxed mb-6">
              In dit gesprek vertelt Sipke Jan over De Mensen Wijzer, zijn weg ernaartoe
              en de keuze om zijn televisiewerk achter zich te laten. Een persoonlijk
              verhaal over richting, vertrouwen en zichtbaar worden vanuit wie je bent.
            </p>
            <a
              href="#contact"
              className="inline-block text-mensen-blue hover:text-[#b0693d] transition-colors font-brass-mono underline underline-offset-4"
            >
              Ook een volgende stap zetten?
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 md:-inset-6 bg-[#baa99f]/20 rounded-sm"></div>
            <div className="relative overflow-hidden rounded-sm bg-mensen-blue shadow-2xl shadow-mensen-blue/20 transition-transform duration-300 hover:scale-[1.01]">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/RUbDosqphYE"
                title="Radio-interview over De Mensen Wijzer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RadioInterview;
