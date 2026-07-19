import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/15513090145?text=${encodeURIComponent("Hola, quiero información sobre un proyecto con LoEditamos.")}`;

export type ServicePageData = {
  slug: string; eyebrow: string; title: string; accent: string; intro: string;
  outcomes: { title: string; text: string }[];
  includes: string[];
  process: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

const related = [
  ["Diseño y desarrollo web", "/servicios/diseno-desarrollo-web"],
  ["Landing pages", "/servicios/landing-pages"],
  ["Plataformas y aplicaciones", "/servicios/plataformas-aplicaciones"],
  ["Edición profesional de video", "/servicios/edicion-video"]
];

export function ServiceSeoPage({ data }: { data: ServicePageData }) {
  const url=`https://www.loeditamos.com/servicios/${data.slug}`;
  const jsonLd=[
    {"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Inicio",item:"https://www.loeditamos.com"},{"@type":"ListItem",position:2,name:"Servicios",item:"https://www.loeditamos.com/#servicios"},{"@type":"ListItem",position:3,name:data.title,item:url}]},
    {"@context":"https://schema.org","@type":"Service",name:data.title,description:data.intro,url,provider:{"@id":"https://www.loeditamos.com/#organization"},areaServed:["PA","US","MX","CO"],availableChannel:{"@type":"ServiceChannel",serviceUrl:url,servicePhone:"+1-551-309-0145"}},
    {"@context":"https://schema.org","@type":"FAQPage",mainEntity:data.faq.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))}
  ];
  return <><header className="service-header"><div className="container"><Link className="logo" href="/">LoEditamos<span>.</span></Link><nav><Link href="/#servicios">Servicios</Link><Link href="/#proyectos">Proyectos</Link><Link className="service-nav-cta" href="/#cotizacion">Solicitar cotización</Link></nav></div></header><main><section className="service-hero"><div className="container"><nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>/</span><Link href="/#servicios">Servicios</Link><span>/</span><strong>{data.title}</strong></nav><div className="service-hero-grid"><div><p className="eyebrow">{data.eyebrow}</p><h1>{data.title} <span>{data.accent}</span></h1><p>{data.intro}</p><div className="button-row"><a className="btn btn-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Hablar sobre mi proyecto<MessageCircle/></a><Link className="btn btn-secondary" href="/#cotizacion">Solicitar cotización<ArrowRight/></Link></div></div><aside><p>Diseñado para ayudarte a:</p>{data.outcomes.map(item=><div key={item.title}><CheckCircle2/><span><b>{item.title}</b><small>{item.text}</small></span></div>)}</aside></div></div></section><section className="service-content"><div className="container"><div className="service-copy"><p className="eyebrow">QUÉ INCLUYE</p><h2>Una solución pensada alrededor de tus objetivos.</h2><p>No empezamos por una plantilla. Primero entendemos qué necesita lograr tu negocio y luego definimos la experiencia, el contenido y la tecnología adecuada.</p></div><ul className="service-includes">{data.includes.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></div></section><section className="service-process"><div className="container"><div className="service-copy"><p className="eyebrow">NUESTRO PROCESO</p><h2>De una idea inicial a un resultado listo para crecer.</h2></div><div className="seo-process-grid">{data.process.map((item,index)=><article key={item.title}><span>0{index+1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section><section className="service-faq"><div className="container service-faq-grid"><div className="service-copy"><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Lo que conviene saber antes de empezar.</h2></div><div>{data.faq.map((item,index)=><details key={item.q} open={index===0}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></div></section><section className="related-services"><div className="container"><p className="eyebrow">OTROS SERVICIOS</p><h2>Conoce todas nuestras soluciones.</h2><div>{related.filter(([,href])=>!href.endsWith(data.slug)).map(([name,href])=><Link href={href} key={href}>{name}<ArrowRight/></Link>)}</div></div></section><section className="service-bottom-cta"><div className="container"><h2>Tu proyecto puede comenzar con una conversación clara.</h2><p>Cuéntanos qué necesitas y te ayudaremos a definir alcance, prioridades y próximos pasos.</p><Link className="btn cta-light" href="/#cotizacion">Cuéntanos tu idea<ArrowRight/></Link></div></section></main><footer className="legal-footer"><div className="container"><span>© 2026 LoEditamos.</span><nav><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link><Link href="/cookies">Cookies</Link></nav></div></footer><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/></>;
}
