import { LandingPage } from "@/components/landing/LandingPage";
import { faqs } from "@/components/landing/data";

export default function Page() {
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "Organization", name: "LoEditamos", url: "https://loeditemos.com", telephone: "+1-551-309-0145" },
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: "LoEditamos", url: "https://loeditemos.com", areaServed: "PA", serviceType: ["Diseño web", "Desarrollo de aplicaciones", "Edición de video"] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }
  ];
  return <><LandingPage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /></>;
}
