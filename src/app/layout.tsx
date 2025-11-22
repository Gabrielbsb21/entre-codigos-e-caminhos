import { Roboto } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Entre Códigos e Caminhos",
  description:
    "Blog pessoal onde compartilho minha jornada como desenvolvedor, meus aprendizados, reflexões e tudo o que encontro entre códigos e caminhos. Construído com foco em simplicidade, performance e escrita autêntica.",
  keywords: [
    "desenvolvimento",
    "programação",
    "frontend",
    "backend",
    "acessibilidade",
    "tecnologia",
    "dev",
    "blog",
    "experiência pessoal",
    "gastronomia",
  ],
  authors: [{ name: "Gabriel Silva" }],
  creator: "Gabriel Silva",
  metadataBase: new URL("https://entre-codigos-e-caminhos.vercel.app"),
  openGraph: {
    title: "Entre Códigos e Caminhos",
    description:
      "Minha jornada como dev — aprendizados, reflexões e tudo entre códigos e caminhos.",
    type: "website",
    url: "https://entre-codigos-e-caminhos.vercel.app",
    siteName: "Entre Códigos e Caminhos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
