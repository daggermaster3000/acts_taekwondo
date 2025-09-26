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
  title: 'ACTS Taekwondo Crissier',
  description: 'Le site officiel d\'ACTS Taekwondo Crissier. Rejoignez-nous et apprenez les techniques du Taekwondo.',
  openGraph: {
    title: 'ACTS Taekwondo Crissier',
    description: 'Le site officiel d\'ACTS Taekwondo Crissier.',
    url: 'https://acts-crissier.ch',
    siteName: 'ACTS Taekwondo',
    images: [
      {
        url: '	https://acts-crissier.ch/_next/image?url=%2Fphoto_accueil.jpg&w=750&q=75', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'ACTS Taekwondo Crissier Logo',
      },
    ],
    locale: 'fr_CH',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://eqlair-analytics.vercel.app/script.js"
          data-website-id="312d6623-ac41-4c83-9952-1466d2e0b98b"
          strategy="afterInteractive" // ensures script loads after hydration
        />
      </head>
      <Analytics/>
      <body className={ptSans.className}>{children}</body>
    </html>
  );
}
