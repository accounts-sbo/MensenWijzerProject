
import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image?: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Willem Brethouwer",
    role: "",
    quote: "Uit eigen ervaring kan ik bevestigen dat Sipke Jan pure professionals zijn. Aanrader als je business for good nastreeft en je maatschappelijk hart sneller wilt laten kloppen!",
  },
  {
    id: 2,
    name: "Stephan Berger",
    role: "Projectmedewerker Onderwijs bij AFÛK",
    quote: "De samenwerking verliep erg goed. Sipke Jan is iemand die zelf met goede ideeën komt, altijd voor dat beetje extra wil gaan, en open staat voor onze inbreng. De reacties zijn goed en we hebben het nu zelfs geïmplementeerd in een project voor de eerste klas.",
  },
  {
    id: 3,
    name: "C.E.J. Hoekman",
    role: "",
    quote: "Onuitsprekelijk mooi!",
  },
  {
    id: 4,
    name: "Drs. Sjors Klompmaker",
    role: "Arts-onderzoeker Amsterdam UMC (afdeling Chirurgie)",
    quote: "Door de professionele en creatieve aanpak van Sipke Jan is onze boodschap nu vertaald naar 3 prachtige patient-journey video's. Sipke Jan is inmiddels gespecialiseerd in patiënt-video's, wat ontzettend veel helpt in de voorbereiding en uitvoering van de opnames en fijn is voor de patiënten die een rol spelen. Wij zijn blij met het eindresultaat en kijken uit naar verdere samenwerking in de toekomst!",
  },
  {
    id: 5,
    name: "Dr. Herold J. Metselaar",
    role: "MDL-arts, Hoogleraar Leverfalen en Levertransplantatie Faculteit Erasmus MC",
    quote: "Zijn bijzondere aanpak zorgt ervoor dat vaak emotionele onderwerpen op een luchtige manier besproken worden.",
  },
  {
    id: 6,
    name: "José Willemse",
    role: "Directeur NLV",
    quote: "Sipke Jan heeft voor ons de hele campagne verzorgd; ik kon het loslaten met het vertrouwen dat het in orde zou komen. De kern van het verhaal wist Sipke Jan goed te raken. Hij weet waar het om draait en wat voor ons en onze achterban belangrijk is. De samenwerking verliep uitstekend en we weten elkaar nog steeds altijd te vinden voor nieuwe plannen.",
  }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Auto-advance slides every 10 seconds
  useEffect(() => {
    if (!api) return;

    // Set up automatic slide transition
    const autoSlideInterval = setInterval(() => {
      api.scrollNext();
    }, 10000); // 10 seconds

    // Track the current slide
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Clean up
    return () => {
      clearInterval(autoSlideInterval);
      api?.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-br from-mensen-beige/30 to-mensen-beige/10">
      <div className="container px-8 md:px-16 lg:px-24">
        <div className="mb-16 text-center">
          <span className="text-mensen-blue font-brass-mono text-base tracking-wider uppercase block mb-2">Referenties</span>
          <h2 className="text-3xl font-brass-mono text-mensen-black mb-6">
            Wat klanten zeggen
          </h2>
          <div className="w-12 h-1 bg-mensen-blue mb-8 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="w-full">
                  <div className="relative px-4 py-10 md:py-16 md:px-10 text-center">
                    <Quote className="text-mensen-blue/15 absolute top-0 left-1/2 -translate-x-1/2 h-20 w-20" />
                    
                    <blockquote className="italic font-lucida text-mensen-black text-xl leading-relaxed mb-8 relative z-10 max-w-3xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center justify-center">
                      <Avatar className="h-16 w-16 border-2 border-mensen-blue/20 shadow-sm mb-3">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback className="bg-mensen-blue/10 text-mensen-blue text-xl font-brass-mono">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <h3 className="font-brass-mono text-xl text-mensen-blue">{testimonial.name}</h3>
                      {testimonial.role && (
                        <p className="text-mensen-gray text-sm mt-1">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-12 flex justify-center items-center gap-8">
              <CarouselPrevious className="relative inline-flex bg-transparent border border-mensen-blue/20 shadow-sm hover:bg-mensen-blue/5 hover:border-mensen-blue/40 transition-all duration-300" />
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      current === index 
                        ? "bg-mensen-blue w-6" 
                        : "bg-mensen-beige hover:bg-mensen-blue/50"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative inline-flex bg-transparent border border-mensen-blue/20 shadow-sm hover:bg-mensen-blue/5 hover:border-mensen-blue/40 transition-all duration-300" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
