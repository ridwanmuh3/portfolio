import { profile } from "@data/profile";

export function CallToAction() {
  return (
    <section
      className="grid scroll-mt-25 grid-cols-[minmax(0,1fr)_auto] items-center gap-7 rounded-lg border border-white/20 bg-[linear-gradient(135deg,rgba(21,15,35,0.96),rgba(66,32,130,0.86))] p-10 shadow-2xl shadow-black/20 backdrop-blur-[18px] max-lg:grid-cols-1 max-sm:p-7"
      aria-labelledby="cta-title"
    >
      <div>
        {/* <p className="text-[15px] font-semibold uppercase text-accent-lime">CTA</p> */}
        <h2
          className="max-w-[720px] text-[42px] leading-[1.12] font-semibold text-surface max-md:text-3xl max-sm:text-2xl"
          id="cta-title"
        >
          Need a clean web application or backend service?
        </h2>
        <p className="mt-3 max-w-[680px] text-muted">
          Send the project context or technical problem. I can help with
          planning, development, and deployment.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2 max-lg:justify-start">
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-accent-lime px-4 font-extrabold text-primary no-underline hover:bg-surface hover:text-primary max-sm:w-full"
          href={`mailto:${profile.email}`}
        >
          Email me
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/15 bg-transparent px-4 font-extrabold text-surface no-underline hover:bg-accent-lime/15 hover:text-surface max-sm:w-full"
          href={profile.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
