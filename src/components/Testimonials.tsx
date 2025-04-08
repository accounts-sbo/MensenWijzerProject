
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";

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
    <section id="testimonials" className="py-16 md:py-24 beige-section">
      <div className="container">
        <div className="mb-12">
          <span className="text-mensen-blue font-brass-mono text-sm md:text-base tracking-wider uppercase block mb-2">Referenties</span>
          <h2 className="text-2xl md:text-3xl font-brass-mono text-mensen-black mb-6">
            Wat klanten zeggen
          </h2>
          <div className="w-12 h-1 bg-mensen-blue mb-8"></div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-1">
                  <Card className="border-none shadow-md h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">
                          <Avatar className="h-16 w-16 border-2 border-mensen-blue">
                            {testimonial.image ? (
                              <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            ) : (
                              <AvatarFallback className="bg-mensen-blue text-white text-xl">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            )}
                          </Avatar>
                        </div>
                        <div>
                          <h3 className="font-brass-mono text-lg text-mensen-black">{testimonial.name}</h3>
                          <p className="text-mensen-gray text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote className="italic font-lucida text-mensen-black flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="static transform-none mx-2 bg-mensen-beige border-none hover:bg-mensen-beige/80" />
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      current === index ? "bg-mensen-blue" : "bg-mensen-beige"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static transform-none mx-2 bg-mensen-beige border-none hover:bg-mensen-beige/80" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
