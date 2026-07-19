import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
export const metadata: Metadata = { title: "Términos y condiciones | LoEditamos", description: "Términos generales aplicables a los servicios digitales de LoEditamos.", alternates: { canonical: "/terminos" } };
export default function TermsPage(){return <LegalPage eyebrow="INFORMACIÓN LEGAL" title="Términos y condiciones" intro="Estas condiciones establecen las reglas generales para solicitar y contratar nuestros servicios." sections={[
  {title:"1. Alcance de los servicios",paragraphs:["LoEditamos ofrece diseño y desarrollo web, plataformas, aplicaciones y edición audiovisual. El alcance específico, entregables, tiempos y costos se definen en una propuesta aceptada por ambas partes."]},
  {title:"2. Cotizaciones",paragraphs:["Las solicitudes enviadas desde esta web son informativas y no constituyen un contrato. La contratación comienza al aceptar una propuesta y cumplir las condiciones de inicio indicadas en ella."]},
  {title:"3. Contenido y colaboración",paragraphs:["El cliente debe proporcionar oportunamente textos, imágenes, accesos y aprobaciones necesarios. Los retrasos en estos insumos pueden modificar el calendario del proyecto."]},
  {title:"4. Revisiones y cambios",paragraphs:["Cada propuesta indica las revisiones incluidas. Solicitudes fuera del alcance podrán cotizarse por separado antes de realizarse."]},
  {title:"5. Propiedad intelectual",paragraphs:["Los derechos sobre el resultado final se transfieren según lo indicado en la propuesta y una vez completados los pagos acordados. Herramientas, licencias y recursos de terceros mantienen sus propias condiciones."]},
  {title:"6. Garantías y responsabilidad",paragraphs:["Trabajamos con cuidado profesional, pero no garantizamos resultados comerciales específicos. La disponibilidad de plataformas externas puede afectar temporalmente determinadas funciones."]}
]}/>}
