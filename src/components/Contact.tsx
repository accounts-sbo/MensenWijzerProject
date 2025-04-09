
import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Formspree formulier URL
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgvareae";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorDetails(null);
    
    try {
      console.log("Verzenden van formulier naar Formspree begonnen met gegevens:", formData);
      
      // Stuur het formulier naar Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      
      const data = await response.json();
      console.log("Formspree response status:", response.status);
      console.log("Formspree response:", data);
      
      if (!response.ok) {
        throw new Error(`Formspree antwoordde met status: ${response.status} - ${JSON.stringify(data)}`);
      }
      
      console.log("Formulier succesvol verzonden! Response:", data);

      // Toon succesbericht
      toast({
        title: "Bericht verzonden",
        description: "Je bericht is succesvol verzonden.",
      });
      
      // Reset formulier en toon successtatus
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending form:', error);
      // Log meer gedetailleerde informatie over de fout
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        setErrorDetails(error.message);
      }
      
      toast({
        title: "Fout bij verzenden",
        description: "Er ging iets mis bij het verzenden van je bericht. Probeer het later opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-mensen-beige/10">
      <div className="container">
        <h2 className="text-3xl font-brass-mono mb-4 text-mensen-blue">
          Heb je een vraag of wil je kennismaken? Ik denk graag mee.
        </h2>
        <div className="h-1 w-20 bg-mensen-blue/30 mb-6"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
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
          
          <div>
            {isSubmitted ? (
              <div className="bg-mensen-blue/10 p-8 rounded-md text-center">
                <h3 className="text-mensen-blue text-xl font-brass-mono mb-3">Bedankt voor je bericht!</h3>
                <p className="text-mensen-blue text-base font-lucida tracking-wide-50">
                  Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-lucida text-base text-mensen-blue">Naam</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mensen-blue/30 focus:outline-none focus:border-mensen-blue font-lucida rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-lucida text-base text-mensen-blue">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mensen-blue/30 focus:outline-none focus:border-mensen-blue font-lucida rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-lucida text-base text-mensen-blue">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-mensen-blue/30 focus:outline-none focus:border-mensen-blue font-lucida rounded-md"
                  />
                </div>
                
                {errorDetails && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    <p>Technische foutmelding (voor ontwikkelaars):</p>
                    <code className="block mt-1 whitespace-pre-wrap">{errorDetails}</code>
                  </div>
                )}
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#F97316] text-white px-6 py-3 inline-block hover:bg-[#F97316]/80 transition-all duration-200 uppercase tracking-wider text-sm rounded-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Bezig met verzenden..." : "Versturen"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
