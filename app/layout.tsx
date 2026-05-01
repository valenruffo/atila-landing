import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATILA PÁDEL — Canchas Profesionales Llave en Mano",
  description:
    "Diseñamos y construimos tu complejo de pádel con la más alta calidad. Canchas profesionales, panorámicas y Competition Pro. Diseño, instalación y garantía total.",
  keywords: ["pádel", "canchas de pádel", "complejo de pádel", "construcción", "Argentina"],
  openGraph: {
    title: "ATILA PÁDEL — Canchas Profesionales Llave en Mano",
    description:
      "Diseñamos y construimos tu complejo de pádel con la más alta calidad. Canchas profesionales, panorámicas y Competition Pro.",
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
