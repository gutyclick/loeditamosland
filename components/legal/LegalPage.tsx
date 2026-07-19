import Link from "next/link";

export type LegalSection = { title: string; paragraphs: string[] };

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return <><header className="legal-header"><div className="container"><Link className="logo" href="/">LoEditamos<span>.</span></Link><Link className="legal-back" href="/">Volver al inicio</Link></div></header><main className="legal-main"><div className="container legal-layout"><aside><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><small>Última actualización: 18 de julio de 2026</small></aside><article>{sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}</article></div></main><footer className="legal-footer"><div className="container"><span>© 2026 LoEditamos.</span><nav><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link><Link href="/cookies">Cookies</Link></nav></div></footer></>;
}
