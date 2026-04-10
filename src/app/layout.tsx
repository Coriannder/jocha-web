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
