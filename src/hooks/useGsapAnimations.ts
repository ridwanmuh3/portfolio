import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapAnimations() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const context = gsap.context(() => {
      gsap.set("[data-hero-stagger]", { autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 28 });
      gsap.set("[data-hero-card]", {
        autoAlpha: reduceMotion ? 1 : 0,
        rotateX: reduceMotion ? 0 : 7,
        scale: reduceMotion ? 1 : 0.96,
        transformPerspective: 1000,
        y: reduceMotion ? 0 : 26,
      });
      gsap.set("[data-reveal]", { autoAlpha: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.98, y: reduceMotion ? 0 : 34 });
      gsap.set("[data-section-heading]", { autoAlpha: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 22 });

      if (reduceMotion) {
        return;
      }

      gsap
        .timeline({ defaults: { duration: 0.82, ease: "power3.out" } })
        .fromTo(
          "[data-header]",
          { autoAlpha: 0, y: -18 },
          { autoAlpha: 1, clearProps: "transform", duration: 0.62, y: 0 },
        )
        .to("[data-hero-stagger]", { autoAlpha: 1, clearProps: "transform", stagger: 0.08, y: 0 }, "-=0.2")
        .to("[data-hero-card]", { autoAlpha: 1, clearProps: "transform", rotateX: 0, scale: 1, y: 0 }, "-=0.58");

      gsap.to("[data-mesh]", {
        duration: 18,
        ease: "sine.inOut",
        repeat: -1,
        rotation: 8,
        scale: 1.08,
        yoyo: true,
      });

      gsap.to("[data-mesh-grid]", {
        backgroundPosition: "72px 72px",
        duration: 22,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray<HTMLElement>("[data-section-heading]").forEach((heading) => {
        gsap.to(heading, {
          autoAlpha: 1,
          clearProps: "transform",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 82%",
            once: true,
          },
          y: 0,
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((target, index) => {
        gsap.to(target, {
          autoAlpha: 1,
          clearProps: "transform",
          duration: 0.78,
          ease: "power3.out",
          scale: 1,
          scrollTrigger: {
            trigger: target,
            start: "top 86%",
            once: true,
          },
          y: 0,
          delay: Number(target.dataset.revealDelay ?? index % 3) * 0.06,
        });
      });
    });

    return () => context.revert();
  }, []);
}
