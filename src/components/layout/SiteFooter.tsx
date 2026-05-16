import { connectLinksData } from "@data/connect-links";
import { profile } from "@data/profile";
import { SocialIcon } from "@components/ui/SocialIcon";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-24 flex items-center justify-between gap-6 border-t border-white/15 pt-6 max-md:flex-col max-md:items-start max-md:gap-4"
    >
      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}. Built with Bun, React,
        and Vite.
      </p>
      <ul
        className="flex flex-wrap justify-end gap-2 max-md:justify-start"
        aria-label="Contact links"
      >
        {connectLinksData.map((link) => (
          <li key={link.url}>
            <a
              className="inline-flex min-h-10 items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.08] px-3 text-sm font-bold text-surface no-underline backdrop-blur-sm hover:border-accent-lime/50 hover:bg-accent-lime/15 hover:text-surface"
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
