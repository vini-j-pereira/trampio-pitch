import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Trampio Pitch Deck | O Sistema Operacional do Autônomo",
  description: "Apresentação estratégica da Trampio para investidores. Transformando a informalidade em estrutura, eficiência e previsibilidade.",
  openGraph: {
    title: "Trampio Pitch Deck",
    description: "Conheça a tese de investimento da Trampio.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}
