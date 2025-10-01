import Image from "next/image";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import NewsSection from '../components/NewsSection'
import Reveal from "../components/Reveal";

export default function Cours() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            <Navbar />
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden">
                <Image
                    src="/photo_accueil.jpg"
                    alt="Cours de Taekwondo ACTS Crissier"
                    fill
                    priority
                    className="object-cover z-0"
                />
                <div className="absolute inset-0 bg-gray-900/40 z-10" />
                <div className="z-20 relative max-w-3xl px-6">
                    <Reveal as="h1" className="text-4xl sm:text-6xl font-bold leading-tight text-white drop-shadow-md">
                        Cours
                    </Reveal>
                    <Reveal as="p" delayMs={100} className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow">
                        Horaires et tarifs des entraînements à Crissier
                    </Reveal>
                </div>
            </div>

            <section id="about" className="max-w-5xl mx-auto px-6 py-16 space-y-8 text-gray-900">

                


                {/* Titles */}
                <Reveal as="h2" className="text-3xl sm:text-4xl font-bold text-center">Informations</Reveal>
                
                            <div className="prose max-w-none ">

                    <Reveal as="h3" className="text-2xl sm:text-3xl font-extrabold text-center text-[#be4029] mb-12">Horaires</Reveal>
                    <table className="w-full max-w-md mx-auto mt-8 text-left border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-[#be4029] text-white">
                            <tr>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2">Mardi</th>
                                <th className="px-4 py-2">Mercredi</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 bg-white">
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Enfants</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                                <td className="px-4 py-2">17h30-18h30</td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Ados-Adultes</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                                <td className="px-4 py-2">18h30-19h30</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Club prix */}
                <div className="prose max-w-none ">

                    <Reveal as="h3" className="text-2xl sm:text-3xl font-extrabold text-center text-[#be4029] mb-12">Nos Prix</Reveal>
                    <table className="w-full max-w-md mx-auto mt-8 text-left border border-gray-300 rounded-lg overflow-hidden">
                        <thead className="bg-[#be4029] text-white">
                            <tr>
                                <th className="px-4 py-2">Durée</th>
                                <th className="px-4 py-2">1 an</th>
                                <th className="px-4 py-2">6 mois</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-800 bg-white">
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Enfants (jusqu'à 18 ans)</td>
                                <td className="px-4 py-2">CHF 850.-</td>
                                <td className="px-4 py-2">CHF 475.-</td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">Adultes</td>
                                <td className="px-4 py-2">CHF 950.-</td>
                                <td className="px-4 py-2">CHF 525.-</td>
                            </tr>
                        </tbody>
                    </table>

                </div>



            </section>
            <NewsSection />
            <Footer/>
        </div>
    );
}
