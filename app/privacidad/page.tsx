import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
export const metadata: Metadata = { title: "Política de privacidad", description: "Conoce cómo LoEditamos recopila, utiliza y protege tu información personal.", alternates: { canonical: "/privacidad" }, robots: { index: false, follow: true } };
export default function PrivacyPage(){return <LegalPage eyebrow="INFORMACIÓN LEGAL" title="Política de privacidad" intro="Tu privacidad importa. Aquí explicamos con claridad qué información recibimos y cómo la utilizamos." sections={[
  {title:"1. Información que recopilamos",paragraphs:["Recopilamos únicamente los datos que proporcionas voluntariamente mediante nuestros formularios o conversaciones por WhatsApp, como tu nombre, tipo de proyecto, fecha estimada y descripción."]},
  {title:"2. Cómo utilizamos la información",paragraphs:["Utilizamos esta información para responder solicitudes, preparar propuestas, coordinar proyectos y mejorar nuestros servicios. No vendemos ni alquilamos información personal."]},
  {title:"3. WhatsApp y servicios externos",paragraphs:["Al enviar una cotización por WhatsApp, la comunicación también queda sujeta a las políticas de privacidad de WhatsApp y Meta. Los servicios de alojamiento o analítica que se incorporen podrán procesar datos técnicos esenciales para operar la web."]},
  {title:"4. Conservación y seguridad",paragraphs:["Conservamos la información durante el tiempo necesario para atender la solicitud o cumplir obligaciones legales. Aplicamos medidas razonables para evitar accesos no autorizados."]},
  {title:"5. Tus derechos",paragraphs:["Puedes solicitar acceso, corrección o eliminación de tus datos escribiéndonos mediante el número de WhatsApp publicado en esta web."]},
  {title:"6. Cambios",paragraphs:["Podemos actualizar esta política para reflejar cambios operativos o legales. La fecha de actualización se mostrará al inicio del documento."]}
]}/>}
