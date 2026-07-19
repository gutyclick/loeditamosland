import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
export const metadata: Metadata = { title: "Política de cookies", description: "Información sobre el uso de cookies y tecnologías similares en LoEditamos.", alternates: { canonical: "/cookies" } };
export default function CookiesPage(){return <LegalPage eyebrow="INFORMACIÓN LEGAL" title="Política de cookies" intro="Explicamos qué son las cookies y cómo pueden utilizarse en esta web." sections={[
  {title:"1. Qué son las cookies",paragraphs:["Las cookies son pequeños archivos que un sitio puede guardar en tu navegador para recordar preferencias, mantener funciones esenciales o comprender cómo se utiliza la web."]},
  {title:"2. Cookies esenciales",paragraphs:["Podemos utilizar cookies estrictamente necesarias para seguridad, funcionamiento y preferencias básicas. Estas no se utilizan para crear perfiles publicitarios."]},
  {title:"3. Analítica",paragraphs:["Si incorporamos herramientas de analítica, podremos medir visitas y uso de forma agregada para mejorar la experiencia. Cuando corresponda, solicitaremos consentimiento antes de activar tecnologías no esenciales."]},
  {title:"4. Servicios de terceros",paragraphs:["Los enlaces a WhatsApp, Instagram u otros servicios externos pueden llevarte a plataformas que utilizan sus propias cookies y políticas."]},
  {title:"5. Cómo controlarlas",paragraphs:["Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Deshabilitar algunas cookies esenciales podría afectar determinadas funciones."]},
  {title:"6. Actualizaciones",paragraphs:["Actualizaremos esta política cuando cambien las tecnologías utilizadas o los requisitos aplicables."]}
]}/>}
