import type { Metadata } from "next";
import { Inter, Italiana } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { CustomCursor } from "@/components/bossa/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
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
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
