import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina | Diseño e Instalación",
  description:
    "Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento. Solicitá tu presupuesto.",
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
    icon: [
      { url: "/isologotipo-page3.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/isologotipo-page3.png", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "ATILA PÁDEL — Canchas de Pádel Profesionales en Argentina | Diseño e Instalación",
    description:
      "Fabricamos e instalamos canchas de pádel profesionales en Argentina. Diseño personalizado, estructura certificada y césped de alto rendimiento.",
    type: "website",
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
        <style>{`
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 800;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Praktika';
            src: url('/fonts/Praktika-Light.woff2') format('woff2'),
                 url('/fonts/Praktika-Light.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: swap;
          }
          body { font-family: 'Praktika', sans-serif; }
        `}</style>
      </head>
      <body className="bg-atila-black text-atila-white antialiased">
        {children}
      </body>
    </html>
  );
}
