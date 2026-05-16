import redirectIcon from "@assets/images/redirect.svg";
import type { ExperienceObj } from "../../types";

interface ExperienceCardProps {
  experience: ExperienceObj;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const { duration, title, url, place, description, skills } = experience;

  return (
    <article
      className="grid grid-cols-[170px_minmax(0,1fr)] gap-6 rounded-lg border border-white/15 bg-primary/60 p-[22px] shadow-2xl shadow-black/20 backdrop-blur-[18px] transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-accent-lime/50 max-md:grid-cols-1"
      data-reveal
      data-reveal-delay={index}
    >
      <p className="pt-0.5 text-[15px] font-semibold text-accent-lime">{duration}</p>
      <div className="grid gap-2">
        {url ? (
          <a className="inline-flex w-fit items-center gap-2 text-lg leading-snug font-extrabold text-surface hover:text-accent-lime" href={url} target="_blank" rel="noreferrer">
            <span>{title}</span>
            <img className="size-4" src={redirectIcon} alt="" aria-hidden="true" width="16" height="16" loading="lazy" />
          </a>
        ) : (
          <h3 className="text-lg leading-snug font-extrabold text-surface">{title}</h3>
        )}
        <p className="text-[15px] font-semibold text-accent-pink">{place}</p>
        <p className="leading-relaxed text-muted">{description}</p>
        <ul className="flex flex-wrap gap-2" aria-label={`${title} skills`}>
          {skills.map((skill) => (
            <li className="rounded-full border border-white/15 bg-accent-violet/25 px-2.5 py-1.5 text-[13px] leading-tight font-bold text-muted backdrop-blur-sm" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
