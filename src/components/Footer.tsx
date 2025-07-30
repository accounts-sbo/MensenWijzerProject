
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [termsOpen, setTermsOpen] = useState(false);
  
  return (
    <footer className="bg-mensen-blue text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/984b0d56-dca3-47dd-a9ce-443d09d3d896.png" 
              alt="De Mensen Wijzer" 
              className="h-16 mb-6 md:mb-0 bg-white p-1 rounded-md" 
            />
            <span className="font-brass-mono text-white text-lg md:text-xl">DE MENSEN WIJZER</span>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sipkejanbousema/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-mensen-beige transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-brass-mono text-lg mb-4 text-mensen-beige">Sipke Jan Bousema</h3>
            <p className="font-lucida text-sm text-white/90">
              SJB Media<br />
              KVK: 83567824<br />
              BTW: NL003823618B13
            </p>
          </div>
          
          <div>
            <h3 className="font-brass-mono text-lg mb-4 text-mensen-beige">Locatie Fryslân / Leeuwarden</h3>
            <p className="font-lucida text-sm text-white/90">
              Wyns 39<br />
              9091 BE Wyns<br />
              <a href="tel:+31635345061" className="hover:text-mensen-beige transition-colors">T: +31 6 53 54 50 61</a>
            </p>
          </div>
          
          <div className="md:text-right">
            <p className="font-lucida text-sm text-white/80">
              De Mensen Wijzer is een merk van SJB Media B.V.<br />
              © {currentYear} - Alle rechten voorbehouden
            </p>
            <div className="mt-2 font-lucida text-xs space-x-4">
              <button 
                onClick={() => setTermsOpen(true)}
                className="hover:text-mensen-beige transition-colors underline-offset-4 hover:underline"
              >
                Algemene voorwaarden
              </button>
              <a href="#" className="hover:text-mensen-beige transition-colors">Privacy Policy</a>
            </div>
            <div className="mt-3 font-lucida text-xs text-white/60">
              Website by Willem van Leunen
            </div>
          </div>
        </div>
      </div>

      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-brass-mono text-mensen-blue">
              Algemene Voorwaarden – De Mensen Wijzer / SJB Media B.V.
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 text-sm font-lucida">
            <div>
              <h3 className="font-semibold mb-2">Artikel 1 – Definities</h3>
              <p className="mb-2">1.1 Opdrachtgever: de natuurlijke of rechtspersoon die een overeenkomst sluit met De Mensen Wijzer / SJB Media B.V.</p>
              <p className="mb-2">1.2 De Mensen Wijzer: handelsnaam van SJB Media B.V., gevestigd te Wyns, ingeschreven bij de Kamer van Koophandel onder nummer 84953179.</p>
              <p>1.3 Diensten: alle vormen van coaching, training, mentorschap, begeleiding, advies, presentaties, creatieve strategie en inhoudelijke trajectontwikkeling die door De Mensen Wijzer worden aangeboden.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 2 – Toepasselijkheid</h3>
              <p className="mb-2">2.1 Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten, trajecten en werkzaamheden van De Mensen Wijzer, waaronder coaching, training, mentorschap en advies.</p>
              <p className="mb-2">2.2 Afwijkingen van deze voorwaarden zijn alleen bindend als deze schriftelijk zijn overeengekomen.</p>
              <p className="mb-2">2.3 Indien enige bepaling ongeldig blijkt, blijven de overige bepalingen volledig van kracht.</p>
              <p>2.4 Werknemers of hulppersonen van De Mensen Wijzer mogen uitsluitend van deze voorwaarden afwijkende afspraken maken op basis van een schriftelijke volmacht, per overeenkomst afzonderlijk te verlenen.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 3 – Totstandkoming van de overeenkomst</h3>
              <p className="mb-2">3.1 Offertes zijn vrijblijvend en 30 dagen geldig, tenzij anders vermeld.</p>
              <p className="mb-2">3.2 Een overeenkomst komt tot stand via schriftelijke bevestiging (per e-mail, ondertekende offerte of mondelinge toezegging gevolgd door uitvoering).</p>
              <p className="mb-2">3.3 De Mensen Wijzer is niet gebonden aan mondelinge toezeggingen van derden zonder schriftelijke bevestiging.</p>
              <p>3.4 Wijzigingen van de overeenkomst op verzoek van de opdrachtgever worden uitsluitend geaccepteerd na schriftelijke instemming en kunnen leiden tot aanpassing van de kosten.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 4 – Uitvoering van de opdracht</h3>
              <p className="mb-2">4.1 De Mensen Wijzer voert opdrachten – waaronder mentorschap – uit naar beste kunnen (inspanningsverplichting).</p>
              <p className="mb-2">4.2 De opdrachtgever is verantwoordelijk voor het tijdig aanleveren van benodigde informatie en medewerking.</p>
              <p className="mb-2">4.3 Indien nodig kunnen derden worden ingeschakeld voor de uitvoering, onder verantwoordelijkheid van De Mensen Wijzer.</p>
              <p>4.4 Indien onvoldoende informatie of medewerking wordt verstrekt, vervalt de verplichting tot nakoming aan de zijde van De Mensen Wijzer.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 5 – Annulering en verplaatsing</h3>
              <p className="mb-2">5.1 Afspraken kunnen tot 24 uur van tevoren kosteloos worden verplaatst binnen dezelfde maand.</p>
              <p className="mb-2">5.2 Afspraken die binnen 24 uur worden afgezegd of niet worden nagekomen, worden in rekening gebracht als volledig doorgang hebbend.</p>
              <p className="mb-2">5.3 Reeds betaalde trajecten of sessies (inclusief mentorschap) worden niet gerestitueerd bij voortijdige beëindiging door de opdrachtgever.</p>
              <p>5.4 Annuleringen dienen schriftelijk te geschieden. Bij annulering van geplande programma's binnen 5 werkdagen vóór aanvang is 100% van de hoofdsom verschuldigd. Bij annulering langer dan 5 werkdagen vooraf is 75% verschuldigd.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 6 – Duur & geldigheid trajecten</h3>
              <p className="mb-2">6.1 Een traject (coaching, training of mentorschap) wordt uitgevoerd binnen de afgesproken periode.</p>
              <p>6.2 Niet-gebruikte sessies vervallen na afloop van het traject en kunnen niet worden ingehaald of teruggevorderd, tenzij schriftelijk anders overeengekomen.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 7 – Betaling</h3>
              <p className="mb-2">7.1 De factuur dient binnen 14 dagen na factuurdatum te worden voldaan.</p>
              <p className="mb-2">7.2 Bij uitblijvende betaling is De Mensen Wijzer gerechtigd wettelijke rente en incassokosten (minimaal 15% van het openstaande bedrag, met een minimum van € 40,-) in rekening te brengen.</p>
              <p className="mb-2">7.3 Indien betaling in termijnen is overeengekomen, dienen deze binnen de afgesproken termijnen te worden voldaan.</p>
              <p>7.4 De Mensen Wijzer is gerechtigd de uitvoering van de opdracht op te schorten of te beëindigen bij uitblijvende betaling zonder verdere ingebrekestelling.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 8 – Aansprakelijkheid</h3>
              <p className="mb-2">8.1 De Mensen Wijzer is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</p>
              <p className="mb-2">8.2 Aansprakelijkheid is beperkt tot het bedrag van de betreffende factuur, mits deze is betaald.</p>
              <p className="mb-2">8.3 Indien schade gedekt is via verzekering, geldt als maximum de uitkering van de verzekeraar.</p>
              <p className="mb-2">8.4 De opdrachtgever blijft te allen tijde verantwoordelijk voor eigen beslissingen en gedrag naar aanleiding van coaching, training of mentorschap.</p>
              <p>8.5 Aansprakelijkheid vervalt 12 maanden na het ontstaan van de schade of het einde van de overeenkomst, afhankelijk van wat zich het eerst voordoet.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 9 – Vrijwaring en schadeclaims derden</h3>
              <p className="mb-2">9.1 De opdrachtgever vrijwaart De Mensen Wijzer voor alle aanspraken van derden voortvloeiend uit het niet naleven van contractuele verplichtingen door de opdrachtgever.</p>
              <p>9.2 Indien de opdrachtgever wordt aangesproken door derden, dient hij De Mensen Wijzer binnen 8 dagen schriftelijk op de hoogte te stellen.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 10 – Intellectueel eigendom</h3>
              <p className="mb-2">10.1 Alle door De Mensen Wijzer ontwikkelde materialen, werkwijzen, presentaties en trajectstructuren blijven eigendom van De Mensen Wijzer / SJB Media B.V.</p>
              <p className="mb-2">10.2 Gebruik, verspreiding of reproductie is alleen toegestaan na schriftelijke toestemming.</p>
              <p>10.3 De opdrachtgever krijgt een beperkt, niet-overdraagbaar gebruiksrecht uitsluitend voor intern gebruik.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 11 – Geheimhouding en gegevensbescherming</h3>
              <p className="mb-2">11.1 Beide partijen verplichten zich tot geheimhouding van vertrouwelijke informatie.</p>
              <p className="mb-2">11.2 Persoonsgegevens worden verwerkt conform de AVG en uitsluitend gebruikt voor de uitvoering van de opdracht.</p>
              <p>11.3 Deze geheimhoudingsplicht geldt ook na afloop van de overeenkomst.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 12 – Overmacht</h3>
              <p className="mb-2">12.1 In geval van overmacht mag De Mensen Wijzer de uitvoering van de overeenkomst opschorten of beëindigen zonder schadeplichtigheid.</p>
              <p>12.2 Onder overmacht vallen o.a. ziekte, pandemieën, overheidsmaatregelen, natuurrampen, en technische storingen buiten invloed van De Mensen Wijzer.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 13 – Ontbinding van de overeenkomst</h3>
              <p className="mb-2">13.1 De overeenkomst kan worden ontbonden als de opdrachtgever in verzuim is, failliet gaat, of surseance van betaling aanvraagt.</p>
              <p className="mb-2">13.2 Bij ontbinding zijn alle openstaande bedragen direct opeisbaar.</p>
              <p>13.3 De Mensen Wijzer behoudt zich het recht voor om reeds geleverde diensten te factureren en schadevergoeding te vorderen.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Artikel 14 – Klachten en geschillen</h3>
              <p className="mb-2">14.1 Klachten dienen binnen 8 dagen na het betreffende contact schriftelijk te worden gemeld.</p>
              <p className="mb-2">14.2 Geschillen worden, bij voorkeur, in overleg opgelost. Indien nodig worden deze voorgelegd aan de bevoegde rechter in het arrondissement waar De Mensen Wijzer is gevestigd.</p>
              <p>14.3 Op alle overeenkomsten is uitsluitend Nederlands recht van toepassing.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
