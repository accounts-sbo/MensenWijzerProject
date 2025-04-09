
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Send } from 'lucide-react';
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
  const [useDirectEmail, setUseDirectEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing again
    if (formError) setFormError(null);
  };

  const sendServerEmail = async () => {
    try {
      setIsSubmitting(true);
      
      // Using the new URL provided by the user
      const response = await fetch('https://contact.demensenwijzer.nl/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Er is een probleem opgetreden bij het verzenden.');
      }
      
      toast({
        title: "Bericht verzonden",
        description: "Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
      return true;
    } catch (error) {
      console.error("Error sending email:", error);
      setFormError("Er is een probleem opgetreden bij het verzenden. Probeer de directe e-mail optie.");
      setUseDirectEmail(true);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Contact via demensenwijzer.nl van ${formData.name}`);
    const body = encodeURIComponent(`Naam: ${formData.name}\nE-mail: ${formData.email}\n\nBericht:\n${formData.message}`);
    window.location.href = `mailto:sipkejan@demensenwijzer.nl?subject=${subject}&body=${body}`;
    
    toast({
      title: "E-mailclient geopend",
      description: "Je e-mailclient is geopend om direct contact op te nemen.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (useDirectEmail) {
      openEmailClient();
    } else {
      const success = await sendServerEmail();
      if (success) {
        // Form was successfully submitted via server
        return;
      }
    }
  };

  const handleSwitchToDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    setUseDirectEmail(true);
    toast({
      title: "Direct e-mail optie geactiveerd",
      description: "Je kunt nu direct via je e-mailclient contact opnemen.",
    });
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
                <AlertTitle>Fout</AlertTitle>
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
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-mensen-blue text-white px-6 py-3 rounded-md hover:bg-mensen-blue/80 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Verzenden..."
                  ) : useDirectEmail ? (
                    <>
                      <Mail className="h-4 w-4" />
                      Via e-mail
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Versturen
                    </>
                  )}
                </Button>
                
                {!useDirectEmail && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSwitchToDirectEmail}
                    className="border-mensen-blue text-mensen-blue hover:bg-mensen-blue/10"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Direct via e-mail
                  </Button>
                )}
              </div>
              
              {useDirectEmail && (
                <div className="text-sm text-gray-500 pt-2">
                  <p className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2 inline" />
                    Dit opent je e-mailprogramma om direct te mailen
                  </p>
                </div>
              )}
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
