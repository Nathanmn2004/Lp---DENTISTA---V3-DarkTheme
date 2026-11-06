import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { activeTreatments, whatsappUrl } from "@/config/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { lb } from "@/components/site/Buttons";

export const Route = createFileRoute("/tratamentos")({
  head: () => ({
    meta: [
      { title: "Tratamentos Odontológicos | Lentes, Implantes, Clareamento — Atelier Odonto" },
      { name: "description", content: "Lentes de contato dental, clareamento, implantes, ortodontia, harmonização do sorriso e odontologia preventiva com planejamento individualizado." },
      { property: "og:title", content: "Tratamentos — Atelier Odonto" },
      { property: "og:description", content: "Tratamentos odontológicos planejados de forma individual e criteriosa." },
    ],
  }),
  component: Tratamentos,
});

function Tratamentos() {
  return (
    <>
      <PageHero
        eyebrow="Tratamentos"
        title={<>Cada sorriso, <em className="text-olive">um planejamento único.</em></>}
        intro="As indicações são sempre definidas após avaliação clínica completa. Não há promessas de resultado — há cuidado, critério e transparência."
      />
      <div className="container-luxe pb-28 space-y-28 md:space-y-40">
        {activeTreatments().map((t, i) => (
          <section key={t.slug} id={t.slug} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center scroll-mt-32">
            <Reveal className={`image-frame rounded-[2rem] md:col-span-6 group ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}>
              <img src={t.image} alt={t.title} loading="lazy" width={1200} height={1500} className="w-full aspect-[4/5] md:aspect-[5/6] object-cover img-zoom group-hover:scale-[1.03]" />
            </Reveal>
            <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : "md:col-start-8"}`}>
              <Reveal><span className="font-serif text-7xl text-champagne/70 font-light">{String(i + 1).padStart(2, "0")}</span></Reveal>
              <Reveal delay={0.1}><h2 className="mt-4 text-5xl md:text-6xl leading-[1.02]">{t.title}</h2></Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 text-muted-foreground leading-relaxed">{t.description}</p>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer" className={lb({ variant: "outline", className: "mt-10" })}>
                  Agendar avaliação <ArrowRight className="size-4" strokeWidth={1.3} />
                </a>
              </Reveal>
            </div>
          </section>
        ))}
      </div>
      <CtaSection />
    </>
  );
}
