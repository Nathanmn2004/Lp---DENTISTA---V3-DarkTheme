import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { mapsDirectionsUrl, mapsEmbedUrl, site, whatsappUrl, type Treatment } from "@/config/site";
import { Eyebrow, Reveal } from "./Reveal";
import { lb } from "./Buttons";
import portrait from "@/assets/portrait.jpg";

export function TreatmentCard({ t, index }: { t: Treatment; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.12}>
      <article className="group transition-transform duration-500 hover:-translate-y-1">
        <Link to="/tratamentos" hash={t.slug} className="block">
          <div className="relative overflow-hidden aspect-[4/5] rounded-t-[2rem] bg-muted">
            <img src={t.image} alt={t.title} loading="lazy" width={1200} height={1500}
              className="h-full w-full object-cover img-zoom group-hover:scale-[1.04]" />
            <span className="absolute left-5 top-5 font-serif text-lg text-ink-foreground/90">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="pt-6 border-b border-border pb-6">
            <h3 className="text-3xl leading-tight">{t.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm">{t.short}</p>
            <span className="mt-5 inline-flex items-center gap-2 eyebrow text-foreground">
              Saiba mais
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.3} />
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}

export function ProfessionalSection() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5 relative">
          <div className="overflow-hidden">
            <img src={portrait} alt={`Retrato de ${site.professional}`} loading="lazy" width={1200} height={1504}
              className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:block border border-champagne px-6 py-4 bg-background">
            <p className="eyebrow text-olive">{site.cro}</p>
          </div>
        </Reveal>
        <div className="md:col-span-7">
          <Reveal><Eyebrow>O profissional</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 text-5xl md:text-7xl leading-[1.02]">
              Excelência em cada detalhe. <em className="text-olive">Cuidado em cada encontro.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 font-serif text-3xl">{site.professional}</p>
            <p className="mt-1 text-sm text-muted-foreground">{site.title} · {site.cro}</p>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              [Biografia: trajetória acadêmica, formação, filosofia de atendimento e diferenciais. Substitua este texto
              por informações reais e verificáveis.]
            </p>
            <dl className="mt-10 grid sm:grid-cols-2 gap-6 max-w-xl">
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-olive">Formação</dt>
                <dd className="mt-2 text-sm">{site.education}</dd>
              </div>
              <div className="border-t border-border pt-4">
                <dt className="eyebrow text-olive">Especialidades</dt>
                <dd className="mt-2 text-sm">{site.specialties.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="section-dark text-ink-foreground py-28 md:py-40 relative overflow-hidden">
      <div className="container-luxe text-center">
        <Reveal><div className="flex justify-center"><Eyebrow light>Agendamento</Eyebrow></div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-10 text-5xl md:text-8xl leading-[1] max-w-5xl mx-auto">
            Seu próximo sorriso começa com <em className="text-champagne">uma conversa.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-10 text-ink-muted max-w-lg mx-auto leading-relaxed">
            Agende uma avaliação e descubra um atendimento pensado especialmente para você.
          </p>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className={lb({ variant: "light", className: "mt-12" })}>
            <MessageCircle className="size-4" strokeWidth={1.4} /> Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  const items = [
    { icon: MapPin, label: "Endereço", value: <>{site.address}<br />{site.city} · {site.zip}</> },
    { icon: Phone, label: "Telefone", value: <a href={`tel:${site.phoneHref}`} className="link-underline">{site.phone}</a> },
    { icon: MessageCircle, label: "WhatsApp", value: <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="link-underline">Enviar mensagem</a> },
    { icon: Instagram, label: "Instagram", value: <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="link-underline">{site.instagram}</a> },
  ];
  return (
    <section className="py-28 md:py-36">
      <div className="container-luxe grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>Localização & contato</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-8 text-5xl md:text-6xl leading-[1.05]">Um endereço pensado para receber você.</h2></Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-12 space-y-7">
              {items.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-5">
                  <Icon className="size-5 text-olive mt-1 shrink-0" strokeWidth={1.2} />
                  <div><p className="eyebrow text-muted-foreground">{label}</p><p className="mt-1">{value}</p></div>
                </li>
              ))}
              <li className="flex gap-5">
                <Clock className="size-5 text-olive mt-1 shrink-0" strokeWidth={1.2} />
                <div className="w-full max-w-xs">
                  <p className="eyebrow text-muted-foreground">Horário</p>
                  {site.hours.map((h) => (
                    <p key={h.day} className="mt-1 flex justify-between text-sm"><span>{h.day}</span><span className="text-muted-foreground">{h.time}</span></p>
                  ))}
                </div>
              </li>
            </ul>
            <a href={mapsDirectionsUrl()} target="_blank" rel="noreferrer" className={lb({ variant: "outline", className: "mt-12" })}>
              Abrir rotas no Google Maps <ArrowUpRight className="size-4" strokeWidth={1.3} />
            </a>
          </Reveal>
        </div>
        <Reveal className="lg:col-span-7" delay={0.15}>
          <iframe
            title="Mapa do consultório"
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[420px] lg:h-full min-h-[420px] border border-border brightness-[.72] contrast-[1.05] grayscale-[35%]"
          />
        </Reveal>
      </div>
    </section>
  );
}
