import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappUrl } from "@/config/site";

export function Logo({ light }: { light?: boolean }) {
  return <Link to="/" className="flex items-center gap-3" aria-label={`${site.brand} — início`}>
    <span className={`grid size-10 place-items-center rounded-full text-xl font-serif ${light ? "bg-sky text-ink" : "bg-primary text-primary-foreground"}`}>a.</span>
    <span className="leading-none"><strong className={`block text-sm tracking-[.04em] ${light ? "text-ink-foreground" : "text-foreground"}`}>atelier</strong><small className="mt-1 block text-[.58rem] uppercase tracking-[.18em] text-coral">odontologia</small></span>
  </Link>;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 18); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/10 bg-background/85 py-3 shadow-[0_12px_40px_rgba(0,0,0,.22)] backdrop-blur-xl" : "py-5"}`}>
    <div className="container-luxe flex items-center justify-between"><Logo />
      <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">{navLinks.map(l => <Link key={l.to} to={l.to} className="text-sm font-medium text-foreground/70 hover:text-foreground" activeProps={{ className: "text-coral" }} activeOptions={{ exact: true }}>{l.label}</Link>)}</nav>
      <div className="flex items-center gap-3"><a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-primary-foreground transition hover:bg-coral sm:flex">Agendar <ArrowUpRight className="size-3.5" /></a>
      <button className="grid size-10 place-items-center rounded-full border border-border bg-card/70 transition hover:border-sky/60 hover:text-sky lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
    </div>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute inset-x-0 top-full border-b border-border bg-background/95 px-5 py-8 backdrop-blur-xl lg:hidden"><nav className="container-luxe flex flex-col gap-5" aria-label="Menu mobile">{navLinks.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="font-serif text-4xl transition hover:text-sky">{l.label}</Link>)}<a href={whatsappUrl()} target="_blank" rel="noreferrer" className="mt-2 rounded-full bg-primary px-5 py-4 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground">Agendar consulta</a></nav></motion.div>}</AnimatePresence>
  </header>;
}
