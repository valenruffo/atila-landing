import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina | Diseño e Instalación",
  description:
    "Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento. Solicitá tu presupuesto.",
  applicationName: "ATILA PÁDEL",
  authors: [{ name: "ATILA PÁDEL", url: "https://atilapadel.com" }],
  category: "Deportes",
  keywords: [
    "canchas de pádel",
    "canchas de pádel en Argentina",
    "instalación de canchas de pádel",
    "fabricar canchas de pádel",
    "cancha de pádel profesional",
    "canchas de pádel personalizadas",
    "complejo de pádel",
    "canchas panorámicas",
    "pádel Argentina",
    "ATILA pádel",
  ],
  alternates: { canonical: "https://atilapadel.com" },
  robots: { index: true, follow: true },
  verification: { other: { "google-site-verification": "" } },
  other: {
    "last-modified": "2026-05-05",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta property="og:title" content="ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina | Diseño e Instalación" />
        <meta property="og:description" content="Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atilapadel.com" />
        <meta property="og:site_name" content="ATILA PÁDEL" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:image" content="https://atilapadel.com/logoFinalBlanco.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ATILA PÁDEL — Canchas de Pádel Profesionales" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://atilapadel.com/logoFinalBlanco.png" />
        <meta name="twitter:title" content="ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina" />
        <meta name="twitter:description" content="Fabricamos e instalamos canchas de pádel profesionales en Argentina." />
        <style>{`
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          body {
            font-family: 'Praktika', sans-serif;
            font-weight: 300;
          }
        `}</style>
      </head>
      <body className="bg-atila-black text-atila-white antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
