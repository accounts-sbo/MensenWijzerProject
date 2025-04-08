
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mensen-blue text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/984b0d56-dca3-47dd-a9ce-443d09d3d896.png" 
              alt="De Mensen Wijzer" 
              className="h-16 mb-6 md:mb-0 bg-white p-1 rounded-md" 
            />
            <span className="font-brass-mono text-white text-lg md:text-xl">DE MENSEN WIJZER</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sipkejanbousema/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-mensen-beige transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-brass-mono text-lg mb-4 text-mensen-beige">Sipke Jan Bousema</h3>
            <p className="font-lucida text-sm text-white/90">
              SJB Media<br />
              KVK: 83567824<br />
              BTW: NL003823618B13
            </p>
          </div>
          
          <div>
            <h3 className="font-brass-mono text-lg mb-4 text-mensen-beige">Locatie Fryslân / Leeuwarden</h3>
            <p className="font-lucida text-sm text-white/90">
              Wyns 39<br />
              9091 BE Wyns<br />
              <a href="tel:+31635345061" className="hover:text-mensen-beige transition-colors">T: +31 6 53 54 50 61</a>
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="font-lucida text-sm text-white/80">
              De Mensen Wijzer is een merk van SJB Media B.V.<br />
              © {currentYear} - Alle rechten voorbehouden
            </p>
            <div className="mt-2 font-lucida text-xs space-x-4">
              <a href="#" className="hover:text-mensen-beige transition-colors">Algemene voorwaarden</a>
              <a href="#" className="hover:text-mensen-beige transition-colors">Privacy Policy</a>
            </div>
            <div className="mt-3 font-lucida text-xs text-white/60">
              Website by Willem van Leunen
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
