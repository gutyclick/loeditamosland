import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LoEditamos — Soluciones digitales",
    short_name: "LoEditamos",
    description: "Diseño web, aplicaciones y edición profesional de video.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FAFC",
    theme_color: "#7C3AED",
    lang: "es-PA",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }]
  };
}
