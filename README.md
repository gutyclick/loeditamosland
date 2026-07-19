# LoEditamos — Landing page

Landing responsive construida con Next.js App Router, TypeScript, Tailwind CSS, Motion, React Hook Form, Zod y Lucide React.

## Ejecutar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Validaciones

```bash
npm run lint
npm run build
```

## Configuración

- El WhatsApp está configurado mediante `WHATSAPP_NUMBER` en `components/landing/LandingPage.tsx`, incluyendo código de país y sin símbolos.
- El formulario crea una solicitud detallada y la envía directamente por WhatsApp.
- Actualiza los enlaces de redes sociales y textos legales antes de producción.
- El proyecto no requiere variables de entorno en su estado actual.

Está preparado para desplegarse directamente en Vercel.
