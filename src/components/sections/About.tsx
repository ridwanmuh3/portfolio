import { Section } from "@components/ui/Section";
import { profile } from "@data/profile";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Fullstack developer focused on structure, performance, and security."
    >
      <div className="grid grid-cols-[minmax(0,1fr)_320px] items-stretch gap-6 max-lg:grid-cols-1">
        <p className="leading-relaxed text-muted">{profile.about}</p>
        <div className="rounded-lg border-l-4 border-accent-lime bg-accent-lime/10 p-4 backdrop-blur-sm">
          <p className="leading-relaxed text-muted">Work output: usable interfaces, maintainable code, and production-ready deployment.</p>
        </div>
      </div>
    </Section>
  );
}
