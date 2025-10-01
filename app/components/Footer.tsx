import React from "react";
import Reveal from "./Reveal";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-10 mt-10" id='contact' aria-labelledby="footer-heading">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Map */}
                <Reveal className="w-full h-64" delayMs={100}>
                    <iframe
                        title="ACTS Crissier Location"
                        src="https://www.google.com/maps?q=Middle+School+de+la+Carri%C3%A8re,+1023+Crissier&output=embed"
                        className="w-full h-full rounded-lg border"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Reveal>

                {/* Contact Info */}
                <Reveal className="flex flex-col justify-center space-y-4 text-gray-800" delayMs={200}>
                    <h3 id="footer-heading" className="text-xl font-bold text-black">Contact</h3>
                    <address className="not-italic">
                        <p className="mb-1">📍 Adresse</p>
                        <p>
                            <a
                                href="https://www.google.com/maps?q=Middle+School+de+la+Carri%C3%A8re,+1023+Crissier"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#be4029] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be4029]/40 rounded"
                            >
                                Salle de Gym Collège de la Carrière, 1023 Crissier
                            </a>
                        </p>
                    </address>
                    <p>
                        <span className="sr-only">Email</span> 📧
                        <a
                            href="mailto:info@acts-crissier.ch"
                            className="ml-2 text-[#be4029] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be4029]/40 rounded"
                        >
                            info@acts-crissier.ch
                        </a>
                    </p>
                    <p>
                        <span className="sr-only">WhatsApp</span> 💬
                        <a
                            href="https://wa.me/41796890941"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-[#be4029] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#be4029]/40 rounded"
                        >
                            +41 79 689 0941
                        </a>
                    </p>
                </Reveal>
            </div>

            <div className="text-center text-sm text-gray-500 mt-18">
                © {new Date().getFullYear()} ACTS Crissier – Tous droits réservés.
            </div>
            <div className="text-center text-sm text-gray-500 mt-8">
                <p>
                🌐 Site web par{" "}
                <a
                            href="https://eqlair.ch/"
                            className="text-[#be4029] hover:underline"
                        >
                EQlair Studio
                </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
