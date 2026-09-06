import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vela Capixaba — Escola de Vela em Vitória/ES",
  description:
    "Escola de vela certificada pela World Sailing e FECAI, na Praia da Guarderia em Vitória-ES. Cursos para iniciantes, avançados, treinamento para regatas e passeios de veleiro.",
  keywords: [
    "escola de vela",
    "curso de vela",
    "Vitoria ES",
    "Vela Capixaba",
    "Praia da Guarderia",
    "Centro Nautico Capixaba",
  ],
  openGraph: {
    title: "Vela Capixaba — Escola de Vela em Vitória/ES",
    description:
      "Curso de vela para iniciantes, avançados, regatas e passeios. Certificado pela World Sailing e FECAI.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
