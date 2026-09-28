import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "El Gran T´Zunun - La Aventura Te Espera | Parque Natural",
  description: "Descubre la aventura y la naturaleza en El Gran T´Zunun: tirolesas panorámicas, cenotes sagrados, hospedaje rústico, gastronomía maya y pasadías todo incluido en la selva.",
  keywords: ["El Gran TZunun", "cenotes yucatan", "tirolesas maya", "parque aventura selva", "pasadias cancun merida", "glamping yucatan"],
  openGraph: {
    title: "El Gran T´Zunun - Parque de Naturaleza y Aventura",
    description: "Tirolesas sobre la copa de los árboles, cenotes cristalinos milenarios y descanso idílico en el corazón verde de la península.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e] antialiased selection:bg-[#85f8c4] selection:text-[#002114]">
        {children}
      </body>
    </html>
  );
}
