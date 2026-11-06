import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { navLinks, site, whatsappUrl } from "@/config/site";
import { Logo } from "./Header";

export function Footer() {
  return <footer className="border-t border-ink-border bg-ink text-ink-foreground"><div className="container-luxe py-16 md:py-20">
    <div className="grid gap-12 md:grid-cols-12"><div className="md:col-span-5"><Logo light /><p className="mt-7 max-w-sm text-sm leading-relaxed text-ink-muted">Uma odontologia mais humana, com técnica, escuta e cuidado para deixar você seguro em cada escolha.</p><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky hover:text-white">Agende sua consulta <ArrowUpRight className="size-4" /></a></div>
      <div className="md:col-span-2 md:col-start-7"><p className="eyebrow text-sky">Navegação</p><ul className="mt-5 space-y-3 text-sm text-ink-muted">{navLinks.map(l => <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>)}</ul></div>
      <div className="md:col-span-3"><p className="eyebrow text-sky">Atendimento</p><div className="mt-5 space-y-3 text-sm leading-relaxed text-ink-muted"><p>{site.address}<br />{site.city}</p><a className="block hover:text-white" href={`tel:${site.phoneHref}`}>{site.phone}</a><a className="block hover:text-white" href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagram}</a></div></div></div>
    <div className="mt-14 flex flex-col justify-between gap-3 border-t border-ink-border pt-5 text-xs text-ink-muted md:flex-row"><p>© {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.</p><p>{site.professional} · {site.cro}</p></div>
  </div></footer>;
}

export function WhatsAppFloat() { return <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp" className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/30 ring-1 ring-white/15 transition hover:scale-105 hover:bg-sky"><MessageCircle className="size-6" strokeWidth={1.5} /></a>; }
