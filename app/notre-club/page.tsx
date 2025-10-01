import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from "../components/Reveal";

export default function NotreClub() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
    <Navbar />
    {/* Hero Section */}
    <div className="relative w-full h-[60vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/photo_notre_club.jpg"
        alt="ACTS Taekwondo Crissier - Notre club"
        fill
        priority
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-gray-900/40 z-10" />
      <div className="z-20 relative max-w-3xl px-6">
        <Reveal as="h1" className="text-4xl sm:text-6xl font-bold leading-tight text-white drop-shadow-md">
          Notre Club
        </Reveal>
        <Reveal as="p" delayMs={100} className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow">
          ACTS Taekwondo Crissier — esprit de respect, discipline et progrès.
        </Reveal>
      </div>
    </div>

    <section id="about" className="justify-center max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-900">
      
      {/* Titles */}
      <Reveal as="h2" className="text-3xl sm:text-4xl font-bold text-center">ACTS Taekwondo Crissier</Reveal>

      {/* Club Description */}
      <Reveal className="prose max-w-none dark:prose-invert justify-center text-center">
        <p>
          Depuis 2019, nous nous efforçons d'offrir des cours Taekwondo de qualité pour les enfants et les adultes à Crissier, à la salle de sport du collège de la Carrière.
          
          Nos Maîtres de Taekwondo sont formés depuis de nombreuses années à l'Académie Choi Taekwondo Suisse (ACTS) par Maître Choi Yong Deok.
        </p>
      </Reveal>

      {/* Additional Section */}
<section
  id="additional-section"
  className="justify-center text-center"
>
  <div className=" mt-20 mx-auto">


    <article className="prose prose-lg dark:prose-invert max-w-none text-gray-800 space-y-6">
      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029] ">L'HISTOIRE DU TAEKWONDO</Reveal>
      <Reveal delayMs={80}>
        <p>
          Originaire de Corée, le Taekwondo – littéralement <strong>« la Voie des pieds et des poings »</strong> – est un art martial
          permettant d’acquérir une force d’épanouissement et de cultiver un esprit d’ouverture. C’est aussi un sport moderne devenu une discipline olympique depuis <strong>2000</strong> aux Jeux Olympiques d’été de Sydney.
        </p>
      </Reveal>
      <Reveal delayMs={120}>
        <p>
          L’histoire du Taekwondo est liée à celle de la Corée, remontant au <strong>« Hwarangdo »</strong> du VI<sup>e</sup> siècle. Il repose sur des valeurs telles que le <em>dépassement de soi, la persévérance, et le respect d’autrui</em>.
        </p>
      </Reveal>
      <Reveal delayMs={160}>
        <p>
          Le Taekwondo est adapté à tous les âges. Il offre les bienfaits d’un art martial, d’une méthode de défense personnelle, et d’une discipline physique complète.
        </p>
      </Reveal>

      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029]">LA TECHNIQUE TRADITIONNELLE</Reveal>
      <Reveal delayMs={80}><p>Pratique des formes ancestrales : coups de pieds, de poings, formes codifiées et assauts.</p></Reveal>

      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029]">COMBAT (Kyorugi)</Reveal>
      <Reveal delayMs={80}><p>La discipline olympique du Taekwondo. Grâce aux protections, le combat est pratiqué en toute sécurité.</p></Reveal>

      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029]">POOMSAE</Reveal>
      <Reveal delayMs={80}><p>Une forme non-combattive composée de mouvements techniques face à un adversaire imaginaire.</p></Reveal>

      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029]">SELF-DEFENSE (Ho Shin Soul)</Reveal>
      <Reveal delayMs={80}><p>L’auto-défense complète, avec techniques d’esquive, blocages, clés, contrôles au sol, mais aussi une <strong>maîtrise de soi</strong> et une meilleure <em>confiance en soi</em>.</p></Reveal>

      <Reveal as="h3" className="text-2xl font-semibold text-[#be4029]">Progression des grades du Taekwondo</Reveal>
      <Reveal delayMs={80}><p>Le système des ceintures : 10 <strong>Keup</strong>, avec 7 couleurs allant de blanche à noire. L'obtention de la ceinture noire 1<sup>er</sup> Dan est accessible dès l'âge de 16 ans.</p></Reveal>
    </article>

    <Reveal className="flex justify-center mt-12" delayMs={120}>
      <Image
        src="/photo_tableau_ceinture.jpg"
        alt="Tableau des ceintures de Taekwondo"
        width={600}
        height={400}
        className="rounded-xl shadow-xl border border-gray-200 dark:border-neutral-700"
        priority
      />
    </Reveal>
  </div>
</section>

    </section>
    
   
    <Footer></Footer>
    </div>
  );
}
