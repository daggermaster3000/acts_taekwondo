import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-10 mt-10" id='contact'>
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Map */}
                <div className="w-full h-64">
                    <iframe
                        title="ACTS Crissier Location"
                        src="https://www.google.com/maps?q=Middle+School+de+la+Carri%C3%A8re,+1023+Crissier&output=embed"
                        className="w-full h-full rounded-lg border"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />


                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-4 text-gray-800">
                    <h3 className="text-xl font-bold text-black">Contact</h3>
                    <p>
                        📍 Adresse:{" "}

                        <a
                            href="https://www.google.com/maps?q=Middle+School+de+la+Carri%C3%A8re,+1023+Crissier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#be4029] hover:underline"
                        >
                            Salle de Gym Collège de la Carrière, 1023 Crissier
                        </a>

                    </p>
                    <p>
                        📧 Email:{" "}
                        <a
                            href="mailto:info@acts-crissier.ch"
                            className="text-[#be4029] hover:underline"
                        >
                            info@acts-crissier.ch
                        </a>
                    </p>
                    <p>
                        💬 WhatsApp:{" "}
                        <a
                            href="https://wa.me/41796890941"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#be4029] hover:underline"
                        >
                            +41 79 689 0941
                        </a>
                    </p>
                </div>
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
