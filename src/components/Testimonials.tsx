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
    name: "Mark Tuitert",
    role: "Olympisch kampioen & Mental Coach",
    quote: "Sipke Jan is een absolute topcoach op het gebied van communicatie en presenteren. Scherp, inhoudelijk sterk en gedreven. Hij haalt de beste versie van jezelf naar boven.",
    image: "/lovable-uploads/94488efa-2f4d-4bac-ab6d-f2f60c17547a.png"
  },
  {
    id: 2,
    name: "Annemarie van Gaal",
    role: "Ondernemer & Investeerder",
    quote: "Sipke Jan Bousema behoort tot de top van Nederland als het gaat om presenteren. Zijn kennis en ervaring over hoe jij het beste uit jezelf haalt is ongeëvenaard.",
    image: "/lovable-uploads/01c1321b-a916-4211-8466-7603b6607da4.png"
  },
  {
    id: 3,
    name: "Natasja Froger",
    role: "TV presentator",
    quote: "Ik heb in de loop der jaren met verschillende mediatrainers en coaches gewerkt, maar Sipke Jan onderscheidt zich door zijn oprechte betrokkenheid en altijd eerlijke feedback.",
    image: "/lovable-uploads/40f15ae1-975c-4b0d-a46d-cadf7319bd83.png"
  },
  {
    id: 4,
    name: "Britt Dekker",
    role: "TV presentator",
    quote: "De grootste kracht van Sipke Jan is zijn vermogen om het beste in je naar boven te halen, terwijl je volledig jezelf kunt blijven. Hij weet precies hoe hij je moet coachen zodat jij kunt groeien.",
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
