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

import Script from "next/script";

export const metadata: Metadata = {
  title: "Josefina | Psicología Online para Argentinos en el Exterior",
  description: "Acompañamiento profesional desde Florencia, Italia, especializado en duelo migratorio y ansiedad. Reconectá con tus raíces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} antialiased`}
      >
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
