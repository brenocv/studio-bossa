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

// Os metadados de SEO (título, descrição, idiomas) estão em components/bossa/seo.ts
export const metadata: Metadata = {
  title: "Studio Bossa",
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
