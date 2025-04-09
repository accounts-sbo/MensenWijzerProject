
import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (formError) setFormError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      // Using the correct HTTPS URL
      const response = await fetch('https://contact.demensenwijzer.nl/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'cors', // Explicitly set CORS mode
      });
      
      if (!response.ok) {
        // If the server responded with an error
        const errorText = await response.text();
        throw new Error(`Server responded with ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Bericht verzonden",
          description: "Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Er is iets misgegaan');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      let errorMessage = "Er is iets misgegaan bij het verzenden van je bericht.";
      
      // Check if it's a CORS error (they often don't have specific error messages we can catch)
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        setFormError("Verbindingsfout: De server is mogelijk niet bereikbaar. Als alternatief kun je direct mailen naar sipkejan@demensenwijzer.nl");
      } else {
        setFormError(`Fout: ${errorMessage} Probeer het later nog eens of stuur direct een email.`);
        
        toast({
          title: "Fout",
          description: errorMessage,
          variant: "destructive",
        });
      }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-brass-mono mb-4 text-mensen-blue">Stuur een bericht</h3>
            
            {formError && (
              <Alert variant="destructive" className="mb-4">
                <AlertTitle>Probleem met verzenden</AlertTitle>
                <AlertDescription>{formError}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Naam
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full focus:ring-mensen-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mailadres
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full focus:ring-mensen-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bericht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full focus:ring-mensen-blue"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-mensen-blue text-white px-6 py-3 rounded-md hover:bg-mensen-blue/80 transition-all duration-200 disabled:opacity-50 w-full md:w-auto"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="text-mensen-blue" />
              <a href="mailto:sipkejan@demensenwijzer.nl" className="font-lucida tracking-wide-50 text-base hover:text-mensen-blue">
                sipkejan@demensenwijzer.nl
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
