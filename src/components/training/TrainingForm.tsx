import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const TrainingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to n8n webhook
      const response = await fetch('https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'training_registration',
          ...formData
        })
      });

      // Try to parse the JSON response
      let result;
      try {
        result = await response.json();
        console.log('Server response data:', result);
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        throw new Error('Kon het serverantwoord niet verwerken');
      }

      // n8n workflow returns {success: true, message: '...'} on success
      // or {success: false, error: '...'} on failure
      if (!result.success) {
        throw new Error(result.error || 'Er is een probleem opgetreden bij het verzenden.');
      }

      toast({
        title: "Aanmelding ontvangen!",
        description: "We nemen zo snel mogelijk contact met je op. Je ontvangt ook een bevestigingsmail.",
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Fout bij verzenden",
        description: "Er is een fout opgetreden. Probeer het later opnieuw of neem direct contact met ons op.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="aanmelden" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
              Schrijf je in
            </h2>
            <div className="h-1 w-20 bg-mensen-blue/30 mb-6 mx-auto"></div>
            <p className="text-lg text-gray-700">
              Interesse in de Training Invloedrijke Spreker? Vul het formulier in en we nemen contact met je op 
              voor meer informatie en beschikbare data.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-mensen-beige/20 p-8 rounded-lg">
            <div>
              <Label htmlFor="name" className="text-mensen-blue font-brass-mono">
                Naam *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2"
                placeholder="Je volledige naam"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-mensen-blue font-brass-mono">
                E-mailadres *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2"
                placeholder="je@email.nl"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-mensen-blue font-brass-mono">
                Telefoonnummer *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-2"
                placeholder="06 12345678"
              />
            </div>

            <div>
              <Label htmlFor="company" className="text-mensen-blue font-brass-mono">
                Organisatie (optioneel)
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="mt-2"
                placeholder="Je organisatie"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-mensen-blue font-brass-mono">
                Bericht (optioneel)
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2"
                rows={4}
                placeholder="Vertel ons iets over je motivatie of stel een vraag..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#f58e4f] text-white hover:bg-[#f58e4f]/80 py-6 text-lg uppercase tracking-wider font-brass-mono disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Bezig met verzenden...' : 'Verstuur aanmelding'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrainingForm;

