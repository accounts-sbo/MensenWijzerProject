
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-mensen-beige/10">
      <div className="container">
        <h2 className="text-3xl font-brass-mono mb-4 text-mensen-blue">
          Heb je een vraag of wil je kennismaken? Ik denk graag mee.
        </h2>
        <div className="h-1 w-20 bg-mensen-blue/30 mb-6"></div>
        
        <div className="flex flex-col items-center">
          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <Mail className="text-mensen-blue" />
              <a href="mailto:sipkejan@sjbmedia.nl" className="font-lucida tracking-wide-50 text-base hover:text-mensen-blue">
                sipkejan@sjbmedia.nl
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="text-mensen-blue" />
              <a href="tel:+31635345061" className="font-lucida tracking-wide-50 text-base hover:text-mensen-blue">
                +31 6 53 54 50 61
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Linkedin className="text-mensen-blue" />
              <a href="https://www.linkedin.com/in/sipkejanbousema/" target="_blank" rel="noopener noreferrer" className="font-lucida tracking-wide-50 text-base hover:text-mensen-blue">
                LinkedIn-profiel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
