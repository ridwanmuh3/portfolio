import ridwanPicture from "@assets/images/ridwan-picture.webp";
import { connectLinksData } from "@data/connect-links";
import { highlights, profile } from "@data/profile";
import { SocialIcon } from "@components/ui/SocialIcon";

export function Hero() {
  return (
    <section
      className="grid min-h-[600px] grid-cols-[minmax(0,1fr)_380px] items-center gap-16 py-7 max-lg:grid-cols-1 max-lg:gap-10 max-lg:min-h-0 max-md:gap-8"
      aria-labelledby="intro-title"
    >
      <div className="grid max-w-[700px] gap-4">
        <p className="text-[15px] font-semibold uppercase text-accent-lime" data-hero-stagger>{profile.location}</p>
        <h1 id="intro-title" className="max-w-[660px] text-[78px] leading-[1.02] font-extrabold text-surface max-lg:text-6xl max-md:text-[42px] max-sm:text-4xl" data-hero-stagger>
          {profile.name}
        </h1>
        <p className="text-2xl font-extrabold text-accent-lime max-md:text-xl" data-hero-stagger>{profile.role}</p>
        <p className="max-w-[600px] text-lg leading-relaxed text-muted max-md:text-base" data-hero-stagger>{profile.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2" aria-label="Primary links" data-hero-stagger>
          <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-accent-lime px-4 font-extrabold text-primary no-underline hover:bg-surface hover:text-primary max-sm:w-full" href={`mailto:${profile.email}`}>
            Start a project
          </a>
          <a className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-white/[0.08] px-4 font-extrabold text-surface no-underline hover:bg-accent-lime/15 hover:text-surface max-sm:w-full" href="#services">
            View services
          </a>
        </div>
        <div className="flex flex-wrap gap-2.5" aria-label="Social links" data-hero-stagger>
          {connectLinksData.slice(0, 3).map((link) => (
            <a
              className="inline-flex min-h-10 items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.08] px-3 text-sm font-bold text-surface no-underline backdrop-blur-sm hover:border-accent-lime/50 hover:bg-accent-lime/15 hover:text-surface"
              key={link.url}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
            >
              <SocialIcon icon={link.icon} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-3.5 self-stretch rounded-lg border border-white/15 bg-primary/60 p-3.5 shadow-2xl shadow-black/25 backdrop-blur-[18px] max-lg:max-w-[520px] max-md:max-w-none" data-hero-card>
        <div className="aspect-square overflow-hidden rounded-lg border border-white/15 bg-primary shadow-xl shadow-black/20">
          <img
            className="size-full object-cover"
            src={ridwanPicture}
            alt="Portrait of Ridwan Muhammad Raihan"
            width="352"
            height="352"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <dl className="grid overflow-hidden rounded-lg border border-white/15 bg-white/[0.06] backdrop-blur-sm" aria-label="Portfolio highlights">
          {highlights.map((item) => (
            <div className="border-t border-white/15 p-4 first:border-t-0" key={item.label}>
              <dt className="text-lg font-extrabold text-surface">{item.value}</dt>
              <dd className="text-[13px] font-bold text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
