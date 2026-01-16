import React from 'react';
import { Shield, Eye, Zap, Users, Brain, TrendingUp, MessageSquare, Lightbulb, Quote, AlertCircle, Activity, Heart as HeartIcon, Target as TargetIcon, FileText, Presentation, BookOpen, Mic } from 'lucide-react';

const TrainingCongruence = () => {
  return (
    <section className="py-16 md:py-24 bg-mensen-beige/10">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-brass-mono mb-6 text-mensen-blue">
            Congruentie als bron van impact
          </h2>
          <div className="h-1 w-20 bg-mensen-blue/30 mb-8"></div>

          <div className="space-y-6 text-base leading-relaxed text-gray-700">
            <div className="relative bg-white/60 p-6 rounded-lg border-l-2 border-mensen-blue/40">
              <Quote className="absolute top-3 right-3 h-8 w-8 text-mensen-blue/10" />
              <p className="text-base italic text-gray-700 relative z-10">
                "Impact ontstaat wanneer woorden, houding en intentie elkaar versterken. Dat is de essentie van congruentie: je bent geloofwaardig omdat je volledig klopt met jezelf."
              </p>
            </div>

            <div className="my-12 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
                De kracht van congruentie
              </h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-4 bg-mensen-beige/10 p-5 rounded-lg">
                    <Shield className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Je boodschap durven claimen</span>
                  </div>
                  <div className="flex items-start gap-4 bg-mensen-beige/10 p-5 rounded-lg">
                    <Eye className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Je expertise niet verstoppen</span>
                  </div>
                  <div className="flex items-start gap-4 bg-mensen-beige/10 p-5 rounded-lg">
                    <Zap className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Je emoties functioneel inzetten</span>
                  </div>
                  <div className="flex items-start gap-4 bg-mensen-beige/10 p-5 rounded-lg">
                    <Users className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Je lichaamstaal laten aansluiten bij je verhaal</span>
                  </div>
                </div>

                <div className="relative bg-mensen-beige/20 p-5 rounded-lg border-l-2 border-mensen-blue/40 mt-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    "Mensen voelen onmiddellijk wanneer je staat voor wat je zegt. Dat maakt je memorabel, zelfs als je boodschap complex of uitdagend is."
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12">
              <h3 className="text-2xl font-brass-mono mb-6 text-mensen-blue">
                Spreken vanuit identiteit, niet vanuit techniek
              </h3>
              <div className="space-y-4">
                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mb-4">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    "Techniek ondersteunt, maar identiteit leidt. Een spreker met een sterke identiteit:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                    <Brain className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Spreekt vanuit visie, niet vanuit angst</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                    <TrendingUp className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Durft pauzes te laten vallen</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                    <MessageSquare className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Maakt contact in plaats van indruk</span>
                  </div>
                  <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm">
                    <Lightbulb className="h-7 w-7 text-[#f58e4f] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Gebruikt voorbeelden die passen bij het eigen verhaal</span>
                  </div>
                </div>

                <div className="relative bg-white/60 p-5 rounded-lg border-l-2 border-mensen-blue/40 mt-6">
                  <Quote className="absolute top-2 right-2 h-6 w-6 text-mensen-blue/10" />
                  <p className="text-base italic text-gray-700 relative z-10">
                    Wanneer je vanuit identiteit spreekt, ontstaat er vanzelf ontspanning. Je hoeft niet te presteren, je hoeft alleen aanwezig te zijn. Dat maakt je boodschap krachtiger dan welke presentatie-techniek ook."
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12 bg-white p-8 rounded-lg border border-mensen-blue/10">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Wat je hier praktisch leert
              </h3>
              <p>
                Hoe je taal, stem, emoties en non-verbaal gedrag zo inzet dat het klopt met je boodschap. Technieken zijn er wél, maar als hulpmiddel—niet als truc.
              </p>
            </div>

            <div className="my-12 bg-mensen-beige/30 p-8 rounded-lg">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Presentatieangst, stress en energie
              </h3>
              <p className="mb-4">
                Spreekspanning kan variëren van lichte onrust tot paniek. En het kost vaak meer energie dan mensen doorhebben: verhoogde alertheid, fysieke spanning, piekeren, vermoeidheid. Daardoor gaan veel professionals situaties vermijden—met gevolgen voor zichtbaarheid, loopbaan en invloed.
              </p>
              <p className="mb-6">
                In deze opleiding besteden we daarom veel aandacht aan:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">stress herkennen (vaak begint het al bij het plannen van de datum)</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Activity className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">spanning reguleren vóór en tijdens het spreken</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <HeartIcon className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">emoties functioneel inzetten in plaats van wegdrukken</span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                  <Zap className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">je energieniveau zó afstemmen dat je contact wint in plaats van verliest</span>
                </div>
              </div>
              <p>
                Een goed energieniveau wekt vertrouwen, vergroot draagvlak en verbetert je communicatie — verbaal én non-verbaal.
              </p>
            </div>

            <div className="my-12 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Voorbereiding die ruimte geeft
              </h3>
              <p className="mb-6">
                Goede voorbereiding is geen extra werk; het is wat je later rust en vrijheid oplevert. Je leert:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-mensen-beige/10 p-4 rounded-lg">
                  <TargetIcon className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">snel tot een kernboodschap te komen</span>
                </div>
                <div className="flex items-start gap-3 bg-mensen-beige/10 p-4 rounded-lg">
                  <Presentation className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">een opening te bouwen die direct aandacht creëert</span>
                </div>
                <div className="flex items-start gap-3 bg-mensen-beige/10 p-4 rounded-lg">
                  <BookOpen className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">inhoud om te zetten in een helder, boeiend verhaal</span>
                </div>
                <div className="flex items-start gap-3 bg-mensen-beige/10 p-4 rounded-lg">
                  <Mic className="h-6 w-6 text-[#f58e4f] flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-700">flexibel te blijven wanneer de groep, sfeer of vragen veranderen</span>
                </div>
              </div>
            </div>

            <div className="my-12 bg-mensen-blue/5 p-8 rounded-lg">
              <h3 className="text-2xl font-brass-mono mb-4 text-mensen-blue">
                Taal, lichaamstaal en het "in je systeem krijgen"
              </h3>
              <p className="mb-4">
                Je ontwikkelt een manier van spreken die past bij jou: eigen woorden, eigen toon, eigen ritme. Niet "mooie zinnen", maar taal die geloofwaardig is. Je traint ook non-verbaal: houding, mimiek, gebaren, oogcontact — omdat die signalen vaak bepalen of mensen je volgen.
              </p>
              <p>
                Het einddoel: spreken voelt minder als "doen" en meer als zijn. Dan wordt het vanzelf consistenter — en blijft het hangen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCongruence;

