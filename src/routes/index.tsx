import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, Check, Sparkles } from "lucide-react";
import { activeTreatments, site, whatsappUrl } from "@/config/site";
import { Eyebrow, Reveal } from "@/components/site/Reveal";
import { lb } from "@/components/site/Buttons";
import { ContactSection, CtaSection, TreatmentCard } from "@/components/site/Sections";
import hero from "@/assets/lifestyle.jpg";
import portrait from "@/assets/portrait.jpg";
import room from "@/assets/room.jpg";
import reception from "@/assets/reception.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Atelier Odonto | Odontologia que faz sentido para você" },
    { name: "description", content: "Odontologia contemporânea, precisa e humana. Conheça o Atelier Odonto." },
  ] }),
  component: Index,
});

const steps = [
  ["01", "Escuta", "Começamos entendendo seus objetivos, rotina e histórico."],
  ["02", "Clareza", "Apresentamos caminhos possíveis com informação transparente."],
  ["03", "Cuidado", "Construímos um plano preciso, no seu ritmo e com acompanhamento."],
];

function Index() {
  const reduce = useReducedMotion();
  const appear = (delay = 0) => ({ initial: reduce ? false : { opacity: 0, y: 26 }, animate: { opacity: 1, y: 0 }, transition: { duration: .8, delay, ease: [0.2, .8, .2, 1] as const } });
  return <>
    <section className="mesh relative overflow-hidden pt-28 md:pt-32">
      <div className="container-luxe grid min-h-[calc(100svh-2rem)] items-center gap-10 pb-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative z-10 lg:col-span-6 lg:pb-16">
          <motion.div {...appear()}><Eyebrow>Odontologia com propósito</Eyebrow></motion.div>
          <motion.h1 {...appear(.1)} className="mt-7 max-w-3xl text-[3.65rem] leading-[.91] sm:text-7xl xl:text-[6.7rem]">Seu sorriso,<br /><em className="text-coral">do seu jeito.</em></motion.h1>
          <motion.p {...appear(.22)} className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">Uma experiência odontológica mais leve, precisa e próxima. Porque cuidar do seu sorriso também é cuidar de como você se sente.</motion.p>
          <motion.div {...appear(.34)} className="mt-10 flex flex-wrap items-center gap-4"><a href={whatsappUrl()} target="_blank" rel="noreferrer" className={lb({ className: "px-7" })}>Quero agendar <ArrowRight className="size-4" /></a><Link to="/tratamentos" className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-sky decoration-2 underline-offset-8 transition hover:text-sky">Ver tratamentos <ArrowDownRight className="size-4" /></Link></motion.div>
          <motion.div {...appear(.46)} className="mt-14 flex max-w-md gap-6 border-t border-foreground/15 pt-5 text-xs leading-relaxed text-muted-foreground"><span className="font-serif text-3xl leading-none text-coral">+</span><p>Planos individualizados, tecnologia e tempo para você fazer escolhas com tranquilidade.</p></motion.div>
        </div>
        <motion.div initial={reduce ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.15, ease: [0.2,.8,.2,1] }} className="relative lg:col-span-6 lg:h-[calc(100svh-4rem)]">
          <div className="absolute -right-14 top-10 hidden size-44 rounded-full border-[18px] border-sky lg:block" />
          <img src={hero} alt="Paciente sorrindo" className="image-mask relative h-[62vh] min-h-[440px] w-full object-cover lg:h-full" width={1200} height={1504} />
           <div className="glass-panel absolute bottom-5 left-5 z-10 rounded-2xl px-5 py-4"><p className="eyebrow text-sky">Atelier Odonto</p><p className="mt-1 text-sm font-medium">Cuidado que começa ouvindo.</p></div>
        </motion.div>
      </div>
    </section>

    <section className="py-24 md:py-36"><div className="container-luxe grid gap-12 lg:grid-cols-12 lg:items-center">
      <Reveal className="lg:col-span-5"><div className="relative"><img src={portrait} alt={`Retrato de ${site.professional}`} className="image-mask aspect-[4/5] w-full object-cover" loading="lazy" /><span className="absolute -right-3 bottom-10 grid size-24 place-items-center rounded-full bg-coral text-center text-xs font-bold uppercase leading-tight tracking-wide text-white md:-right-10">sorriso<br />é encontro</span></div></Reveal>
      <div className="lg:col-span-6 lg:col-start-7"><Reveal><Eyebrow>Por trás de cada plano</Eyebrow></Reveal><Reveal delay={.1}><h2 className="mt-7 text-5xl leading-[.98] md:text-7xl">Menos pressa.<br /><em className="text-coral">Mais presença.</em></h2></Reveal><Reveal delay={.2}><p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">Não acreditamos em soluções iguais para todos. Aqui, a consulta é um espaço de conversa: você entende cada possibilidade antes de decidir o próximo passo.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{["Avaliação criteriosa", "Planejamento digital", "Acompanhamento próximo", "Ambiente acolhedor"].map(text => <p key={text} className="flex items-center gap-3 border-t border-border pt-4 text-sm font-medium"><Check className="size-4 text-coral" />{text}</p>)}</div><Link to="/sobre" className={lb({ variant: "outline", className: "mt-10 rounded-full" })}>Conheça nossa abordagem</Link></Reveal></div>
    </div></section>

    <section className="section-dark py-24 text-ink-foreground md:py-32"><div className="container-luxe"><Reveal><Eyebrow light>Especialidades</Eyebrow></Reveal><div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end"><Reveal><h2 className="max-w-2xl text-5xl leading-[.98] md:text-7xl">O que faz sentido <em className="text-sky">para você.</em></h2></Reveal><Link to="/tratamentos" className="text-sm font-semibold text-sky underline underline-offset-8">Explorar todos os tratamentos</Link></div>
      <div className="mt-14 grid gap-4 md:grid-cols-3">{activeTreatments().slice(0,3).map((t, i) => <Reveal key={t.slug} delay={i*.1}><Link to="/tratamentos" hash={t.slug} className="treatment-card group block overflow-hidden rounded-2xl border border-white/10 bg-white/[.06] p-4 transition hover:-translate-y-1 hover:border-sky/40 hover:bg-white/[.10]"><img src={t.image} alt={t.title} className="h-56 w-full rounded-xl object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]" loading="lazy" /><div className="flex items-start justify-between gap-3 px-2 pb-2 pt-5"><div><p className="eyebrow text-sky">0{i+1}</p><h3 className="mt-2 text-3xl">{t.title}</h3></div><ArrowRight className="mt-3 size-5 text-sky" /></div></Link></Reveal>)}</div>
    </div></section>

    <section className="dot-grid py-24 md:py-36"><div className="container-luxe"><Reveal><Eyebrow>Como funciona</Eyebrow></Reveal><div className="mt-8 grid gap-8 lg:grid-cols-12"><Reveal className="lg:col-span-5"><h2 className="text-5xl leading-[.98] md:text-7xl">Um processo<br />simples e <em className="text-coral">seu.</em></h2></Reveal><div className="grid gap-3 lg:col-span-6 lg:col-start-7">{steps.map(([number,title,description], i) => <Reveal key={number} delay={i*.1}><article className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-[0_14px_34px_rgba(0,0,0,.12)] transition hover:border-sky/40"><span className="font-serif text-3xl text-coral">{number}</span><div><h3 className="text-3xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></div></article></Reveal>)}</div></div></div></section>

    <section className="py-20 md:py-28"><div className="container-luxe grid gap-4 md:grid-cols-12"><Reveal className="image-frame rounded-2xl md:col-span-8"><img src={room} alt="Ambiente do consultório" className="h-[420px] w-full rounded-2xl object-cover md:h-[560px]" loading="lazy" /></Reveal><Reveal delay={.15} className="flex flex-col justify-between rounded-2xl border border-border bg-secondary p-8 shadow-[0_20px_45px_rgba(0,0,0,.14)] md:col-span-4"><Sparkles className="size-8 text-sky" /><div><Eyebrow>Nosso espaço</Eyebrow><h2 className="mt-5 text-4xl leading-none">Um lugar para respirar.</h2><p className="mt-5 text-sm leading-relaxed text-muted-foreground">Luz, conforto e atenção aos detalhes para que sua consulta comece bem antes do atendimento.</p></div></Reveal></div></section>
    <CtaSection /><ContactSection />
  </>;
}
