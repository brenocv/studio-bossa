import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { img } from "@/components/bossa/imagePath";

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
  // Ícone do separador do navegador: logo "bossa" em branco sobre jacarandá
  icons: {
    icon: [
      { url: img("/icon.svg"), type: "image/svg+xml" },
      { url: img("/favicon.ico"), sizes: "48x48" },
      { url: img("/favicon-32.png"), type: "image/png", sizes: "32x32" },
      { url: img("/favicon-48.png"), type: "image/png", sizes: "48x48" },
      { url: img("/icon-192.png"), type: "image/png", sizes: "192x192" },
      { url: img("/icon-512.png"), type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: img("/apple-touch-icon.png"), sizes: "180x180" }],
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
