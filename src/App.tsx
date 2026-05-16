import { SiteHeader } from "@components/layout/SiteHeader";
import { SiteFooter } from "@components/layout/SiteFooter";
import { About } from "@components/sections/About";
import { CallToAction } from "@components/sections/CallToAction";
import { Experiences } from "@components/sections/Experiences";
import { Hero } from "@components/sections/Hero";
import { Services } from "@components/sections/Services";
import { Skills } from "@components/sections/Skills";
import { useGsapAnimations } from "./hooks/useGsapAnimations";

export default function App() {
  useGsapAnimations();

  return (
    <>
      <a
        className="fixed left-4 top-4 z-30 -translate-y-40 rounded bg-accent-lime px-3.5 py-2.5 font-bold text-primary focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <div className="relative isolate min-h-screen overflow-x-hidden bg-canvas text-surface">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="background-mesh" data-mesh />
          <div className="background-mesh-grid" data-mesh-grid />
        </div>
        <SiteHeader />
        <div className="relative z-10 mx-auto w-[min(100%-48px,1120px)] py-14 max-sm:w-[min(100%-24px,1120px)] max-sm:pt-11">
          <main id="main-content" className="grid gap-[104px] max-md:gap-[76px]" tabIndex={-1}>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Experiences />
            <CallToAction />
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}
