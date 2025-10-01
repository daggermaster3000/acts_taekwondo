import './globals.css';
import { PT_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import Script from "next/script";

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Normal and bold
});

export const metadata: Metadata = {
  // Title optimisé pour les recherches locales
  title: 'ACTS Taekwondo Crissier | Club Taekwondo Lausanne | Arts Martiaux Vaud',
  
  // Description enrichie avec mots-clés stratégiques
  description: 'Club de Taekwondo à Crissier près de Lausanne. Cours pour tous niveaux, instructeurs expérimentés, ambiance conviviale. École d\'arts martiaux référence dans le canton de Vaud. Inscriptions ouvertes.',
  
  // Mots-clés pour le référencement (optionnel en 2024 mais peut aider)
  keywords: [
    'taekwondo lausanne',
    'taekwondo crissier',
    'club taekwondo vaud',
    'arts martiaux lausanne',
    'cours taekwondo suisse',
    'école taekwondo crissier',
    'sport combat lausanne',
    'arts martiaux crissier',
    'taekwondo débutant lausanne',
    'club arts martiaux vaud'
  ].join(', '),
  
  // Auteur et informations du site
  authors: [{ name: 'ACTS Taekwondo Crissier' }],
  creator: 'ACTS Taekwondo Crissier',
  publisher: 'ACTS Taekwondo Crissier',
  
  // Géolocalisation pour le SEO local
  other: {
    'geo.region': 'CH-VD',
    'geo.placename': 'Crissier',
    'geo.position': '46.5369;6.5801', // Coordonnées approximatives de Crissier
    'ICBM': '46.5369, 6.5801',
  },
  
  // Open Graph optimisé
  openGraph: {
    title: 'ACTS Taekwondo Crissier | Meilleur Club Taekwondo Lausanne',
    description: 'Découvrez le taekwondo à Crissier ! Club de référence près de Lausanne avec instructeurs expérimentés. Cours tous niveaux, ambiance conviviale. Venez nous rejoindre !',
    url: 'https://acts-crissier.ch',
    siteName: 'ACTS Taekwondo Crissier',
    images: [
      {
        url: 'https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'ACTS Taekwondo Crissier - Club de Taekwondo près de Lausanne',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ACTS Taekwondo Crissier | Club Taekwondo Lausanne',
    description: 'Club de taekwondo de référence à Crissier près de Lausanne. Instructeurs expérimentés, tous niveaux bienvenus.',
    images: ['https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=1200&q=85'],
  },
  
  // Informations robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Données structurées (Schema.org) pour le SEO local
  alternates: {
    canonical: 'https://acts-crissier.ch',
  },
  
  // Informations de contact et business
  category: 'Sports et Loisirs',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  other: {
    'color-scheme': 'light dark',
  },
};

// Données structurées JSON-LD pour le SEO local
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsClub",
  "name": "ACTS Taekwondo Crissier",
  "description": "Club de taekwondo à Crissier près de Lausanne offrant des cours pour tous niveaux",
  "url": "https://acts-crissier.ch",
  "logo": "https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=400&q=75",
  "image": "https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=1200&q=85",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Crissier",
    "addressRegion": "Vaud",
    "addressCountry": "CH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.5369,
    "longitude": 6.5801
  },
  "sport": "Taekwondo",
  "sameAs": [
    "https://acts-crissier.ch"
  ],
  "areaServed": [
    "Lausanne",
    "Crissier", 
    "Renens",
    "Ecublens",
    "Prilly",
    "Malley",
    "Vaud"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Cours de Taekwondo",
    "description": "Cours de taekwondo pour tous niveaux et tous âges"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Données structurées pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Analytics script */}
        <Script
          src="https://eqlair-analytics.vercel.app/script.js"
          data-website-id="312d6623-ac41-4c83-9952-1466d2e0b98b"
          strategy="afterInteractive"
        />
      </head>
      <body className={ptSans.className}>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-2 rounded">
          Aller au contenu principal
        </a>
        <Analytics/>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}