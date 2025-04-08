
import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-brass-mono mb-10 text-mensen-black">
          Heb je een vraag of wil je kennismaken? Ik denk graag mee.
        </h2>
        
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
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="font-lucida tracking-wide-50 text-base hover:text-mensen-blue">
                  LinkedIn-profiel
                </a>
              </div>
            </div>
          </div>
          
          <div>
            {isSubmitted ? (
              <div className="bg-mensen-beige/30 p-6">
                <p className="text-mensen-black text-base font-lucida tracking-wide-50">
                  Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-lucida text-base">Naam</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mensen-gray/30 focus:outline-none focus:border-mensen-blue font-lucida"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-lucida text-base">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-mensen-gray/30 focus:outline-none focus:border-mensen-blue font-lucida"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-lucida text-base">Bericht</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-mensen-gray/30 focus:outline-none focus:border-mensen-blue font-lucida"
                  />
                </div>
                
                <button type="submit" className="cta-button">
                  Versturen
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
