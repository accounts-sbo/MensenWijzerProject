
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
  },
  {
    id: 7,
    name: "Halbe-Piter Claus",
    role: "Regisseur / Programmaker",
    quote: "Als projectadviseur van het transmediale filmproject Jennifer to the Max is Sipke Jan er in geslaagd verbindingen te leggen tussen verschillende maatschappelijke organisaties op nationaal niveau. Dit heeft geresulteerd in een stevige samenwerking waarbij vorm en inhoud elkaar versterken. Op een prettige manier verbindt Sipke Jan de verschillende doelstellingen van deelnemende partners. Een strategisch complexe klus die Sipke Jan op het lijf geschreven is.",
  },
  {
    id: 8,
    name: "Jan Bakker",
    role: "Projectleider Gemeente Heerenveen",
    quote: "Erg onder de indruk was ik van de presentatie coaching sessie die je voor de studenten hebt verzorgd. De deelnemende studententeams moesten tijdens het Light Challenge traject de voortgang van hun traject maar ook zichzelf presenteren aan de vakjury en het publiek. Tijdens de coaching sessie heb je de studenten kneepjes uit het vak maar ook zelfvertrouwen meegegeven waardoor ze een enorme ontwikkeling hebben mogen doormaken.",
  },
  {
    id: 9,
    name: "Jan Bakker",
    role: "Projectleider Gemeente Heerenveen",
    quote: "Vanuit de Light Challenge organisatie hebben we deze vierde editie de lat erg hoog gelegd. Jij hebt ons daarbij geholpen ons doel te realiseren. De Kick-off, masterclasses en finale die je als dagvoorzitter hebt verzorgd zijn door jou zeer professioneel uitgevoerd. Door je zakelijke insteek te combineren met luchtige zelfreflectie en een dosis humor heb je de juiste sfeer voor de Light Challenge weten te bepalen.",
  },
  {
    id: 10,
    name: "José Willemse",
    role: "Directeur NLV",
    quote: "Werken met Sipke Jan is inspirerend. Hij bundelt je ideeën, vertaalt ze naar de mogelijkheden die er zijn. Het is een groot genoegen om samen met hem te werken. Hij is deskundig op zijn vakgebied en verdiept zich vol verve in jouw onderwerp. Dat maakt dat hij precies weet waar we samen naar toe kunnen. Met Sipke Jan hebben wij het beste in onszelf naar boven gehaald.",
  },
  {
    id: 11,
    name: "Trudy Feijen",
    role: "Communicatie- en gedragsexpert",
    quote: "Sipke Jan Bousema en zijn team durven een duidelijk standpunt in te nemen en weten als geen ander hoe je de identiteit, waarden en normen van een organisatie vertaalt.",
  },
  {
    id: 12,
    name: "Trudy Feijen",
    role: "",
    quote: "Vanuit authenticiteit weet Sipke Jan mensen te inspireren. Zijn passie, daadkracht en empathisch vermogen maken dat hij de kern weet te raken. Een vakman die in staat is om ook anderen naar een next level te trainen. Daarnaast is hij een zéér prettige persoonlijkheid om mee samen te werken.",
  },
  {
    id: 13,
    name: "Sytse Oreel",
    role: "Directeur Oreel Metal Components & Assemblies",
    quote: "Sipke Jan Bousema kan goed inschatten of een idee hout snijdt of niet. Hij heeft daarnaast een goed gevoel voor timing, waardoor de campagne door veel media is opgepikt. Zowel door de lokale en regionale media, als landelijke media zoals BNR Nieuwsradio. Dit laatste was meer dan waar we op hoopten.",
  },
  {
    id: 14,
    name: "Eva Meijer",
    role: "Directeur Hoora Watersport",
    quote: "Ons bedrijf is echt weer goed op de kaart gezet en onze missie om goed, passend personeel te vinden is meer dan geslaagd!",
  },
  {
    id: 15,
    name: "Eva Meijer",
    role: "Directeur Hoora Watersport",
    quote: "Er is dankzij de campagne meer bereikt dan ik had durven dromen! We hebben onwijs goed in de spotlight gestaan.",
  },
  {
    id: 16,
    name: "Fokke Jagersma",
    role: "Projectcoördinator AFÛK",
    quote: "De samenwerking met Sipke Jan Bousema heb ik als plezierig, warm en enthousiast ervaren. Hij heeft geleid tot een verrassende en creatieve site die de doelgroep aansprak.",
  },
  {
    id: 17,
    name: "Prof. Dr. Solko Schalm",
    role: "Leverarts",
    quote: "Ik ben enorm onder de indruk van hoe verbindend Sipke Jan kan werken en van zijn professionele aanpak.",
  },
  {
    id: 18,
    name: "Jeannette Verbruggen",
    role: "Directie Samenleving & Integratie van het Ministerie van Sociale Zaken & Werkgelegenheid",
    quote: "De netwerkbijeenkomst van de directie Samenleving & Integratie van het ministerie van SZW is een heel groot succes geworden. Mede dankzij de bijdrage van Sipke Jan Bousema zowel bij het voortraject als op de dag zelf in zijn rol als dagvoorzitter.",
  }
];

