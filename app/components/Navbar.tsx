"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Cours", href: "/cours" },
  { name: "Notre Club", href: "/notre-club" },
  { name: "Galerie Photos", href: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollToContact = () => {
    setIsOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 text-[#2E2E2E] px-6 py-4 w-full top-0 z-50 shadow-md font-pt " role="navigation" aria-label="Navigation principale">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/ACTS_logo.png"
            alt="ACTS Taekwondo Logo"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
          <span className="text-2xl font-bold tracking-wide">ACTS Taekwondo Crissier</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map(({ name, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={name}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition duration-200 underline-offset-4 ${isActive ? 'text-[#be4029] font-bold' : 'hover:underline'}`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          {/* <li>
            <button
              onClick={scrollToContact}
              className="hover:underline underline-offset-4 transition duration-200 cursor-pointer bg-transparent border-none p-0 font-semibold text-[#2E2E2E]"
            >
              Contact
            </button>
          </li> */}
        </ul>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-[#2E2E2E]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu - Enhanced */}
      <div
        className={`md:hidden fixed inset-0 z-40 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop with blur */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'} bg-white/30 dark:bg-black/30 backdrop-blur-md`}
          onClick={() => setIsOpen(false)}
        />
        {/* Sliding panel */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Image
            src="/ACTS_logo.png"
            alt="ACTS Taekwondo Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#2E2E2E]"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="p-8 space-y-8 text-[#2E2E2E]">
          {navLinks.map(({ name, href }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={name}
                href={href}
                aria-current={isActive ? 'page' : undefined}
                className={`block text-xl font-medium transition-colors duration-200 ${isActive ? 'text-[#be4029]' : 'hover:text-blue-600'}`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            );
          })}
          {/* <button
            onClick={scrollToContact}
            className="block w-full text-left text-xl font-medium hover:text-blue-600 transition-colors duration-200 bg-transparent border-none p-0"
          >
            Contact
          </button> */}
        </div>
        </div>
      </div>
    </nav>
  );
}