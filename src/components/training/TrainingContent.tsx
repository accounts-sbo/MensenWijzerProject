import React from 'react';

const ContentSection = ({ title, content }: { title: string; content: string }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">{title}</h3>
    <p className="text-base leading-relaxed text-gray-700">{content}</p>
  </div>
);

const TrainingContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
              Impactvol presenteren
            </h2>
            <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>
            <p className="text-lg leading-relaxed text-gray-700">
              Impactvol presenteren betekent dat je presentatie niet alleen informatief is, maar ook een blijvende indruk achterlaat. 
              Dat je je publiek inspireert en aanzet tot actie. Het gaat erom dat je jouw boodschap overbrengt op een manier die de 
              kern van je verhaal duidelijk maakt, het publiek raakt en zorgt dat de informatie blijft hangen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-mensen-beige/20 p-8 rounded-lg">
              <img 
                src="/lovable-uploads/2.jpeg" 
                alt="Training moment" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ContentSection 
                title="Presentatieangst"
                content="Veel mensen hebben last van presentatieangst. Die angst kan variëren van lichte nervositeit tot intense paniek. Als je hiermee worstelt, is het belangrijk om te weten dat je niet alleen bent — en dat er effectieve manieren zijn om ermee om te gaan en het te overwinnen."
              />
            </div>

            <div className="bg-mensen-beige/20 p-8 rounded-lg">
              <img 
                src="/lovable-uploads/3.jpeg" 
                alt="Presentatie vaardigheden" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <ContentSection 
                title="Presentatievaardigheden"
                content="Er is een groot verschil tussen simpelweg een presentatie geven en écht impact maken. Naast authenticiteit, enthousiasme en lichaamstaal is het van belang om gebruik te maken van metaforen, anekdotes en analogieën. Deze helpen je om een verhaal te vertellen dat blijft hangen."
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <ContentSection 
              title="Een krachtige identiteit"
              content="Om impactvol te kunnen presenteren, is het belangrijk dat je een krachtige identiteit ontwikkelt. Je presenteert jezelf op een unieke manier die naadloos aansluit bij wie je bent. Je bent to the point en weet hoe je je eigen emoties kunt inzetten om je boodschap te versterken."
            />

            <ContentSection 
              title="De kracht van taal"
              content="Je leert specifieke communicatie waarmee je jezelf op een authentieke manier kunt profileren. Deze manier van spreken sluit aan bij wie jij bent, zonder concessies te doen aan je eigenheid. Zo ontstaat er een unieke verbinding met je toehoorders."
            />

            <ContentSection 
              title="Het gaat in de spieren zitten"
              content="Spreken in het openbaar begint bij jezelf: jezelf krachtig leren identificeren en positioneren. Dat is een psychologisch proces waarin je bepaalde eigenschappen van jezelf bewust laat excelleren. Wat maakt jou typisch jij? Verbinding maken is daarbij essentieel."
            />
          </div>

          <div className="mt-12 bg-mensen-blue text-white p-8 rounded-lg">
            <h3 className="text-2xl font-brass-mono mb-4">Tijdens deze training</h3>
            <p className="text-lg leading-relaxed">
              Word je uit je comfortzone gehaald. Je ontvangt voortdurend feedback en feedforward op jouw presentatie, 
              totdat het tipping point is bereikt. Spreekstress maakt dan plaats voor gezonde spanning, waardoor je met 
              vertrouwen, plezier en voldoening voor een groep kunt staan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingContent;

