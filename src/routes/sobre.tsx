import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaSection, ProfessionalSection } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import detail from "@/assets/detail.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Profissional | Atelier Odonto" },
      { name: "description", content: "Conheça a trajetória, a formação e a filosofia de atendimento do profissional responsável pelo Atelier Odonto." },
      { property: "og:title", content: "Sobre o Profissional — Atelier Odonto" },
      { property: "og:description", content: "Trajetória, formação e filosofia de cuidado em odontologia boutique." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Sobre o profissional"
        title={<>Ciência, sensibilidade e <em className="text-olive">tempo para ouvir.</em></>}
        intro="Uma prática odontológica construída sobre formação sólida, atualização constante e respeito à individualidade de cada paciente."
      />
      <ProfessionalSection />
      <section className="border-y border-border bg-secondary py-28">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="rounded-3xl border border-white/10 bg-card/55 p-8 shadow-[0_20px_50px_rgba(0,0,0,.12)] md:col-span-6 md:p-10">
            <p className="font-serif text-4xl md:text-5xl leading-tight italic">
              “[Frase do profissional sobre sua filosofia de atendimento.]”
            </p>
          </Reveal>
          <Reveal delay={0.15} className="image-frame overflow-hidden rounded-[2rem] md:col-span-5 md:col-start-8">
            <img src={detail} alt="Detalhe do consultório" loading="lazy" width={1200} height={1504} className="w-full aspect-[4/5] object-cover" />
          </Reveal>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