const Testimonials = () => {
  const { toast } = useToast();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  // Function to start the auto-slide interval
  const startAutoSlide = () => {
    if (api) {
      const interval = setInterval(() => {
        api.scrollNext();
      }, 10000); // 10 seconds
      setAutoSlideInterval(interval);
      return interval;
    }
    return null;
  };

  // Function to clear the auto-slide interval
  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  };

  // Initialize the carousel and auto-slide behavior
  useEffect(() => {
    if (!api) return;

    // Start auto-slide initially
    const interval = startAutoSlide();

    // Track the current slide
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Clean up
    return () => {
      if (interval) clearInterval(interval);
      api?.off("select", onSelect);
    };
  }, [api]);

  // Handle mouse events to pause/resume auto-slide
  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-mensen-blue text-white">
      <div className="container px-8 md:px-12">
        <div className="mb-10 text-center">
          <span className="text-white/80 font-brass-mono text-base tracking-wider uppercase block mb-2">Referenties</span>
          <h2 className="text-3xl font-brass-mono text-white mb-4">
            Wat klanten zeggen
          </h2>
          <div className="w-12 h-1 bg-white/70 mb-6 mx-auto"></div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
                  <div className="relative px-4 py-6 md:py-10 md:px-8 text-center">
                    <Quote className="text-white/15 absolute top-0 left-1/2 -translate-x-1/2 h-16 w-16" />
                    
                    <blockquote className="italic font-lucida text-white text-xl leading-relaxed mb-6 relative z-10 max-w-3xl mx-auto">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-col items-center justify-center">
                      <Avatar className="h-16 w-16 border-2 border-white/20 shadow-sm mb-3">
                        {testimonial.image ? (
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        ) : (
                          <AvatarFallback className="bg-white/10 text-white text-xl font-brass-mono">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <h3 className="font-brass-mono text-xl text-white">{testimonial.name}</h3>
                      {testimonial.role && (
                        <p className="text-white/80 text-sm mt-1">{testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="mt-8 flex justify-center items-center gap-8">
              <CarouselPrevious className="relative inline-flex bg-transparent border border-white/20 shadow-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300" />
              
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      current === index 
                        ? `bg-[#b0693d] w-6` 
                        : "bg-white/30 hover:bg-[#b0693d]/70"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative inline-flex bg-transparent border border-white/20 shadow-sm hover:bg-white/5 hover:border-white/40 transition-all duration-300" />
            </div>
          </Carousel>
          
          {isPaused && (
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-[#b0693d]/90 text-white text-xs py-1 px-3 rounded-full opacity-80">
              Automatisch schuiven gepauzeerd
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
