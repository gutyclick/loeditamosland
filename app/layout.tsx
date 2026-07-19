import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loeditamos.com"),
  applicationName: "LoEditamos",
  title: { default: "LoEditamos | Diseño web, aplicaciones y edición de video", template: "%s | LoEditamos" },
  description: "Creamos páginas web, plataformas, aplicaciones Android y contenido audiovisual a medida para empresas, negocios y creadores.",
  keywords: ["diseño web", "desarrollo web", "páginas web", "landing pages", "plataformas a medida", "aplicaciones Android", "edición de video", "edición de reels", "agencia digital", "Panamá"],
  authors: [{ name: "LoEditamos", url: "https://www.loeditamos.com" }],
  creator: "LoEditamos",
  publisher: "LoEditamos",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: { title: "LoEditamos | Soluciones digitales a medida", description: "Diseñamos páginas web, plataformas, aplicaciones y contenido audiovisual para hacer crecer tu negocio.", url: "/", siteName: "LoEditamos", locale: "es_PA", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "LoEditamos — Diseño web, aplicaciones y edición de video" }] },
  twitter: { card: "summary_large_image", title: "LoEditamos | Soluciones digitales a medida", description: "Web, aplicaciones y video para hacer crecer tu negocio.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${inter.variable} ${manrope.variable}`}><body>{children}<Analytics /></body></html>;
}
