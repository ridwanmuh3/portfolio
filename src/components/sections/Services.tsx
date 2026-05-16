import { services } from "@data/profile";
import { Section } from "@components/ui/Section";

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="Services I can help deliver.">
      <div className="grid grid-cols-3 gap-[18px] max-lg:grid-cols-1">
        {services.map((service, index) => (
          <article
            className="grid min-h-[230px] content-start gap-3.5 rounded-lg border border-white/15 bg-primary/60 p-[22px] shadow-2xl shadow-black/20 backdrop-blur-[18px] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-lime/50"
            key={service.title}
            data-reveal
            data-reveal-delay={index}
          >
            <span className="text-3xl leading-none font-extrabold text-accent-pink" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-lg leading-snug font-extrabold text-surface">{service.title}</h3>
            <p className="leading-relaxed text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
