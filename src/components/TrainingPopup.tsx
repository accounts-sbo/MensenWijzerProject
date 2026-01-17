import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TrainingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('trainingPopupShown');

    if (!popupShown) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('trainingPopupShown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    setIsVisible(false);
    navigate('/training');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-2xl w-full pointer-events-auto animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
            aria-label="Sluit popup"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="relative">
            {/* Image */}
            <div className="relative h-64 overflow-hidden rounded-t-lg">
              <img
                src="/lovable-uploads/WhatsApp Image 2026-01-08 at 08.49.04.jpeg"
                alt="Training Invloedrijke Spreker"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h2 className="text-3xl font-brass-mono mb-2">
                  Training Invloedrijke Spreker ©
                </h2>
                <p className="text-lg italic">
                  Zichtbaarheid is de sleutel tot herkenning
                </p>
              </div>
            </div>

            {/* Text content */}
            <div className="p-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Leer invloedrijk spreken en maak een blijvende indruk. In deze 4-daagse training ontwikkel je
                een krachtige, authentieke presentatie-identiteit en leer je spreken met vertrouwen en overtuiging.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-mensen-beige/30 p-4 rounded">
                  <p className="font-brass-mono text-mensen-blue mb-1">Duur</p>
                  <p className="text-gray-700">4 praktijkdagen</p>
                </div>
                <div className="bg-mensen-beige/30 p-4 rounded">
                  <p className="font-brass-mono text-mensen-blue mb-1">Investering</p>
                  <p className="text-gray-700">€ 4.500,-</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleCTAClick}
                  className="flex-1 bg-[#f58e4f] text-white hover:bg-[#f58e4f]/80 py-6 text-base uppercase tracking-wider font-brass-mono"
                >
                  Meer informatie
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="px-6 py-6 text-base border-gray-300 hover:bg-gray-50"
                >
                  Sluiten
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingPopup;

