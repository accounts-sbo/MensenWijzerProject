
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, ExternalLink, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
      console.log('Sending email with data:', formData);
      
      // Using the new URL provided by the user
      const response = await fetch('https://contact.demensenwijzer.nl/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Server response status:', response.status);
      
      // Try to parse the JSON response
      let data;
      try {
        data = await response.json();
        console.log('Server response data:', data);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Kon het serverantwoord niet verwerken');
      }
      
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
        <div className="h-1 w-20 bg-mensen-beige mb-6"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {/* Contact Form */}
          <Card className="border-mensen-beige/30 shadow-md">
            <CardHeader className="pb-2 border-b border-mensen-beige/20">
              <CardTitle className="text-xl font-brass-mono text-mensen-blue">Stuur een bericht</CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6">
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
                    className="w-full border-mensen-beige/40 focus:border-mensen-blue focus:ring-mensen-blue"
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
                    className="w-full border-mensen-beige/40 focus:border-mensen-blue focus:ring-mensen-blue"
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
                    className="w-full border-mensen-beige/40 focus:border-mensen-blue focus:ring-mensen-blue resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-mensen-blue hover:bg-mensen-blue/80 text-white transition-all duration-200 flex items-center justify-center gap-2"
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
                      className="border-mensen-beige bg-mensen-beige/10 text-mensen-blue hover:bg-mensen-beige/20"
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
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-mensen-beige/30 shadow-sm bg-gradient-to-br from-white to-mensen-beige/10">
              <CardHeader className="pb-2 border-b border-mensen-beige/20">
                <CardTitle className="text-xl font-brass-mono text-mensen-blue">Contactgegevens</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-8 pt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-mensen-beige/20 p-3 rounded-full">
                    <Mail className="text-mensen-blue h-5 w-5" />
                  </div>
                  <a href="mailto:sipkejan@demensenwijzer.nl" className="font-lucida tracking-wide-50 text-base hover:text-mensen-beige transition-colors">
                    sipkejan@demensenwijzer.nl
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-mensen-beige/20 p-3 rounded-full">
                    <Phone className="text-mensen-blue h-5 w-5" />
                  </div>
                  <a href="tel:+31635345061" className="font-lucida tracking-wide-50 text-base hover:text-mensen-beige transition-colors">
                    +31 6 53 54 50 61
                  </a>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-mensen-beige/20 p-3 rounded-full">
                    <Linkedin className="text-mensen-blue h-5 w-5" />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/sipkejanbousema/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-lucida tracking-wide-50 text-base hover:text-mensen-beige transition-colors"
                  >
                    LinkedIn-profiel
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
