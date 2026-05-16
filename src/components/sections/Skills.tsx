import { skillGroups } from "@data/profile";
import { Section } from "@components/ui/Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Core stack for building products from planning to deployment.">
      <div className="grid grid-cols-2 gap-[18px] max-md:grid-cols-1">
        {skillGroups.map((group, index) => (
          <section
            className="grid content-start gap-3.5 rounded-lg border border-white/15 bg-primary/60 p-[22px] shadow-2xl shadow-black/20 backdrop-blur-[18px] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-lime/50"
            key={group.title}
            aria-labelledby={`skill-${group.title}`}
            data-reveal
            data-reveal-delay={index}
          >
            <h3 className="text-lg leading-snug font-extrabold text-surface" id={`skill-${group.title}`}>{group.title}</h3>
            <ul className="flex flex-wrap items-start gap-2">
              {group.skills.map((skill) => (
                <li className="rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-1.5 text-[13px] leading-tight font-bold text-muted backdrop-blur-sm" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
