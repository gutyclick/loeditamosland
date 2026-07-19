import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://loeditemos.com"),
  title: "LoEditamos | Diseño web, aplicaciones y edición de video",
  description: "Creamos páginas web, plataformas, aplicaciones Android y contenido audiovisual a medida para empresas, negocios y creadores.",
  keywords: ["diseño web", "aplicaciones Android", "edición de video", "Panamá", "landing pages"],
  alternates: { canonical: "/" },
  openGraph: { title: "LoEditamos | Soluciones digitales a medida", description: "Web, apps y video para hacer crecer tu negocio.", url: "/", siteName: "LoEditamos", locale: "es_PA", type: "website" },
  twitter: { card: "summary_large_image", title: "LoEditamos | Soluciones digitales a medida", description: "Web, apps y video para hacer crecer tu negocio." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${inter.variable} ${manrope.variable}`}><body>{children}</body></html>;
}
