import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const lastModified=new Date("2026-07-18"); return [
  { url: "https://www.loeditamos.com", lastModified, changeFrequency: "monthly", priority: 1 },
  { url: "https://www.loeditamos.com/servicios/diseno-desarrollo-web", lastModified, changeFrequency: "monthly", priority: .8 },
  { url: "https://www.loeditamos.com/servicios/landing-pages", lastModified, changeFrequency: "monthly", priority: .8 },
  { url: "https://www.loeditamos.com/servicios/plataformas-aplicaciones", lastModified, changeFrequency: "monthly", priority: .8 },
  { url: "https://www.loeditamos.com/servicios/edicion-video", lastModified, changeFrequency: "monthly", priority: .8 }
]; }
