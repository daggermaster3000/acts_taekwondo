import Image from "next/image";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection'
import Reveal from './components/Reveal'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/photo_accueil.jpg"
          alt="Pratique de Taekwondo au club ACTS Crissier"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gray-900/40 z-10" />

        <main className="z-20 relative max-w-3xl px-6">
          <Reveal as="h1" className="text-4xl sm:text-6xl font-bold leading-tight text-white drop-shadow-md">
            Bienvenue à ACTS Taekwondo Crissier
          </Reveal>
          <Reveal as="p" delayMs={100} className="mt-6 text-lg sm:text-xl text-white/90 drop-shadow">
            Discipline, puissance et respect — rejoignez-nous dès aujourd’hui.
          </Reveal>
          <Reveal delayMs={200} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cours"
              className="bg-[#be4029] hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 px-6 py-3 rounded-full text-white font-semibold transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Voir les cours
            </a>
            <a
              href="#contact"
              className="border border-white/70 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 px-6 py-3 rounded-full text-white font-semibold transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Nous contacter
            </a>
          </Reveal>
        </main>
      </div>

      {/* News Section */}
      
      <Reveal as="section">
        <NewsSection />
      </Reveal>

      <Reveal as="div">
        <Footer/>
      </Reveal>
      
    </div>
  );
}
