// Configuração central do site — edite aqui os dados reais do profissional.
import smile from "@/assets/smile.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import instruments from "@/assets/instruments.jpg";
import aligner from "@/assets/aligner.jpg";
import detail from "@/assets/detail.jpg";
import room from "@/assets/room.jpg";

export const site = {
  brand: "Atelier Odonto", // [Nome da clínica]
  professional: "Dr(a). [Nome do Profissional]",
  title: "Cirurgiã(o)-Dentista",
  cro: "CRO-[UF] [00000]",
  rt: "Responsável Técnico: Dr(a). [Nome] — CRO-[UF] [00000]",
  education: "[Graduação — Instituição]",
  specialties: ["[Especialidade 1]", "[Especialidade 2]", "[Especialidade 3]"],
  phone: "(11) 0000-0000",
  phoneHref: "+551100000000",
  whatsapp: "5511900000000", // apenas números, com DDI e DDD
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação odontológica.",
  email: "contato@seudominio.com.br",
  instagram: "@seuinstagram",
  instagramUrl: "https://instagram.com/",
  address: "[Rua Exemplo, 000 — Sala 00]",
  city: "[Bairro, Cidade — UF]",
  zip: "[00000-000]",
  mapsQuery: "Avenida Paulista, São Paulo", // usado no mapa e nas rotas
  hours: [
    { day: "Segunda a Sexta", time: "08h às 19h" },
    { day: "Sábado", time: "08h às 12h" },
    { day: "Domingo", time: "Fechado" },
  ],
};

export const whatsappUrl = () =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mapsEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
export const mapsDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapsQuery)}`;

export type Treatment = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  enabled: boolean;
};

// Ative/desative conforme as habilitações reais do profissional.
export const treatments: Treatment[] = [
  {
    slug: "lentes",
    title: "Lentes de contato dental",
    short: "Laminados ultrafinos planejados com precisão para harmonia e naturalidade.",
    description:
      "Planejamento digital individualizado e confecção de laminados cerâmicos de espessura mínima, respeitando a anatomia e a expressão de cada paciente. A indicação é definida após avaliação clínica.",
    image: smile,
    enabled: true,
  },
  {
    slug: "clareamento",
    title: "Clareamento dental",
    short: "Protocolos supervisionados para um sorriso mais luminoso, com segurança.",
    description:
      "Técnicas de consultório e caseiras supervisionadas, com acompanhamento profissional para conforto e sensibilidade controlada. Resultados variam de acordo com cada caso.",
    image: lifestyle,
    enabled: true,
  },
  {
    slug: "implantes",
    title: "Implantes dentários",
    short: "Reabilitação planejada com tecnologia e cuidado em cada etapa.",
    description:
      "Planejamento com exames de imagem e abordagem criteriosa para devolver função e estética, sempre com indicação baseada em avaliação completa.",
    image: instruments,
    enabled: true,
  },
  {
    slug: "ortodontia",
    title: "Ortodontia",
    short: "Alinhadores e aparelhos para um posicionamento equilibrado dos dentes.",
    description:
      "Opções ortodônticas contemporâneas, incluindo alinhadores transparentes, com acompanhamento periódico e planejamento personalizado.",
    image: aligner,
    enabled: true,
  },
  {
    slug: "harmonizacao",
    title: "Harmonização do sorriso",
    short: "Ajustes sutis de forma, proporção e contorno gengival.",
    description:
      "Abordagem integrada que considera dentes, gengiva e lábios para um sorriso proporcional e coerente com a sua identidade.",
    image: detail,
    enabled: true,
  },
  {
    slug: "preventiva",
    title: "Odontologia preventiva",
    short: "Check-ups, profilaxia e acompanhamento para a saúde a longo prazo.",
    description:
      "Consultas periódicas, limpeza profissional e orientação personalizada — a base de qualquer sorriso saudável.",
    image: room,
    enabled: true,
  },
];

export const activeTreatments = () => treatments.filter((t) => t.enabled);

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/tratamentos", label: "Tratamentos" },
  { to: "/contato", label: "Contato" },
] as const;
