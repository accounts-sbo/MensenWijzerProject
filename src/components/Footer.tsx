
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mensen-beige/30 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/984b0d56-dca3-47dd-a9ce-443d09d3d896.png" 
              alt="De Mensen Wijzer" 
              className="h-16 mb-6 md:mb-0" 
            />
            <span className="font-brass-mono text-mensen-blue text-lg md:text-xl">DE MENSEN WIJZER</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-mensen-blue hover:text-mensen-blue/70 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-mensen-blue hover:text-mensen-blue/70 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-mensen-blue hover:text-mensen-blue/70 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-mensen-gray/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-brass-mono text-lg mb-4">Sipke Jan Bousema</h3>
            <p className="font-lucida text-sm">
              SJB Media<br />
              KVK: 83567824<br />
              BTW: NL003823618B13
            </p>
          </div>
          
          <div>
            <h3 className="font-brass-mono text-lg mb-4">Locatie Fryslân / Leeuwarden</h3>
            <p className="font-lucida text-sm">
              Wyns 39<br />
              9091 BE Wyns<br />
              <a href="tel:+31635345061" className="hover:text-mensen-blue">T: +31 6 53 54 50 61</a>
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="font-lucida text-sm text-mensen-gray">
              De Mensen Wijzer © {currentYear} - Alle rechten voorbehouden
            </p>
            <div className="mt-2 font-lucida text-xs space-x-4">
              <a href="#" className="hover:text-mensen-blue">Algemene voorwaarden</a>
              <a href="#" className="hover:text-mensen-blue">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
