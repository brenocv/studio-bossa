import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// Fontes auto-hospedadas (não dependem do Google Fonts no build)
const inter = localFont({
  variable: "--font-inter",
  src: [{ path: "./fonts/Inter-Variable.woff2", weight: "300 700", style: "normal" }],
  display: "swap",
});

const italiana = localFont({
  variable: "--font-italiana",
  src: [{ path: "./fonts/Italiana-Regular.woff2", weight: "400", style: "normal" }],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studio Bossa — Design de Interiores & Arquitetura de Alto Padrão",
  description:
    "Studio Bossa — estúdio de design de interiores no Porto, Portugal. Projetos autorais com materiais nobres — couro, madeira, linho e pedra natural. Naturalidade, sofisticação e singularidade de habitar.",
  keywords: [
    "Studio Bossa",
    "design de interiores",
    "arquitetura",
    "reformas",
    "projetos 3D",
    "quiet luxury",
    "interiores sofisticados",
    "Porto",
    "Portugal",
  ],
  authors: [{ name: "Studio Bossa" }],
  openGraph: {
    title: "Studio Bossa — Design de Interiores",
    description:
      "Naturalidade, sofisticação e singularidade de habitar. Projetos autorais de design de interiores no Porto, Portugal.",
    siteName: "Studio Bossa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${italiana.variable} antialiased bg-linho-cru text-jacaranda`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
