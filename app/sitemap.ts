import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const lastModified=new Date(); return [
  { url: "https://loeditemos.com", lastModified, changeFrequency: "monthly", priority: 1 },
  { url: "https://loeditemos.com/privacidad", lastModified, changeFrequency: "yearly", priority: .2 },
  { url: "https://loeditemos.com/terminos", lastModified, changeFrequency: "yearly", priority: .2 },
  { url: "https://loeditemos.com/cookies", lastModified, changeFrequency: "yearly", priority: .2 }
]; }
