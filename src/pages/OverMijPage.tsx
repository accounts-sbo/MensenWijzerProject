import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const storySections = [
  {
    label: 'Hoe het eerst was',
    paragraphs: [
      'Daar stond ik. In de studio van Opsporing Verzocht, tijdens een live-uitzending. Camera\'s aan, focus erop, alles scherp. Ik deed waar ik goed in was: presenteren, aanvoelen wat er nodig was, schakelen op het juiste moment.',
      'Van buiten zag dat er indrukwekkend uit - en dat was het ergens ook. Maar juist daar, midden in die wereld van adrenaline, scherpte en controle, begon ik steeds vaker te voelen: dit klopt niet meer helemaal met wie ik ben.',
      'Ik kon dit nog jaren blijven doen, maar diep vanbinnen wist ik: als het alleen nog goed oogt aan de buitenkant en niet meer leeft vanbinnen, dan is het tijd voor een stap.',
    ],
  },
  {
    label: 'Hoe het nu is',
    paragraphs: [
      'Vandaag werk ik vanuit mijn volgende fase, waarin alles wat ik eerder deed samenkomt en die past bij wie ik nu ben. Ik begeleid mensen die expert zijn in hun vak, die veel kunnen en hebben bereikt, maar diep vanbinnen voelen dat het tijd is voor meer vrijheid, meer eigenheid en een manier van leven en werken die echt bij hen past.',
      'In de gesprekken valt vaak snel iets op zijn plek: wie ben je eigenlijk, waar ben je onderweg van verwijderd geraakt, en waar gaat je hart sneller van kloppen. Dat zie ik meteen terug in wat iemand vertelt, hoe iemand spreekt, beweegt en aanwezig is.',
      'Wat daarna ontstaat is rust. Richting. Eigenheid. Leven! Mensen daarin begeleiden en zien thuiskomen bij zichzelf vind ik het mooiste wat er is.',
    ],
  },
] as const;

const focusBlocks = [
  {
    label: 'Mijn expertise',
    title: 'Identiteit en richting zichtbaar maken',
    text: 'Mijn expertise ligt in het zichtbaar maken van identiteit en richting. Door mijn achtergrond in media, communicatie, identiteit, leiderschap en psychologie heb ik geleerd om snel patronen te herkennen en tot de kern door te dringen. In mijn begeleiding help ik mensen hun eigen verhaal weer te herkennen, te gaan leven en te gaan vertellen, zodat hun keuzes, werk en uitstraling weer in lijn komen met wie ze werkelijk zijn.',
  },
  {
    label: 'Mijn visie',
    title: 'Echte verandering begint bij eerlijk kijken',
    text: 'Veel mensen die ogenschijnlijk succesvol zijn, zijn onderweg mogelijk iets essentieels kwijtgeraakt: hun eigen stem, hun eigen richting, hun eigen gevoel van kloppen. Ze zijn gaan leven naar verwachtingen, rollen of beelden die ooit werkten, maar nu niet meer passen. Ik geloof dat echte verandering begint bij eerlijk durven kijken, naar wat niet meer klopt en naar wat zich wel aandient. Van daaruit ontstaat beweging die niet geforceerd is, maar vanzelfsprekend voelt.',
  },
] as const;

const personalNotes = [
  'ik een professional en autoriteit ben, maar ook een dondersteen; scherp, met humor en soms een beetje op het randje, maar altijd met warmte en betrokkenheid.',
  'ik dol ben op eigenzinnige mensen en dieren - en dat onze Rhodesian Ridgeback me daar iedere dag weer aan herinnert.',
  'ik het uitdagend vind om kroketten bij een tankstation te weerstaan.',
  'ik de Muppets nog steeds hilarisch vind en ze soms inzet om de boel net even lichter te maken.',
  'ik mensen snel op hun gemak stel, waardoor ze zich durven laten zien en we vaak sneller bij de kern komen dan ze vooraf hadden gedacht.',
  'ik geloof dat iedereen het recht heeft om zijn eigen verhaal te herschrijven en voluit te leven.',
] as const;

const OverMijPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToContact = () => {
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-mensen-blue pt-32 pb-16 text-white md:pt-36 md:pb-24">
          <div className="absolute inset-0 opacity-15">
            <img
              src="/lovable-uploads/1fc0168d-3969-4dbc-927e-e2c58fc3e28e.png"
              alt=""
              className="h-full w-full object-cover object-right"
            />
          </div>

          <div className="container relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-2xl">
              <p className="mb-4 font-brass-mono text-sm uppercase tracking-[0.22em] text-mensen-beige">
                Over mij
              </p>
              <h1 className="max-w-xl text-4xl leading-tight md:text-5xl">
                Van een leven dat goed leek naar een leven dat klopt.
              </h1>
              <div className="mt-6 h-px w-24 bg-white/30" />
              <p className="mt-8 max-w-xl text-base leading-7 text-white/85">
                Ik begeleid mensen die veel kunnen, veel hebben bereikt en toch voelen dat het tijd is
                om dichter bij zichzelf te gaan leven en werken.
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/85">
                Deze pagina vertelt hoe die weg er voor mij uitzag, waar mijn expertise vandaan komt en
                waarom ik mensen help om hun eigen richting weer voluit te gaan leven.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  onClick={goToContact}
                  className="bg-[#f58e4f] px-6 py-3 font-brass-mono text-sm uppercase tracking-wider text-white hover:bg-[#f58e4f]/85"
                >
                  Plan een kennismaking
                </Button>
                <Button
                  onClick={() => navigate('/training')}
                  variant="outline"
                  className="border-white/30 bg-transparent px-6 py-3 font-brass-mono text-sm uppercase tracking-wider text-white hover:border-[#f58e4f] hover:bg-[#f58e4f] hover:text-white"
                >
                  Bekijk de training
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="absolute -left-6 top-8 hidden h-28 w-28 border border-white/25 md:block" />
              <img
                src="/lovable-uploads/bdfac387-5ddd-4dd1-8d53-f573fa83f5b9.png"
                alt="Sipke Jan Bousema"
                className="relative z-10 aspect-[4/5] w-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[200px_minmax(0,760px)]">
              <aside className="hidden lg:block">
                <div className="sticky top-28 space-y-6">
                  <p className="font-brass-mono text-xs uppercase tracking-[0.24em] text-mensen-blue/45">
                    In deze pagina
                  </p>
                  <nav className="space-y-3 text-sm text-mensen-black/55">
                    <a href="#hoe-het-eerst-was" className="block transition-colors hover:text-[#f58e4f]">
                      Hoe het eerst was
                    </a>
                    <a href="#hoe-het-nu-is" className="block transition-colors hover:text-[#f58e4f]">
                      Hoe het nu is
                    </a>
                    <a href="#mijn-expertise" className="block transition-colors hover:text-[#f58e4f]">
                      Mijn expertise
                    </a>
                    <a href="#mijn-visie" className="block transition-colors hover:text-[#f58e4f]">
                      Mijn visie
                    </a>
                    <a href="#als-je-me-zou-kennen" className="block transition-colors hover:text-[#f58e4f]">
                      Als je me zou kennen, zou je weten dat:
                    </a>
                    <a href="#belofte" className="block transition-colors hover:text-[#f58e4f]">
                      Belofte
                    </a>
                  </nav>
                </div>
              </aside>

              <article className="min-w-0">
                <div className="space-y-12 md:space-y-14">
                  <section id="hoe-het-eerst-was" className="scroll-mt-32 md:scroll-mt-36">
                    <p className="font-brass-mono text-sm uppercase tracking-[0.22em] text-[#b0693d]">
                      {storySections[0].label}
                    </p>
                    <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-mensen-black md:text-4xl">
                      Het moment waarop de buitenkant niet meer genoeg was.
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-mensen-black/88">
                      {storySections[0].paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>

                  <blockquote className="border-l-2 border-[#f58e4f] pl-6 text-2xl leading-10 text-mensen-blue md:pl-8 md:text-3xl md:leading-[1.45]">
                    Als het alleen nog goed oogt aan de buitenkant en niet meer leeft vanbinnen,
                    dan is het tijd voor een stap.
                  </blockquote>

                  <section id="hoe-het-nu-is" className="scroll-mt-32 md:scroll-mt-36">
                    <p className="font-brass-mono text-sm uppercase tracking-[0.22em] text-[#b0693d]">
                      {storySections[1].label}
                    </p>
                    <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-mensen-black md:text-4xl">
                      De fase waarin alles samenvalt en op zijn plek komt.
                    </h2>
                    <div className="mt-6 space-y-5 text-lg leading-8 text-mensen-black/88">
                      {storySections[1].paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="mt-8 border-l-2 border-[#f58e4f] pl-6 md:pl-8">
                      <p className="font-brass-mono text-xs uppercase tracking-[0.24em] text-mensen-blue/45">
                        Wat er ontstaat
                      </p>
                      <p className="mt-3 text-lg leading-8 text-mensen-black/78">
                        Rust. Richting. Eigenheid. Leven. Niet als grote woorden, maar als iets wat in
                        houding, keuzes en uitstraling weer voelbaar wordt.
                      </p>
                    </div>
                  </section>

                  <div className="overflow-hidden">
                    <img
                      src="/lovable-uploads/bdfac387-5ddd-4dd1-8d53-f573fa83f5b9.png"
                      alt="Sipke Jan Bousema"
                      className="aspect-[16/10] w-full object-cover object-top"
                    />
                  </div>

                  {focusBlocks.map((block) => (
                    <section
                      key={block.label}
                      id={block.label === 'Mijn expertise' ? 'mijn-expertise' : 'mijn-visie'}
                      className="scroll-mt-32 border-t border-mensen-blue/10 pt-12 md:scroll-mt-36"
                    >
                      <p className="font-brass-mono text-sm uppercase tracking-[0.22em] text-[#b0693d]">
                        {block.label}
                      </p>
                      <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-mensen-black md:text-4xl">
                        {block.title}
                      </h2>
                      <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-mensen-black/88">
                        <p>{block.text}</p>
                      </div>
                    </section>
                  ))}

                  <section id="als-je-me-zou-kennen" className="scroll-mt-32 border-t border-mensen-blue/10 pt-12 md:scroll-mt-36">
                    <p className="font-brass-mono text-sm uppercase tracking-[0.22em] text-[#b0693d]">
                      Als je me zou kennen, zou je weten dat:
                    </p>
                    <h2 className="mt-5 max-w-2xl text-3xl leading-tight text-mensen-black md:text-4xl">
                      Serieus in mijn vak, licht in de energie, scherp op wat echt gezien wil worden.
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-mensen-black/78">
                      ik een professional en autoriteit ben, maar ook een dondersteen; scherp, met humor
                      en soms een beetje op het randje, maar altijd met warmte en betrokkenheid.
                    </p>
                    <ul className="mt-8 space-y-5 text-lg leading-8 text-mensen-black/88">
                      {personalNotes.slice(1).map((note) => (
                        <li key={note} className="flex gap-4">
                          <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-[#f58e4f]" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section id="belofte" className="scroll-mt-32 border-t border-mensen-blue/10 pt-12 md:scroll-mt-36">
                    <p className="font-brass-mono text-sm uppercase tracking-[0.22em] text-[#b0693d]">
                      En misschien nog wel het belangrijkste
                    </p>
                    <h2 className="mt-5 max-w-3xl text-3xl leading-tight text-mensen-black md:text-4xl">
                      Met de juiste begeleiding ga je dingen zien die je nog niet eerder zag, horen wat
                      je misschien nog niet wilde horen, en weer voelen welke weg werkelijk bij jou past.
                    </h2>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-mensen-black/88">
                      Dat is mijn belofte aan jou.
                    </p>
                    <div className="mt-8 border-l-2 border-mensen-blue pl-6">
                      <p className="font-brass-mono text-lg text-mensen-black">
                        Sipke Jan Bousema
                        <br />
                        <span className="text-[#b0693d]">De Mensen Wijzer</span>
                      </p>
                      <p className="mt-4 max-w-2xl text-base leading-7 text-mensen-black/70">
                        Voor mensen die ergens klaar mee zijn - en klaar voor zijn.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <Button
                        onClick={goToContact}
                        className="bg-[#f58e4f] px-6 py-3 font-brass-mono text-sm uppercase tracking-wider text-white hover:bg-[#d8773c]"
                      >
                        Neem contact op
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        onClick={() => navigate('/training')}
                        variant="outline"
                        className="border-mensen-blue/20 px-6 py-3 font-brass-mono text-sm uppercase tracking-wider text-mensen-blue hover:border-[#f58e4f] hover:bg-[#f58e4f] hover:text-white"
                      >
                        Bekijk de training
                      </Button>
                    </div>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OverMijPage;
