import { LandingPage } from "@/components/landing/LandingPage";
import { faqs } from "@/components/landing/data";

export default function Page() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Organization", "@id": "https://loeditemos.com/#organization", name: "LoEditamos", url: "https://loeditemos.com", logo: "https://loeditemos.com/icon.svg", telephone: "+1-551-309-0145", sameAs: ["https://instagram.com/loeditamos"], contactPoint: { "@type": "ContactPoint", telephone: "+1-551-309-0145", contactType: "sales", availableLanguage: ["Spanish"] } },
    { "@context": "https://schema.org", "@type": "ProfessionalService", "@id": "https://loeditemos.com/#service", name: "LoEditamos", url: "https://loeditemos.com", parentOrganization: { "@id": "https://loeditemos.com/#organization" }, areaServed: ["PA", "US", "MX", "CO"], serviceType: ["Diseño web", "Desarrollo de aplicaciones", "Edición de video"], hasOfferCatalog: { "@type": "OfferCatalog", name: "Servicios digitales", itemListElement: ["Landing pages", "Web corporativa", "Plataformas y aplicaciones", "Edición mensual de videos"].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
  ];
  return <><LandingPage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></>;
}
