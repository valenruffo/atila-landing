import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atilapadel.com"),
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
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/isologotipo-page3.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina | Diseño e Instalación",
    description:
      "Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento.",
    type: "website",
    url: "https://atilapadel.com",
    siteName: "ATILA PÁDEL",
    locale: "es_AR",
    images: [
      {
        url: "/isologotipo-page3.png",
        width: 512,
        height: 512,
        alt: "ATILA PÁDEL — Canchas de Pádel Profesionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina",
    description:
      "Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento.",
    images: ["/isologotipo-page3.png"],
  },
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/isologotipo-page3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/isologotipo-page3.png" />
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
      </body>
    </html>
  );
}
