import { experiencesData } from "@data/experiences";
import { ExperienceCard } from "@components/ui/ExperienceCard";
import { Section } from "@components/ui/Section";

export function Experiences() {
  return (
    <Section id="experience" eyebrow="Experience" title="Recent work with relevant technical scope.">
      <div className="grid gap-[18px]">
        {experiencesData.map((experience, index) => (
          <ExperienceCard key={`${experience.title}-${experience.duration}`} experience={experience} index={index} />
        ))}
      </div>
    </Section>
  );
}
