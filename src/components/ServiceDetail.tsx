
import React from 'react';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

const ServiceDetail = ({ title, subtitle, description, imageSrc }: ServiceDetailProps) => {
  return (
    <section className="py-16 md:py-24 black-section">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-[40%] md:-mt-24 md:-mb-24">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="md:w-[60%] px-4 md:px-8">
          <span className="text-mensen-blue text-sm font-brass-mono mb-2 block">{subtitle}</span>
          <h2 className="text-2xl md:text-3xl font-brass-mono mb-8">
            {title}
          </h2>
          <p className="text-lg mb-8 font-lucida tracking-wide-50">
            {description}
          </p>
          <div className="space-y-6 font-lucida tracking-wide-50">
            <h3 className="text-xl font-brass-mono">Wat ik kan bieden:</h3>
            <ul className="space-y-4 list-disc pl-6">
              <li>Identiteitsworkshops voor teams en organisaties</li>
              <li>Brand story ontwikkeling</li>
              <li>Positionering en merkstrategie</li>
              <li>Begeleiding van branding trajecten</li>
              <li>Merkarchitectuur</li>
            </ul>
          </div>
          <a href="#contact" className="cta-button mt-8 inline-block">
            Neem contact op
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
