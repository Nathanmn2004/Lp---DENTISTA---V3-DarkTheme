import type { ReactNode } from "react";
import { Eyebrow, Reveal } from "./Reveal";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro?: string }) {
  return (
    <section className="mesh relative overflow-hidden border-b border-border/70 pt-44 pb-20 md:pt-56 md:pb-28">
      <div aria-hidden="true" className="absolute right-[8%] top-32 hidden size-56 rounded-full border border-sky/20 md:block" />
      <div className="container-luxe relative grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={0.1}><h1 className="mt-8 text-6xl md:text-8xl leading-[0.98] font-light">{title}</h1></Reveal>
        </div>
        {intro && (
          <Reveal delay={0.2} className="md:col-span-4">
            <p className="border-l border-sky/60 pl-5 text-muted-foreground leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
