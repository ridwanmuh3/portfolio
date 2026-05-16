import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  eyebrow?: string;
  id: string;
  title: string;
}

export function Section({ children, eyebrow, id, title }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section className="grid scroll-mt-25 gap-8" id={id} aria-labelledby={titleId}>
      <div className="grid max-w-[760px] content-start gap-2.5" data-section-heading>
        {eyebrow ? <p className="text-[15px] font-semibold uppercase text-accent-lime">{eyebrow}</p> : null}
        <h2 id={titleId} className="max-w-[720px] text-[42px] leading-[1.12] font-semibold text-surface max-md:text-3xl max-sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
