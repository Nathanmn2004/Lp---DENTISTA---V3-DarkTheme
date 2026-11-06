import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection, CtaSection } from "@/components/site/Sections";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Localização | Agende sua Consulta — Atelier Odonto" },
      { name: "description", content: "Endereço, telefone, WhatsApp, horário de atendimento e rotas para o consultório. Agende sua avaliação odontológica." },
      { property: "og:title", content: "Contato — Atelier Odonto" },
      { property: "og:description", content: "Agende sua avaliação odontológica pelo WhatsApp." },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={<>Vamos conversar sobre <em className="text-olive">o seu sorriso.</em></>}
        intro="Estamos à disposição para esclarecer dúvidas e agendar sua avaliação com toda a atenção que você merece."
      />
      <ContactSection />
      <CtaSection />
    </>
  );
}
