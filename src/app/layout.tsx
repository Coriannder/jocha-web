import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Josefina | Psicología Online para Argentinos en el Exterior",
  description: "Acompañamiento profesional desde Florencia, Italia, especializado en duelo migratorio y ansiedad. Reconectá con tus raíces.",
  keywords: ["psicología online", "expatriados", "argentinos en el exterior", "duelo migratorio", "terapia online", "ansiedad"],
  authors: [{ name: "Josefina Dominguez Lovaglio" }],
  openGraph: {
    title: "Josefina | Psicología Online para Argentinos",
    description: "Acompañamiento profesional especializado en procesos migratorios desde Florencia, Italia.",
    url: "https://josefinapsi.com",
    siteName: "Josefina Psicología",
    images: [
      {
        url: "/images/jocha-portrait.png",
        width: 800,
        height: 1000,
        alt: "Josefina Dominguez Lovaglio - Psicóloga",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josefina | Psicología Online",
    description: "Acompañamiento profesional especializado en procesos migratorios.",
    images: ["/images/jocha-portrait.png"],
  },
  icons: {
    icon: "/images/jocha-portrait.png",
    shortcut: "/images/jocha-portrait.png",
    apple: "/images/jocha-portrait.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
