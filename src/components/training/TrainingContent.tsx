import React from 'react';

const ContentSection = ({ title, content, children }: { title: string; content?: string; children?: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">{title}</h3>
    {content && <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">{content}</p>}
    {children}
  </div>
);

const TrainingContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Introductie */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Zodra je jezelf kunt identificeren – dat wil zeggen: weet wie je bent, waar je voor staat en welke waarde je kunt toevoegen – <strong>bén</strong> je het verschil dat het grote verschil maakt. Op die manier kun je ook de toehoorder begeleiden in het proces van zelfidentificatie.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6 italic">
              Wat zijn de (verborgen) behoeften, keuzestrategieën en vragen waarop jouw publiek een antwoord zoekt?
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
              Impactvol presenteren
            </h2>
            <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Impactvol presenteren betekent dat je presentatie niet alleen informatief is, maar ook een blijvende indruk achterlaat.
              Dat je je publiek inspireert en aanzet tot actie. Het gaat erom dat je jouw boodschap overbrengt op een manier die de
              kern van je verhaal duidelijk maakt, het publiek raakt en zorgt dat de informatie blijft hangen.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Het is de juiste combinatie van inhoud, verpakt in een inspirerend verhaal dat niet alleen aanspreekt, maar ook verbindt.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Tijdens deze training word je uit je comfortzone gehaald. Je ontvangt voortdurend feedback en feedforward op jouw presentatie,
              totdat het tipping point is bereikt. Spreekstress maakt dan plaats voor gezonde spanning, waardoor je met
              vertrouwen, plezier en voldoening voor een groep kunt staan.
            </p>
          </div>

          {/* Presentatieangst */}
          <div className="mb-12">
            <ContentSection
              title="Presentatieangst"
              content="Veel mensen hebben last van presentatieangst. Die angst kan variëren van lichte nervositeit tot intense paniek. Presentatieangst kan je dagelijkse leven beïnvloeden en ertoe leiden dat je situaties waarin je voor een groep moet spreken gaat vermijden. Als je hiermee worstelt, is het belangrijk om te weten dat je niet alleen bent — en dat er effectieve manieren zijn om ermee om te gaan en het te overwinnen. We laten je dan ook graag zien én ervaren hoe je op een andere, constructieve manier met presentatieangst kunt omgaan."
            />
          </div>

          {/* Presentatievaardigheden */}
          <div className="mb-12">
            <ContentSection
              title="Presentatievaardigheden"
              content="Er is een groot verschil tussen simpelweg een presentatie geven en écht impact maken. Naast authenticiteit, enthousiasme en lichaamstaal is het van belang om gebruik te maken van metaforen, anekdotes en analogieën. Deze helpen je om een verhaal te vertellen dat blijft hangen. Echte impact ontstaat door de persoonlijke connectie die je weet te maken met je publiek. Door het stellen van krachtige, inhoudelijke vragen en effectief omgaan met kritiek en weerstand, kun je je publiek een waardevolle en onvergetelijke ervaring bieden."
            />
          </div>

          {/* Foto's */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img
              src="/lovable-uploads/2.jpeg"
              alt="Training moment"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="/lovable-uploads/3.jpeg"
              alt="Presentatie vaardigheden"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Identiteit */}
          <div className="mb-12">
            <ContentSection
              title="Identiteit"
              content="Om impactvol te kunnen presenteren, is het belangrijk dat je een krachtige identiteit ontwikkelt. Je presenteert jezelf op een unieke manier die naadloos aansluit bij wie je bent. Je bent to the point en weet hoe je je eigen emoties kunt inzetten om je boodschap te versterken. Je durft jezelf te laten zien en brengt je boodschap op een overtuigende manier over. Je ontwikkelt een combinatie van krachtige vaardigheden, een doordachte voorbereiding en een oprechte, authentieke connectie met je publiek. Je boodschap wordt niet alleen begrepen — het maakt zóveel indruk, dat het daadwerkelijk iets in beweging brengt."
            />
          </div>

          {/* Een goede voorbereiding */}
          <div className="mb-12 bg-mensen-beige/20 p-8 rounded-lg">
            <ContentSection
              title="Een goede voorbereiding is het halve werk"
              content="Een doordachte voorbereiding zorgt ervoor dat je met minder energie veel meer kunt bereiken."
            />
          </div>

          {/* De kracht van taal */}
          <div className="mb-12">
            <ContentSection
              title="De kracht van taal"
              content="Je leert specifieke communicatie waarmee je jezelf op een authentieke manier kunt profileren. Deze manier van spreken sluit aan bij wie jij bent, zonder concessies te doen aan je eigenheid. Zo ontstaat er een unieke verbinding met je toehoorders. Je wordt getraind om jouw kennis om te zetten in presentatiekracht en daarmee een onderscheidende waarde toe te voegen."
            />
          </div>

          {/* Anticiperen */}
          <div className="mb-12">
            <ContentSection
              title="Anticiperen"
              content="Hier leg je de basis om, met minimale voorbereiding, uit de losse pols te kunnen presenteren – zoals de allerbeste sprekers ter wereld dat doen. Je ontdekt de kracht van humor, timing en momentum."
            />
          </div>

          {/* Het gaat in de spieren zitten */}
          <div className="mb-12">
            <ContentSection
              title="Het gaat in de spieren zitten"
              content="Spreken in het openbaar begint bij jezelf: jezelf krachtig leren identificeren en positioneren. Dat is een psychologisch proces waarin je bepaalde eigenschappen van jezelf bewust laat excelleren. Wat maakt jou typisch jij? Verbinding maken is daarbij essentieel. Zo creëer je een stevig fundament om jouw kennis en vaardigheden op een onderscheidende en impactvolle manier te delen – en precies daardoor ontstaat een ervaring die bijblijft."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContent;

